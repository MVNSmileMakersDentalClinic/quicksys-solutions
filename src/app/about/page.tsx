import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quicksys Solutions (OPC) Private Limited — air conditioning manufacturer and supplier based in Patna, Bihar since 2018.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            About Us
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950">
            Built for reliable climate solutions
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Established in {siteConfig.established} in {siteConfig.location},{" "}
            <strong>{siteConfig.legalName}</strong> is engaged as a manufacturer,
            wholesaler and trader of split air conditioners, ducted systems,
            cassette ACs, VRV systems, tower ACs, ventilation systems and more.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We help customers choose the right cooling capacity and product type
            for residential, commercial, and industrial requirements — with clear
            communication and practical recommendations.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border bg-white p-3 shadow-sm">
          <Image
            src="/images/logo.jpg"
            alt={siteConfig.name}
            width={700}
            height={700}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Established", value: siteConfig.established },
          { label: "Location", value: siteConfig.location },
          { label: "Team Size", value: siteConfig.employees },
          { label: "Business", value: "OPC Private Limited" },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-brand-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
