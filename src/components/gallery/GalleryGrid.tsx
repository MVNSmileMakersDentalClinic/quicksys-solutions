"use client";

import { ImageIcon } from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { galleryItems } from "@/lib/data";

const categories = ["Company", "Events"] as const;

export function GalleryGrid() {
  return (
    <div className="space-y-14">
      {categories.map((category) => {
        const items = galleryItems.filter((item) => item.category === category);

        return (
          <section key={category}>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Gallery
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-brand-950">
                {category}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {category === "Company"
                  ? "Photos of our company, workplace, and team."
                  : "Photos from launches, visits, and company events."}
              </p>
            </div>

            {items.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-2xl border bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100">
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
                      <h3 className="font-semibold text-brand-950">{item.title}</h3>
                      {item.description && (
                        <p className="mt-1 text-sm text-slate-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-white px-6 py-16 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
                  <ImageIcon className="h-7 w-7 text-brand-700" />
                </div>
                <p className="font-semibold text-brand-900">
                  Photos coming soon
                </p>
                <p className="mt-2 max-w-md text-sm text-slate-600">
                  Add images to{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                    public/gallery/{category === "Company" ? "company" : "events"}/
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
