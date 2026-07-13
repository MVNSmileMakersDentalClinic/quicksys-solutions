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
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label">About us</p>
          <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-navy-950 md:text-6xl">
            Climate solutions that feel effortless
          </h1>
          <p className="mt-5 leading-relaxed text-navy-600">
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
          <Link href="/contact" className="btn-accent mt-8 inline-flex">
            Request quotation
          </Link>
        </div>
        <div className="glass-panel flex items-center justify-center p-10 md:p-14">
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

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Established", value: siteConfig.established },
          { label: "Location", value: siteConfig.location },
          { label: "Team size", value: siteConfig.employees },
          { label: "Business", value: "OPC Pvt Ltd" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-frost-200 bg-white p-6"
          >
            <p className="text-sm font-medium text-ice-600">{item.label}</p>
            <p className="mt-2 font-display text-2xl font-semibold text-navy-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
