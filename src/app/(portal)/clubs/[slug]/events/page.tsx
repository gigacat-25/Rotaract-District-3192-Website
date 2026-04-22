import clubsData from "@/mock/clubs.json";
import ClubEventsClient from "./ClubEventsClient";

export async function generateStaticParams() {
  return clubsData.map((club) => ({
    slug: club.slug,
  }));
}

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  return <ClubEventsClient slug={params.slug} />;
}
