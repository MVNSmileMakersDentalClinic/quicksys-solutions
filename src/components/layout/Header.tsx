"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Linkedin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 font-medium hover:text-ice-300"
            >
              <Phone className="h-3.5 w-3.5 text-ice-400" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium hover:text-ice-300"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp
            </a>
            <span className="hidden text-navy-200 sm:inline">
              {siteConfig.location} · Est. {siteConfig.established}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded p-1 hover:bg-white/10"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded p-1 hover:bg-white/10"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-frost-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[4.5rem]">
          <div className="flex items-center gap-3">
            <LightboxImage
              src={siteConfig.logo}
              alt={siteConfig.name}
              title={siteConfig.name}
              width={56}
              height={56}
              imageClassName="h-11 w-11 object-contain md:h-12 md:w-12"
              priority
            />
            <Link href="/" className="leading-none">
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-navy-900 md:text-[1.65rem]">
                Quicksys
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ice-600">
                Solutions
              </p>
            </Link>
          </div>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
                  pathname === link.href
                    ? "bg-navy-900 text-white"
                    : "text-navy-700 hover:bg-frost-100 hover:text-navy-950"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-quote hidden sm:inline-flex">
              Get Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-frost-200 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-frost-200 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide",
                    pathname === link.href
                      ? "bg-navy-900 text-white"
                      : "text-navy-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-quote mt-2 w-full"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
