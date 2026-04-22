import clubsData from "@/mock/clubs.json";
import dynamic from "next/dynamic";

const ClubEventsClient = dynamic(() => import("./ClubEventsClient"), { ssr: false });

export const runtime = 'edge';
export const dynamicParams = false;

export async function generateStaticParams() {
  return clubsData.map((club) => ({
    slug: club.slug,
  }));
}

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  return <ClubEventsClient slug={params.slug} />;
}
