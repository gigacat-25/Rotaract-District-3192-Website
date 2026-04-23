export const runtime = 'edge';

import ClubEventsClient from "./ClubEventsClient";

export default async function ClubEventsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ClubEventsClient slug={slug} />;
}
