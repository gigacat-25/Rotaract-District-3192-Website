import ClubEventsClient from "./ClubEventsClient";

export const runtime = 'edge';

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  return <ClubEventsClient slug={params.slug} />;
}
