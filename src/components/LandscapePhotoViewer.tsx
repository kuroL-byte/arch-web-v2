import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

interface LandscapePhotoViewerProps {
  photos: string[];
  initialIndex: number | null;
  altPrefix: string;
  onClose: () => void;
}

export function LandscapePhotoViewer({
  photos,
  initialIndex,
  altPrefix,
  onClose,
}: LandscapePhotoViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex ?? 0);
  const [zoom, setZoom] = useState<number>(1);
  const touchStartX = useRef<number | null>(null);

  const isOpen = initialIndex !== null && photos.length > 0;

  const goPrev = useCallback(() => {
    setZoom(1);
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goNext = useCallback(() => {
    setZoom(1);
    setActiveIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(2.5, Number((prev + 0.5).toFixed(2))));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => Math.max(1, Number((prev - 0.5).toFixed(2))));
  }, []);

  const toggleImageZoom = useCallback(() => {
    setZoom((prev) => (prev > 1 ? 1 : 1.75));
  }, []);

  // Lock body scroll and register keyboard controls while viewer is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && photos.length > 1) {
        goPrev();
      } else if (e.key === "ArrowRight" && photos.length > 1) {
        goNext();
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-") {
        zoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext, zoomIn, zoomOut, photos.length]);

  if (!isOpen) return null;

  const currentSrc = photos[activeIndex] || photos[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${altPrefix} full-screen photo viewer`}
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || photos.length <= 1) return;
        const endX = e.changedTouches[0]?.clientX;
        if (typeof endX !== "number") return;
        const deltaX = endX - touchStartX.current;
        if (Math.abs(deltaX) > 45) {
          if (deltaX > 0) goPrev();
          else goNext();
        }
        touchStartX.current = null;
      }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center select-none"
    >
      {/* Top-Right Floating Controls: Zoom Out, Zoom In, Close */}
      <div
        className="fixed top-5 right-5 z-20 flex items-center gap-2.5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={zoomOut}
          disabled={zoom <= 1}
          aria-label="Zoom out"
          title="Zoom out (-)"
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-40 disabled:pointer-events-none text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={zoomIn}
          disabled={zoom >= 2.5}
          aria-label="Zoom in"
          title="Zoom in (+)"
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-40 disabled:pointer-events-none text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          title="Close (Esc)"
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Left / Right Side Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photograph"
            className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photograph"
            className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Frameless Centered Landscape Photo */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleImageZoom();
        }}
        className={`relative flex items-center justify-center overflow-hidden ${
          zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      >
        <img
          key={currentSrc}
          src={currentSrc}
          alt={`${altPrefix} - Photograph ${activeIndex + 1}`}
          decoding="async"
          style={{ transform: `scale(${zoom})` }}
          className="max-w-[92vw] max-h-[88vh] object-contain shadow-2xl transition-transform duration-300 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/commercial-interior.jpeg";
          }}
        />
      </div>
    </div>
  );
}
