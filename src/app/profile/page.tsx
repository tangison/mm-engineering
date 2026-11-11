import type { Metadata } from "next";
import "../../styles/profile.css";
import { ProfileViewer } from "@/components/ProfileViewer";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Company Profile & OHS Policy Manual 2026 | M&M Engineering",
  description:
    "M&M Engineering & Consultancy CC 15-page Company Profile, 25-contract register, plant schedule, and OHS Policy Manual in interactive Web and PDF editions.",
  alternates: { canonical: `${SITE.url}/profile` },
  openGraph: {
    title: "Company Profile & OHS Policy Manual 2026 | M&M Engineering",
    description:
      "15-page Company Profile, 25 verified Namibian contracts (N$ 152.77M), equipment schedule, and OHS Policy Manual.",
    type: "website",
    url: `${SITE.url}/profile`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function ProfilePage() {
  return <ProfileViewer />;
}
