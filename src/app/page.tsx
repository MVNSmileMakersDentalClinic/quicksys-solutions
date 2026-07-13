import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Snowflake, ShieldCheck, Wrench } from "lucide-react";
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
            <div className="mt-6">
              <Image
                src={siteConfig.wordmark}
                alt={siteConfig.name}
                width={520}
                height={120}
                className="h-auto w-full max-w-md object-contain brightness-0 invert"
                priority
              />
            </div>
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

          <div className="mx-auto flex w-full max-w-md items-center justify-center">
            <div className="rounded-[2rem] border border-white/25 bg-white p-10 shadow-2xl shadow-black/20 md:p-14">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={280}
                height={280}
                className="mx-auto h-48 w-48 object-contain md:h-56 md:w-56"
                priority
              />
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
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
