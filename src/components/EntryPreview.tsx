import Entry from "@/api/entry-type";
import React, { useContext } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DataContext } from "@/App";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const EntryPreview = ({entry}: {entry: Entry}) => {
  const context = useContext(DataContext);
  if (!context) return;
  const { setSelectedEntry } = context;

  return (
    <Card
      className="flex flex-row items-start p-3
        cursor-pointer
        hover:bg-zinc-100
        transition-colors
        max-w-[26rem]
      "
      onClick={() => setSelectedEntry(entry)}
    >
      <Avatar className="flex-shrink-0 size-24">
        <AvatarImage
          className="rounded-md aspect-square object-cover shadow-md"
          src={entry.image}
        />
        <AvatarFallback
          className="rounded-md aspect-square bg-zinc-200 text-zinc-100
            flex justify-center items-center text-xl"
        >
          {entry.id}
        </AvatarFallback>
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