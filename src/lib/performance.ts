// Performance utilities for better loading speeds

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload fonts
  const fontUrls = [
    // Add any custom fonts here if used
  ];

  fontUrls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = url;
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Lazy load non-critical components
export const lazyLoadComponent = (importFn: () => Promise<any>) => {
  return importFn();
};

// Optimize bundle loading
export const prefetchRoute = (routePath: string) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = routePath;
  document.head.appendChild(link);
};

// Memory cleanup utility
export const cleanupUnusedResources = () => {
  // Clean up any unused event listeners or intervals
  if (typeof window !== "undefined") {
    // Force garbage collection hint (only works in dev mode)
    if (import.meta.env.DEV && "gc" in window) {
      (window as any).gc();
    }
  }
};

// Optimize images for different viewport sizes
export const getOptimizedImageSrc = (
  baseSrc: string,
  width: number,
  quality = 75,
) => {
  // If using a CDN like Cloudinary or similar, you can add optimization parameters
  // For now, return the base src but this can be extended
  return baseSrc;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Debounce utility for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for resize events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default {
  preloadCriticalResources,
  lazyLoadComponent,
  prefetchRoute,
  cleanupUnusedResources,
  getOptimizedImageSrc,
  prefersReducedMotion,
  debounce,
  throttle,
};
