import type { ProjectSector } from "../data/siteContent";

export function SectorIcon({ sectorKey }: { sectorKey: ProjectSector }) {
  switch (sectorKey) {
    case "INDUSTRIAL":
      return (
        <svg className="w-6 h-6 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M2 20h20M6 20V10l6 4V10l6 4V4h4v16" />
        </svg>
      );
    case "COMMERCIAL":
      return (
        <svg className="w-6 h-6 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg>
      );
    case "INSTITUTIONAL":
      return (
        <svg className="w-6 h-6 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 6v12M6 12h12" />
        </svg>
      );
    case "WORKPLACE & RETAIL":
      return (
        <svg className="w-6 h-6 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M2 7h20" />
        </svg>
      );
  }
}
