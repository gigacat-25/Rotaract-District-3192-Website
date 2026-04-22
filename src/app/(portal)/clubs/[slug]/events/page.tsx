import clubsData from "@/mock/clubs.json";
import ClubEventsWrapper from "./ClubEventsWrapper";

export const dynamicParams = false;

export async function generateStaticParams() {
  return clubsData.map((club) => ({
    slug: club.slug,
  }));
}

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  return <ClubEventsWrapper slug={params.slug} />;
}
