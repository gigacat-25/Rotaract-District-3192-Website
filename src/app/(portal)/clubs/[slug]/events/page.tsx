import ClubEventsClient from "./ClubEventsClient";

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  return <ClubEventsClient slug={params.slug} />;
}
