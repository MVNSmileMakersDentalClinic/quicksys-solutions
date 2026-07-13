"use client";

import { Award, ImageIcon } from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { galleryItems } from "@/lib/data";

const categories = ["Events", "Company"] as const;

export function GalleryGrid() {
  return (
    <div className="space-y-14">
      {categories.map((category) => {
        const items = galleryItems.filter((item) => item.category === category);

        return (
          <section key={category}>
            <div className="mb-6 flex items-center gap-3">
              {category === "Events" && (
                <Award className="h-6 w-6 text-amber-500" />
              )}
              <div>
                <p className="section-label">
                  {category === "Events" ? "Recognition" : "Workplace"}
                </p>
                <h2 className="mt-1 font-display text-3xl font-bold uppercase tracking-wide text-navy-950">
                  {category === "Events" ? "Government Awards" : "Company"}
                </h2>
                <p className="mt-1 text-sm text-navy-600">
                  {category === "Events"
                    ? "Award-winning recognition from government bodies."
                    : "Photos of our company, workplace, and team."}
                </p>
              </div>
            </div>

            {items.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="dealer-panel overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] bg-frost-100">
                      <LightboxImage
                        src={item.image}
                        alt={item.title}
                        title={item.title}
                        caption={item.description}
                        fill
                        imageClassName="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-xl font-bold uppercase text-navy-950">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-1 text-sm text-navy-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-frost-200 bg-white px-6 py-16 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-md bg-frost-100">
                  <ImageIcon className="h-7 w-7 text-navy-500" />
                </div>
                <p className="font-display text-xl font-bold uppercase text-navy-900">
                  Photos coming soon
                </p>
                <p className="mt-2 max-w-md text-sm text-navy-600">
                  Add images to{" "}
                  <code className="rounded bg-frost-100 px-1.5 py-0.5 text-xs">
                    public/gallery/
                    {category === "Company" ? "company" : "events"}/
                  </code>{" "}
                  and register them in the gallery list.
                </p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
