import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { navLinks, products, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-frost-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <LightboxImage
              src={siteConfig.logo}
              alt={siteConfig.name}
              title={siteConfig.name}
              width={52}
              height={52}
              imageClassName="h-12 w-12 rounded-md bg-white object-contain p-1"
            />
            <div>
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                Quicksys
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ice-400">
                Solutions
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            {siteConfig.legalName}. {siteConfig.nature}. Est.{" "}
            {siteConfig.established}, {siteConfig.location}.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-ice-500"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-ice-500"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-white">
            Products
          </p>
          <ul className="space-y-2 text-sm text-navy-200">
            {products.slice(0, 5).map((product) => (
              <li key={product.id}>
                <Link href="/products" className="hover:text-ice-300">
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-white">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm text-navy-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ice-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-white">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-navy-200">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ice-400" />
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ice-400" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ice-400" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
          <Link href="/contact" className="btn-quote mt-5 inline-flex">
            Get Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-navy-300">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights
        reserved.
      </div>
    </footer>
  );
}
