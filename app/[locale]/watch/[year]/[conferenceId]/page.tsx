import Player from "@/components/watch/Player"
import Rewatch from "@/components/watch/Rewatch"
import { fetchWatch } from "@/lib/fetchs"
import React from "react"

export default async function Watch({
  params,
}: {
  params: { year: string; conferenceId: string; locale: string }
}) {
  const {
    conferences,
    upcomingConference,
    pastConferences,
    selectedConference,
  } = await fetchWatch({
    year: params.year,
    conferenceId: params.conferenceId,
  })

  return (
    <div className="min-h-screen flex flex-col items-start justify-center p-6 lg:flex-row lg:gap-4">
      <Player
        locale={params.locale}
        lastConference={selectedConference}
        conferences={conferences}
      />
      <Rewatch
        locale={params.locale}
        upcomingConference={upcomingConference}
        pastConferences={pastConferences}
        year={params.year}
      />
    </div>
  )
}
