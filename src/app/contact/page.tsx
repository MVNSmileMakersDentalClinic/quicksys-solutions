import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quicksys Solutions in Patna for air conditioning product enquiries, quotations, and project support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="border-b border-frost-200 pb-8">
        <p className="section-label">Contact</p>
        <h1 className="mt-2 font-display text-5xl font-bold uppercase tracking-wide text-navy-950">
          Get a Quote
        </h1>
        <p className="mt-3 max-w-2xl text-navy-600">
          Share your requirement and our team will help with product options and
          pricing guidance.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <a
          href={`tel:+91${siteConfig.phone}`}
          className="dealer-panel flex flex-col items-start p-6 transition hover:border-ice-400 hover:shadow-md"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-ice-400">
            <Phone className="h-5 w-5" />
          </span>
          <p className="mt-4 font-display text-2xl font-bold uppercase text-navy-950">
            Call Us
          </p>
          <p className="mt-1 text-lg font-semibold text-ice-700">
            {siteConfig.phoneDisplay}
          </p>
          <p className="mt-2 text-sm text-navy-500">
            Speak with {siteConfig.contactPerson} for product guidance.
          </p>
        </a>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
            "Hi Quicksys Solutions, I would like a product quotation."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="dealer-panel flex flex-col items-start border-[#25D366]/40 p-6 transition hover:border-[#25D366] hover:shadow-md"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#25D366] text-white">
            <MessageCircle className="h-5 w-5" />
          </span>
          <p className="mt-4 font-display text-2xl font-bold uppercase text-navy-950">
            WhatsApp
          </p>
          <p className="mt-1 text-lg font-semibold text-[#128C7E]">
            Instant enquiry
          </p>
          <p className="mt-2 text-sm text-navy-500">
            Send product interest, location, and capacity requirement.
          </p>
          <span className="btn-whatsapp mt-4">Message Now</span>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="dealer-panel flex flex-col items-start p-6 transition hover:border-amber-400 hover:shadow-md"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-400 text-navy-950">
            <Mail className="h-5 w-5" />
          </span>
          <p className="mt-4 font-display text-2xl font-bold uppercase text-navy-950">
            Email
          </p>
          <p className="mt-1 break-all text-sm font-semibold text-navy-700">
            {siteConfig.email}
          </p>
          <p className="mt-2 text-sm text-navy-500">
            Prefer a written quotation? Drop us a mail.
          </p>
        </a>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="dealer-panel p-6">
          <div className="flex items-start gap-3">
            <UserRound className="mt-1 h-5 w-5 text-ice-600" />
            <div>
              <p className="font-display text-xl font-bold uppercase text-navy-950">
                {siteConfig.contactPerson}
              </p>
              <p className="text-sm text-navy-600">{siteConfig.contactRole}</p>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3 border-t border-frost-200 pt-5">
            <MapPin className="mt-1 h-5 w-5 text-ice-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-navy-500">
                Location
              </p>
              <p className="mt-1 text-navy-800">{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-navy-900 p-6 text-white md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ice-400">
            Business details
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase">
            {siteConfig.legalName}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-200">
            <li>
              <span className="text-ice-400">Nature:</span> {siteConfig.nature}
            </li>
            <li>
              <span className="text-ice-400">Established:</span>{" "}
              {siteConfig.established}
            </li>
            <li>
              <span className="text-ice-400">Team:</span> {siteConfig.employees}
            </li>
            <li>
              <span className="text-ice-400">Banker:</span> {siteConfig.bank}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
