import type { Metadata } from "next";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quicksys Solutions in Patna for air conditioning product enquiries, quotations, and project support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Contact
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950">
          Get in touch
        </h1>
        <p className="mt-3 text-slate-600">
          Share your requirement and our team will help with product options and
          pricing guidance.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <UserRound className="mt-1 h-5 w-5 text-brand-700" />
            <div>
              <p className="font-semibold text-brand-950">
                {siteConfig.contactPerson}
              </p>
              <p className="text-sm text-slate-600">{siteConfig.contactRole}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-brand-700" />
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="font-medium text-brand-800 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-brand-700" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-brand-800 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-brand-700" />
            <p className="text-slate-700">{siteConfig.address}</p>
          </div>
        </div>

        <div className="rounded-3xl bg-brand-900 p-6 text-white md:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Prefer WhatsApp?
          </h2>
          <p className="mt-3 text-brand-100">
            Send your product interest, location, and capacity requirement. We
            typically respond during business hours.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              "Hi Quicksys Solutions, I would like a product quotation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900"
          >
            Message on WhatsApp
          </a>
          <p className="mt-8 text-xs text-brand-300">
            Banker listed on public profile: {siteConfig.bank}
          </p>
        </div>
      </div>
    </div>
  );
}
