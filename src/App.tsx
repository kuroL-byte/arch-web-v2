import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LegalModal, type LegalModalType } from "./components/LegalModal";
import { getProjectBySlug, type ProjectItem } from "./data/siteContent";
import type { PageId } from "./types/navigation";
import { getPageUrl, PAGE_TITLES, parseLocation } from "./utils/routing";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const initialRoute = parseLocation(
    window.location.pathname,
    window.location.search,
    window.location.hash
  );

  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [selectedSector, setSelectedSector] = useState<string>(initialRoute.sector || "ALL");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | undefined>(
    initialRoute.projectSlug
  );
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const selectedProject: ProjectItem | undefined = getProjectBySlug(selectedProjectSlug);

  // Sync browser back/forward and hash changes
  useEffect(() => {
    const syncFromLocation = () => {
      const resolved = parseLocation(
        window.location.pathname,
        window.location.search,
        window.location.hash
      );
      setCurrentPage(resolved.page);
      setSelectedSector(resolved.sector || "ALL");
      setSelectedProjectSlug(resolved.projectSlug);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", syncFromLocation);
    window.addEventListener("hashchange", syncFromLocation);
    return () => {
      window.removeEventListener("popstate", syncFromLocation);
      window.removeEventListener("hashchange", syncFromLocation);
    };
  }, []);

  // Update document title per page / project
  useEffect(() => {
    if (currentPage === "projects" && selectedProject) {
      document.title = `${selectedProject.name} — ARCHEMIST`;
    } else {
      document.title = PAGE_TITLES[currentPage];
    }
  }, [currentPage, selectedProject]);

  const navigateTo = useCallback((page: PageId, sector?: string, projectSlug?: string) => {
    const nextSector = page === "projects" && !projectSlug ? sector || "ALL" : "ALL";
    const nextSlug = page === "projects" ? projectSlug : undefined;
    const nextUrl = getPageUrl(page, nextSector, nextSlug);

    setCurrentPage(page);
    setSelectedProjectSlug(nextSlug);
    if (page === "projects") {
      setSelectedSector(nextSector);
    }

    if (window.location.pathname + window.location.search !== nextUrl) {
      window.history.pushState({ page, sector: nextSector, projectSlug: nextSlug }, "", nextUrl);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSectorChange = useCallback((sector: string) => {
    setSelectedSector(sector);
    setSelectedProjectSlug(undefined);
    const nextUrl = getPageUrl("projects", sector);
    if (window.location.pathname + window.location.search !== nextUrl) {
      window.history.replaceState({ page: "projects", sector }, "", nextUrl);
    }
  }, []);

  const handleOpenProject = useCallback(
    (project: ProjectItem) => {
      navigateTo("projects", undefined, project.slug);
    },
    [navigateTo]
  );

  const isProjectDetailRoute = currentPage === "projects" && Boolean(selectedProject);

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        if (selectedProject) {
          return (
            <ProjectDetailPage
              key={selectedProject.slug}
              project={selectedProject}
              onNavigate={navigateTo}
            />
          );
        }
        return (
          <ProjectsPage
            selectedSector={selectedSector}
            onSectorChange={handleSectorChange}
            onNavigate={navigateTo}
            onSelectProject={handleOpenProject}
          />
        );
      case "about":
        return <AboutPage onNavigate={navigateTo} />;
      case "services":
        return <ServicesPage onNavigate={navigateTo} />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 font-sans selection:bg-brand-500 selection:text-white flex flex-col">
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {!isProjectDetailRoute && (
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      )}

      <main className="flex-1">{renderPage()}</main>

      <Footer
        onNavigate={navigateTo}
        onOpenLegal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}
