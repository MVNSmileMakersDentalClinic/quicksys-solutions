"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 md:h-20">
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
          <Link href="/" className="leading-tight">
            <p className="font-display text-xl font-semibold tracking-tight text-navy-950 md:text-2xl">
              Quicksys
            </p>
            <p className="text-xs font-medium text-ice-600 md:text-sm">
              Solutions
            </p>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-navy-900 text-white"
                  : "text-navy-600 hover:bg-frost-100 hover:text-navy-950"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-full border border-frost-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800 transition hover:border-ice-300 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-ice-600" />
            Call
          </a>
          <Link href="/contact" className="btn-accent hidden !px-4 !py-2 sm:inline-flex">
            Get Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-frost-200 bg-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-frost-200 bg-white/95 px-4 py-4 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium",
                  pathname === link.href
                    ? "bg-navy-900 text-white"
                    : "text-navy-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-accent mt-2 w-full"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
