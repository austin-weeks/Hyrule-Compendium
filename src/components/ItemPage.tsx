import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useContext } from "react";
import { DataContext } from "@/App";

const ItemPage = () => {
  const entry = useContext(DataContext)?.selectedEntry;
  if (!entry) return;

  return (
    <div className="flex flex-col gap-2 px-4 max-w-[1200px] mx-auto">

      <hr />
      
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-col w-full">
          <h2 className="font-medium text-5xl flex flex-row items-center justify-between gap-2">
            {entry.name}
            <span className="text-zinc-500">#{entry.id}</span>
          </h2>
          <div className="text-justify text-lg max-w-[700px]">
            {entry.description}
          </div>
        </div>
        <img src={entry.image} alt={entry.name}
          className="aspect-square object-cover h-full max-h-80
            rounded-lg shadow-lg"
        />
      </div>


      <Card className="flex flex-row items-center px-3">
        <Avatar className="flex-shrink-0 size-16">
          <AvatarImage
            className="rounded-full aspect-square object-cover"
            src={entry.image}
          />
          <AvatarFallback
            className="rounded-full aspect-square bg-zinc-200 text-zinc-100
              flex justify-center items-center text-xl"
          >
            {entry.id}
          </AvatarFallback>
        </Avatar>
        <CardHeader className="py-4 px-4">
          <CardTitle className="flex flex-row items-center gap-1.5">
            {entry.name}
          </CardTitle>
          <CardDescription>
            {entry.descriptionShort}
          </CardDescription>
        </CardHeader>
      </Card>
      <hr />
    </div>
  );
}

export default ItemPage;