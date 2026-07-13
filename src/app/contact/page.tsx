import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quicksys Solutions in Patna for air conditioning product enquiries, quotations, and project support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="section-label">Contact</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-navy-950 md:text-6xl">
          Let’s cool your next project
        </h1>
        <p className="mt-4 text-lg text-navy-600">
          Share your requirement and our team will help with product options and
          pricing guidance.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <a
          href={`tel:+91${siteConfig.phone}`}
          className="modern-card group p-7"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-ice-300 transition group-hover:scale-105">
            <Phone className="h-5 w-5" />
          </span>
          <p className="mt-5 font-display text-2xl font-semibold text-navy-950">
            Call us
          </p>
          <p className="mt-2 text-lg font-semibold text-ice-700">
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
          className="modern-card group p-7"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white transition group-hover:scale-105">
            <MessageCircle className="h-5 w-5" />
          </span>
          <p className="mt-5 font-display text-2xl font-semibold text-navy-950">
            WhatsApp
          </p>
          <p className="mt-2 text-lg font-semibold text-[#128C7E]">
            Instant enquiry
          </p>
          <p className="mt-2 text-sm text-navy-500">
            Send product interest, location, and capacity requirement.
          </p>
          <span className="btn-whatsapp mt-5">Message now</span>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="modern-card group p-7"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-navy-950 transition group-hover:scale-105">
            <Mail className="h-5 w-5" />
          </span>
          <p className="mt-5 font-display text-2xl font-semibold text-navy-950">
            Email
          </p>
          <p className="mt-2 break-all text-sm font-semibold text-navy-700">
            {siteConfig.email}
          </p>
          <p className="mt-2 text-sm text-navy-500">
            Prefer a written quotation? Drop us a mail.
          </p>
        </a>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="modern-card p-7">
          <div className="flex items-start gap-3">
            <UserRound className="mt-1 h-5 w-5 text-ice-600" />
            <div>
              <p className="font-display text-xl font-semibold text-navy-950">
                {siteConfig.contactPerson}
              </p>
              <p className="text-sm text-navy-600">{siteConfig.contactRole}</p>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3 border-t border-frost-200 pt-6">
            <MapPin className="mt-1 h-5 w-5 text-ice-600" />
            <div>
              <p className="text-sm font-medium text-navy-500">Location</p>
              <p className="mt-1 text-navy-800">{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-7 text-white md:p-8">
          <p className="text-sm font-medium text-ice-300">Business details</p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            {siteConfig.legalName}
          </h2>
          <ul className="mt-5 space-y-2 text-sm text-navy-200">
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
