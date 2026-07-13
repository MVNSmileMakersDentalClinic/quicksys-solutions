import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { products, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Quicksys Solutions product range including split, cassette, ducted, tower and VRV air conditioning systems.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="border-b border-frost-200 pb-8">
        <p className="section-label">Our Range</p>
        <h1 className="mt-2 font-display text-5xl font-bold uppercase tracking-wide text-navy-950">
          Products & Systems
        </h1>
        <p className="mt-3 max-w-2xl text-navy-600">
          Complete air conditioning and ventilation solutions for homes,
          offices, retail, and industrial spaces across Bihar.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {products.map((product, index) => (
          <article
            key={product.id}
            className="dealer-panel grid overflow-hidden md:grid-cols-[260px_1fr]"
          >
            <div className="relative min-h-52 bg-frost-100 md:min-h-full">
              <LightboxImage
                src={product.image}
                alt={product.title}
                title={product.title}
                caption={product.summary}
                fill
                imageClassName="object-cover"
                sizes="(max-width: 768px) 100vw, 260px"
              />
              <span className="absolute left-3 top-3 rounded bg-navy-900/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                #{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5 md:p-7">
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-navy-950">
                {product.title}
              </h2>
              <p className="mt-2 text-navy-600">{product.summary}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {product.highlights.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-ice-500 bg-frost-50 px-3 py-2 text-sm text-navy-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `Hi, I am interested in ${product.title} from Quicksys Solutions.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg bg-navy-900 p-6 text-center text-white md:p-8">
        <p className="font-display text-2xl font-bold uppercase tracking-wide">
          Looking for a custom combination or bulk supply?
        </p>
        <Link href="/contact" className="btn-quote mt-4 inline-flex">
          Reach our team
        </Link>
      </div>
    </div>
  );
}
