import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Quicksys Solutions company and event photos from Patna, Bihar.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10 border-b border-frost-200 pb-8">
        <p className="section-label">Gallery</p>
        <h1 className="mt-2 font-display text-5xl font-bold uppercase tracking-wide text-navy-950">
          Company & Events
        </h1>
        <p className="mt-3 max-w-2xl text-navy-600">
          Government awards, company moments, and events. Click any photo to
          view fullscreen.
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
