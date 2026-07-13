import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Quicksys Solutions company and event photos from Patna, Bihar.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="section-label">Gallery</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-navy-950 md:text-6xl">
          Moments & milestones
        </h1>
        <p className="mt-4 text-lg text-navy-600">
          Government awards and company moments. Click any photo to view
          fullscreen.
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
