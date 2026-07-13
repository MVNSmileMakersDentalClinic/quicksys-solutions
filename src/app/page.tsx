import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Snowflake, ShieldCheck, Star, Wrench } from "lucide-react";
import { products, siteConfig, whyUs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-200">
              Patna, Bihar · Est. {siteConfig.established}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Quicksys
              <span className="block text-brand-100">Solutions</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-50/90 md:text-xl">
              {siteConfig.tagline}. Split, cassette, ducted, tower & VRV systems
              for homes, offices, and industrial spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-900 hover:bg-brand-50"
              >
                View Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/25 bg-white p-8 shadow-2xl shadow-black/20 md:p-10">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={220}
                  height={220}
                  className="h-36 w-36 object-contain md:h-44 md:w-44"
                  priority
                />
                <p className="mt-5 text-xl font-bold text-brand-900">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {siteConfig.location}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-lg font-bold text-brand-900">
                    {siteConfig.rating}
                  </p>
                  <p className="text-[11px] text-slate-500">Customer rating</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-brand-900">
                    {siteConfig.established}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">Established</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-brand-900">6+</p>
                  <p className="mt-1 text-[11px] text-slate-500">Product lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Product Categories
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-brand-950">
            Cooling systems for every application
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.id}
              href="/products"
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {[
            {
              icon: Snowflake,
              title: "Complete AC Range",
              text: "Split, cassette, ducted, tower and VRV systems under one roof.",
            },
            {
              icon: Wrench,
              title: "Project Guidance",
              text: "Right-capacity recommendations for residential and commercial sites.",
            },
            {
              icon: ShieldCheck,
              title: "Verified Business",
              text: "Established OPC company serving Bihar with reliable supply support.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-100 bg-brand-50/40 p-6"
            >
              <item.icon className="h-8 w-8 text-brand-700" />
              <h3 className="mt-4 text-lg font-semibold text-brand-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-semibold text-brand-950">
          Why choose Quicksys
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {whyUs.map((item) => (
            <div key={item.title} className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Need cooling for your next project?
            </h2>
            <p className="mt-2 text-brand-100">
              Talk to {siteConfig.contactPerson}, {siteConfig.contactRole}.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
