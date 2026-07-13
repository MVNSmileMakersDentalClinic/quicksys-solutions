import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t bg-brand-950 text-brand-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl bg-white object-contain p-1"
            />
            <p className="font-display text-2xl font-semibold">{siteConfig.name}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-200">
            {siteConfig.legalName}. Established {siteConfig.established} in{" "}
            {siteConfig.location}. {siteConfig.nature}.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-300">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm text-brand-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-300">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-brand-100">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <a href={`tel:+91${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-300">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
