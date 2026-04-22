import clubsData from "@/mock/clubs.json";
import ClubEventsWrapper from "./ClubEventsWrapper";

export const runtime = 'edge';

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  return <ClubEventsWrapper slug={params.slug} />;
}
