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
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="section-label">Our range</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-navy-950 md:text-6xl">
          Products & systems
        </h1>
        <p className="mt-4 text-lg text-navy-600">
          Complete air conditioning and ventilation solutions for homes,
          offices, retail, and industrial spaces across Bihar.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {products.map((product) => (
          <article
            key={product.id}
            className="modern-card grid md:grid-cols-[300px_1fr]"
          >
            <div className="relative min-h-56 bg-frost-100 md:min-h-full">
              <LightboxImage
                src={product.image}
                alt={product.title}
                title={product.title}
                caption={product.summary}
                fill
                imageClassName="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="p-6 md:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950">
                {product.title}
              </h2>
              <p className="mt-3 text-navy-600">{product.summary}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {product.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-frost-50 px-4 py-3 text-sm text-navy-800"
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

      <div className="mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-center text-white md:p-12">
        <p className="font-display text-3xl font-semibold tracking-tight">
          Need a custom mix or bulk supply?
        </p>
        <Link href="/contact" className="btn-accent mt-6 inline-flex">
          Talk to our team
        </Link>
      </div>
    </div>
  );
}
