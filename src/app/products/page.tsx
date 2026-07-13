import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Quicksys Solutions product range including split, cassette, ducted, tower and VRV air conditioning systems.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Our Range
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950">
          Products & Systems
        </h1>
        <p className="mt-3 text-slate-600">
          Complete air conditioning and ventilation solutions for homes,
          offices, retail, and industrial spaces across Bihar.
        </p>
      </div>

      <div className="mt-10 grid gap-8">
        {products.map((product) => (
          <article
            key={product.id}
            className="grid overflow-hidden rounded-3xl border bg-white shadow-sm md:grid-cols-[280px_1fr]"
          >
            <div className="relative min-h-56">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-brand-950">
                {product.title}
              </h2>
              <p className="mt-2 text-slate-600">{product.summary}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {product.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-900"
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
                className="mt-6 inline-flex rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-brand-50 p-6 text-center">
        <p className="text-slate-700">
          Looking for a custom combination or bulk supply?
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex font-semibold text-brand-800 underline"
        >
          Reach our team
        </Link>
      </div>
    </div>
  );
}
