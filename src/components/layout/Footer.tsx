import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-frost-100">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-ice-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <LightboxImage
              src={siteConfig.logo}
              alt={siteConfig.name}
              title={siteConfig.name}
              width={52}
              height={52}
              imageClassName="h-12 w-12 rounded-2xl bg-white object-contain p-1"
            />
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                Quicksys
              </p>
              <p className="text-sm text-ice-300">Solutions</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            {siteConfig.legalName}. Cooling systems for homes, offices, and
            industry across Bihar since {siteConfig.established}.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-ice-500"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-ice-500"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-white">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-ice-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-white">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-navy-200">
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
              <span>
                {siteConfig.address}
                <br />
                <span className="text-navy-300">{siteConfig.coverage}</span>
                <br />
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ice-300 hover:text-ice-200"
                >
                  View on Google Maps
                </a>
              </span>
            </li>
          </ul>
          <Link href="/contact" className="btn-accent mt-6 inline-flex">
            Get Quote
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-4 text-center text-xs text-navy-300">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights
        reserved.
      </div>
    </footer>
  );
}
