import type { PageId } from '../types/navigation';

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'ARCHEMIST — Industrial Architecture, Engineering & Turnkey EPC Infrastructure',
  projects: 'Projects & Portfolio — ARCHEMIST',
  about: 'About Us — ARCHEMIST',
  services: 'Services & Sectors — ARCHEMIST',
  contact: 'Contact Us — ARCHEMIST',
};

export interface ResolvedRoute {
  page: PageId;
  sector?: string;
  projectSlug?: string;
}

/**
 * Resolves the active page, optional project sector filter, and optional project slug
 * from the browser URL. Supports /projects/[slug], /projects, /about, /services, /contact,
 * and legacy hash links.
 */
export function parseLocation(
  pathname: string,
  search: string,
  hash: string
): ResolvedRoute {
  const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase() || '/';
  const searchParams = new URLSearchParams(search);
  const querySector = searchParams.get('sector') || undefined;

  if (normalizedPath.startsWith('/projects/') || normalizedPath.startsWith('/project/')) {
    const parts = normalizedPath.split('/').filter(Boolean);
    const slug = parts[1];
    if (slug) {
      return { page: 'projects', projectSlug: slug };
    }
  }

  if (normalizedPath === '/projects' || normalizedPath === '/project') {
    return { page: 'projects', sector: querySector };
  }
  if (normalizedPath === '/about' || normalizedPath === '/about-us') {
    return { page: 'about' };
  }
  if (normalizedPath === '/services' || normalizedPath === '/service') {
    return { page: 'services' };
  }
  if (normalizedPath === '/contact' || normalizedPath === '/contact-us') {
    return { page: 'contact' };
  }

  // Fallback support for legacy hash URLs
  if (hash) {
    const cleanHash = hash.toLowerCase();
    if (cleanHash.startsWith('#gallery') || cleanHash.startsWith('#projects') || cleanHash === '#clients') {
      const hashQuery = hash.split('?')[1] || '';
      const hashSector = new URLSearchParams(hashQuery).get('sector') || querySector;
      return { page: 'projects', sector: hashSector };
    }
    if (cleanHash === '#about' || cleanHash === '#discipline') {
      return { page: 'about' };
    }
    if (cleanHash === '#sectors' || cleanHash === '#services') {
      return { page: 'services' };
    }
    if (cleanHash === '#contact') {
      return { page: 'contact' };
    }
  }

  return { page: 'home' };
}

/** Builds the canonical clean URL path for a given page, optional sector filter, or project slug. */
export function getPageUrl(page: PageId, sector?: string, projectSlug?: string): string {
  switch (page) {
    case 'projects':
      if (projectSlug) {
        return `/projects/${encodeURIComponent(projectSlug)}`;
      }
      if (sector && sector !== 'ALL') {
        return `/projects?sector=${encodeURIComponent(sector)}`;
      }
      return '/projects';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'contact':
      return '/contact';
    case 'home':
    default:
      return '/';
  }
}
