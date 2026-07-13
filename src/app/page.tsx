import Link from "next/link";
import {
  ArrowRight,
  Award,
  MessageCircle,
  Phone,
  Snowflake,
  Star,
  ThermometerSnowflake,
} from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { galleryItems, products, siteConfig, whyUs } from "@/lib/data";

export default function HomePage() {
  const awards = galleryItems.filter((item) => item.category === "Events");

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,200,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(245,165,36,0.12),transparent_40%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-ice-400/30 bg-ice-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ice-300">
              <Snowflake className="h-3.5 w-3.5" />
              {siteConfig.location} · Est. {siteConfig.established}
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide md:text-6xl lg:text-7xl">
              Quicksys
              <span className="mt-1 block text-ice-400">Solutions</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-navy-100 md:text-lg">
              {siteConfig.tagline}. Split, cassette, ducted, tower & VRV systems
              for homes, offices, and industrial spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-quote">
                View Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="btn-outline-light"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-lg border border-white/15 bg-white p-6 shadow-2xl shadow-black/30 md:p-8">
              <div className="flex flex-col items-center text-center">
                <LightboxImage
                  src={siteConfig.nameImage}
                  alt={siteConfig.name}
                  title={siteConfig.name}
                  width={480}
                  height={160}
                  imageClassName="mx-auto h-auto w-full max-w-sm object-contain"
                  className="w-full"
                  priority
                />
                <p className="mt-3 text-sm font-medium text-navy-500">
                  {siteConfig.location}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-frost-200 pt-5">
                <div className="text-center">
                  <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-md bg-amber-50 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="font-display text-2xl font-bold text-navy-900">
                    {siteConfig.rating}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">
                    Rating
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">
                    {siteConfig.established}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-navy-500">
                    Established
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">
                    6+
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-navy-500">
                    Product lines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-frost-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href="/products"
              className="shrink-0 rounded-md border border-frost-200 bg-frost-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy-800 transition hover:border-ice-400 hover:bg-ice-50 hover:text-ice-700"
            >
              {product.title.replace(" Air Conditioners", "").replace(" Systems", "")}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Product Catalog</p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-navy-950">
              Cooling systems for every application
            </h2>
          </div>
          <Link href="/products" className="btn-navy">
            Full Catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group dealer-panel overflow-hidden transition hover:border-ice-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-frost-100">
                <LightboxImage
                  src={product.image}
                  alt={product.title}
                  title={product.title}
                  caption={product.summary}
                  fill
                  imageClassName="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded bg-navy-900/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  AC Systems
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600">{product.summary}</p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Hi, I am interested in ${product.title} from Quicksys Solutions.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quote mt-4 w-full"
                >
                  Enquire
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {awards.length > 0 && (
        <section className="border-y border-frost-200 bg-white py-14">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label">Recognition</p>
                <h2 className="mt-2 flex items-center gap-2 font-display text-4xl font-bold uppercase tracking-wide text-navy-950">
                  <Award className="h-8 w-8 text-amber-500" />
                  Government Awards
                </h2>
              </div>
              <Link href="/gallery" className="text-sm font-bold uppercase tracking-wide text-ice-600 hover:text-ice-700">
                View Gallery →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {awards.map((item) => (
                <article key={item.id} className="dealer-panel overflow-hidden">
                  <div className="relative aspect-[16/10] bg-frost-100">
                    <LightboxImage
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                      caption={item.description}
                      fill
                      imageClassName="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl font-bold uppercase text-navy-900">
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
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8">
          <p className="section-label">Why Quicksys</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-navy-950">
            Dealer-ready climate partner
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {whyUs.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg border border-frost-200 bg-white p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-900 font-display text-lg font-bold text-ice-400">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: ThermometerSnowflake,
              title: "Complete AC Range",
              text: "Split, cassette, ducted, tower and VRV under one roof.",
            },
            {
              icon: Snowflake,
              title: "Project Guidance",
              text: "Right-capacity recommendations for residential & commercial sites.",
            },
            {
              icon: Award,
              title: "Verified Business",
              text: "OPC company serving Bihar with reliable supply support.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-ice-100 bg-ice-50/60 p-5"
            >
              <item.icon className="h-7 w-7 text-ice-600" />
              <h3 className="mt-3 font-display text-lg font-bold uppercase text-navy-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-navy-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ice-400">
              Request a quotation
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide md:text-4xl">
              Need cooling for your next project?
            </h2>
            <p className="mt-2 text-navy-200">
              Talk to {siteConfig.contactPerson}, {siteConfig.contactRole}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-quote">
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="btn-outline-light"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
