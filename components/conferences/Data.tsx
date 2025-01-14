import React from "react"
import VideogameCard from "@/components/VideogameCard"
import { ConferenceListProps } from "@/lib/types"
import Link from "next/link"
import { Button } from "../ui/button"
import { MoveUp } from "lucide-react"
import { QueryPagination } from "@/components/blog/query-pagination"
import { useTranslation } from "react-i18next"

const ConferenceList: React.FC<ConferenceListProps> = ({
  data,
  year,
  searchTerm,
  totalPages,
  locale,
}) => {
  const { t } = useTranslation(locale)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-xl font-bold mb-8 mt-8">
          {year} {t("conferences:conferences")}
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {data
            .filter((game) =>
              game.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((game) => (
              <li key={game.id}>
                <VideogameCard locale={locale} game={game} />
              </li>
            ))}
        </ul>
        <div className="flex items-center justify-between">
          <Link href={`#start`}>
            <Button variant={"outline"}>
              <MoveUp className="mr-2 h-4 w-4" />
              {t("common:back")}
            </Button>
          </Link>
          {totalPages ? (
            <QueryPagination className="justify-end" totalPages={totalPages} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ConferenceList
