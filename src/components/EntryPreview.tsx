import Entry from "@/api/entry-type";
import { useContext } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DataContext } from "@/App";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type EntryPreviewProps = {
  entry: Entry
  searchString?: string
}
const EntryPreview = ({ entry, searchString }: EntryPreviewProps) => {
  const setSelectedEntry = useContext(DataContext)?.setSelectedEntry;
  if (!setSelectedEntry) return;

  const shouldShow =(): boolean => {
    if (!searchString) return true;
    if (entry.name.toLowerCase().includes(searchString)) return true;
    if (entry.id.toString().includes(searchString)) return true;
    if (entry.description.toLowerCase().includes(searchString)) return true;
    return false;
  }

  return (
    <Card
      className={`${shouldShow() ? 'flex' : 'hidden'}
        flex-row items-start p-2 sm:p-3
        cursor-pointer
        hover:bg-zinc-100
        dark:hover:bg-zinc-800
        active:shadow-inner
        transition-colors
        max-w-[26rem]
      `}
      onClick={() => setSelectedEntry(entry)}
    >
      <Avatar className="flex-shrink-0 size-[98px] rounded-sm shadow-md aspect-square object-cover">
        <AvatarImage src={entry.image} />
        <AvatarFallback className="rounded-md aspect-square bg-inherit" />
      </Avatar>
      <CardHeader className="py-0 px-4">
        <CardTitle className="flex flex-row items-center gap-1.5">
          {entry.name}
          <span className="text-zinc-500 text-base">#{entry.id}</span>
        </CardTitle>
        <CardDescription>
          {entry.descriptionShort}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default EntryPreview;
