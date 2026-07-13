import Link from "next/link";
import {
  ArrowRight,
  Award,
  MessageCircle,
  Phone,
  Snowflake,
  Star,
  Zap,
} from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { galleryItems, products, siteConfig, whyUs } from "@/lib/data";

export default function HomePage() {
  const awards = galleryItems.filter((item) => item.category === "Events");
  const marqueeItems = [...products, ...products];

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,168,200,0.45),transparent_45%),radial-gradient(ellipse_at_80%_10%,rgba(245,165,36,0.18),transparent_35%),radial-gradient(ellipse_at_70%_80%,rgba(52,189,224,0.2),transparent_40%)]" />
        <div className="pointer-events-none absolute left-[12%] top-[18%] h-40 w-40 animate-float-slow rounded-full bg-ice-400/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[20%] right-[15%] h-52 w-52 animate-float rounded-full bg-amber-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <p className="text-sm font-medium text-ice-300">
              {siteConfig.location} · Est. {siteConfig.established}
            </p>
            <h1 className="mt-4 font-display text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Quicksys
              <span className="mt-1 block text-gradient">Solutions</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-navy-100/90">
              {siteConfig.tagline} for homes, offices, and industrial spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Explore products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ice-400/30 via-transparent to-amber-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-navy-950 shadow-2xl shadow-black/30">
              <div className="bg-gradient-to-b from-slate-200/90 to-black p-4 sm:p-5">
                <LightboxImage
                  src={siteConfig.nameImage}
                  alt={siteConfig.name}
                  title={siteConfig.name}
                  width={480}
                  height={180}
                  imageClassName="mx-auto h-auto w-full object-contain"
                  className="w-full"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-3 bg-white p-6">
                <div className="text-center">
                  <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="font-display text-2xl font-semibold text-navy-900">
                    {siteConfig.rating}
                  </p>
                  <p className="text-[11px] text-navy-500">Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-semibold text-navy-900">
                    {siteConfig.established}
                  </p>
                  <p className="mt-1 text-[11px] text-navy-500">Established</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-semibold text-navy-900">
                    6+
                  </p>
                  <p className="mt-1 text-[11px] text-navy-500">Product lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-frost-200 bg-white py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pl-4">
          {marqueeItems.map((product, index) => (
            <span
              key={`${product.id}-${index}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-500"
            >
              <Snowflake className="h-4 w-4 text-ice-500" />
              {product.title}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Products</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">
              Cooling for every space
            </h2>
          </div>
          <Link href="/products" className="btn-dark">
            Full range
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="modern-card group">
              <div className="relative aspect-[4/3] overflow-hidden bg-frost-100">
                <LightboxImage
                  src={product.image}
                  alt={product.title}
                  title={product.title}
                  caption={product.summary}
                  fill
                  imageClassName="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-navy-950">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {product.summary}
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Hi, I am interested in ${product.title} from Quicksys Solutions.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-5 w-full"
                >
                  Enquire now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {awards.length > 0 && (
        <section className="relative overflow-hidden bg-gradient-to-b from-frost-100 to-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 max-w-2xl">
              <p className="section-label">Recognition</p>
              <h2 className="mt-2 flex items-center gap-3 font-display text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">
                <Award className="h-9 w-9 text-amber-500" />
                Government awards
              </h2>
              <p className="mt-3 text-navy-600">
                Honoured for excellence — tap any photo for fullscreen.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {awards.map((item) => (
                <article key={item.id} className="modern-card">
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
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-semibold text-navy-950">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-navy-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ice-700 transition hover:text-ice-600"
              >
                View full gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <p className="section-label">Why us</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-navy-950 md:text-5xl">
            Built for real projects
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {whyUs.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-frost-200 bg-white/80 p-6 backdrop-blur transition hover:border-ice-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ice-50 text-ice-600">
                {index === 0 ? (
                  <Zap className="h-5 w-5" />
                ) : index === 1 ? (
                  <Snowflake className="h-5 w-5" />
                ) : index === 2 ? (
                  <Phone className="h-5 w-5" />
                ) : (
                  <Award className="h-5 w-5" />
                )}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 text-white md:px-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-ice-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-ice-300">Get a quotation</p>
              <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Ready to cool your space?
              </h2>
              <p className="mt-3 text-navy-200">
                Talk to {siteConfig.contactPerson}, {siteConfig.contactRole}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-accent">
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
                className="btn-ghost-light"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
