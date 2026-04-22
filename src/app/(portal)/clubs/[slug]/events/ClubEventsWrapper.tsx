"use client";

import dynamic from "next/dynamic";

const ClubEventsClient = dynamic(() => import("./ClubEventsClient"), { ssr: false });

export default function ClubEventsWrapper({ slug }: { slug: string }) {
  return <ClubEventsClient slug={slug} />;
}
