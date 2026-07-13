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
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 md:h-24">
        <div className="flex items-center gap-3 md:gap-4">
          <LightboxImage
            src={siteConfig.logo}
            alt={siteConfig.name}
            title={siteConfig.name}
            width={72}
            height={72}
            imageClassName="h-14 w-14 object-contain md:h-16 md:w-16"
            priority
          />
          <Link href="/" className="leading-tight">
            <p className="font-display text-xl font-semibold tracking-tight text-brand-900 md:text-2xl">
              Quicksys
            </p>
            <p className="text-sm font-medium text-brand-600 md:text-base">
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
                "rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors",
                pathname === link.href
                  ? "bg-brand-50 text-brand-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-brand-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-700/20 hover:bg-brand-800 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-semibold",
                  pathname === link.href
                    ? "bg-brand-50 text-brand-800"
                    : "text-slate-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white sm:hidden"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
