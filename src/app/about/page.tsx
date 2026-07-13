import type { Metadata } from "next";
import Link from "next/link";
import { LightboxImage } from "@/components/shared/ImageLightbox";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quicksys Solutions (OPC) Private Limited — air conditioning manufacturer and supplier based in Patna, Bihar since 2018.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="section-label">About Us</p>
          <h1 className="mt-2 font-display text-5xl font-bold uppercase tracking-wide text-navy-950">
            Built for reliable climate solutions
          </h1>
          <p className="mt-4 leading-relaxed text-navy-600">
            Established in {siteConfig.established} in {siteConfig.location},{" "}
            <strong className="text-navy-900">{siteConfig.legalName}</strong>{" "}
            is engaged as a manufacturer, wholesaler and trader of split air
            conditioners, ducted systems, cassette ACs, VRV systems, tower ACs,
            ventilation systems and more.
          </p>
          <p className="mt-4 leading-relaxed text-navy-600">
            We help customers choose the right cooling capacity and product type
            for residential, commercial, and industrial requirements — with clear
            communication and practical recommendations.
          </p>
          <Link href="/contact" className="btn-quote mt-6 inline-flex">
            Request Quotation
          </Link>
        </div>
        <div className="dealer-panel flex items-center justify-center p-8 md:p-12">
          <LightboxImage
            src={siteConfig.logo}
            alt={siteConfig.name}
            title={siteConfig.name}
            width={360}
            height={360}
            imageClassName="mx-auto h-auto w-full max-w-xs object-contain"
            className="w-full justify-center"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Established", value: siteConfig.established },
          { label: "Location", value: siteConfig.location },
          { label: "Team Size", value: siteConfig.employees },
          { label: "Business", value: "OPC Private Limited" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-frost-200 bg-white p-5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ice-600">
              {item.label}
            </p>
            <p className="mt-2 font-display text-2xl font-bold uppercase text-navy-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
