import Entry from "@/api/entry-type";
import { DataContext } from "@/App";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useContext } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NextEntryProps = {
  entry: Entry
  direction: 'previous' | 'next'
}
const NextEntry = ({ entry, direction }: NextEntryProps) => {
  const context = useContext(DataContext);
  if (!context) return;
  const { setSelectedEntry } = context;

  return (
    <Card
      className="flex flex-row gap-3 items-center p-1 sm:p-2
        cursor-pointer
        hover:bg-zinc-100
        active:shadow-inner
        transition-colors
      "
      onClick={() => setSelectedEntry(entry)}
    >
      {direction === 'previous' &&
        <div className="flex flex-row gap-0.5 font-medium text-lg items-center">
          <ChevronLeft />
          Previous
        </div>
      }
      <Avatar className="flex-shrink-0 size-10">
        <AvatarImage
          className="rounded-sm aspect-square object-cover shadow-md"
          src={entry.image}
        />
        <AvatarFallback
          className="rounded-sm aspect-square bg-zinc-200 text-zinc-100
            flex justify-center items-center text-xl"
        >
          {entry.id}
        </AvatarFallback>
      </Avatar>
      <CardHeader className="p-0">
        <CardTitle className="flex flex-row items-center gap-1.5">
          {entry.name}
          <span className="text-zinc-500 text-base">#{entry.id}</span>
        </CardTitle>
      </CardHeader>
      {direction === 'next' &&
        <div className="flex flex-row gap-0.5 font-medium text-lg items-center">
          Next
          <ChevronRight />
        </div>
      }
    </Card>
  );
}

export default NextEntry;