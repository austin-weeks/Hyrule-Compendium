import Entry from "@/api/entry-type";
import { useContext } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DataContext } from "@/App";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const EntryPreview = ({entry}: {entry: Entry}) => {
  const setSelectedEntry = useContext(DataContext)?.setSelectedEntry;
  if (!setSelectedEntry) return;

  return (
    <Card
      className="flex flex-row items-start p-2 sm:p-3
        cursor-pointer
        hover:bg-zinc-100
        active:shadow-inner
        transition-colors
        max-w-[26rem]
      "
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
