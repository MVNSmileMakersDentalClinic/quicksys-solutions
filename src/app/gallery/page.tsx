import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Quicksys Solutions company and event photos from Patna, Bihar.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Gallery
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950">
          Company & Events
        </h1>
        <p className="mt-3 text-slate-600">
          A look at our company and the events we are part of. More photos will
          be added here regularly.
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
