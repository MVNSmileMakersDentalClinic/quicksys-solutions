"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

type ImageLightboxContextValue = {
  openLightbox: (item: LightboxItem) => void;
};

const ImageLightboxContext = createContext<ImageLightboxContextValue | null>(
  null
);

export function useImageLightbox() {
  const context = useContext(ImageLightboxContext);
  if (!context) {
    throw new Error("useImageLightbox must be used within ImageLightboxProvider");
  }
  return context;
}

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);

  const openLightbox = useCallback((next: LightboxItem) => {
    setItem(next);
  }, []);

  const closeLightbox = useCallback(() => setItem(null), []);

  useEffect(() => {
    if (!item) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, closeLightbox]);

  const value = useMemo(() => ({ openLightbox }), [openLightbox]);

  return (
    <ImageLightboxContext.Provider value={value}>
      {children}
      {item && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={item.title ?? item.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close fullscreen photo"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[75vh] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            {(item.title || item.caption) && (
              <div className="mt-4 max-w-2xl text-center text-white">
                {item.title && (
                  <p className="text-lg font-semibold">{item.title}</p>
                )}
                {item.caption && (
                  <p className="mt-1 text-sm text-white/75">{item.caption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </ImageLightboxContext.Provider>
  );
}

type LightboxImageProps = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
};

export function LightboxImage({
  src,
  alt,
  title,
  caption,
  fill,
  width,
  height,
  priority,
  sizes,
  className,
  imageClassName,
  style,
}: LightboxImageProps) {
  const { openLightbox } = useImageLightbox();

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        openLightbox({ src, alt, title, caption });
      }}
      className={cn(
        "cursor-zoom-in rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-500 focus-visible:ring-offset-2",
        fill ? "absolute inset-0 block w-full" : "inline-flex",
        className
      )}
      aria-label={`View ${title ?? alt} fullscreen`}
      style={fill ? undefined : style}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        sizes={sizes}
        className={imageClassName}
        style={fill ? style : undefined}
      />
    </button>
  );
}
