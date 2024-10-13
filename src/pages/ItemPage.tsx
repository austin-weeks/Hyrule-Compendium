import { useContext } from "react";
import { DataContext } from "@/App";
import { capitalizeWords } from "@/utils";
import Entry from "@/api/entry-type";
import { Bone, CookingPot, Heart, Map, Shield, Sword } from "lucide-react";
import BulletSeparatedList from "@/components/BullutSeparatedList";
import NextEntry from "@/components/NextEntry";

const ItemPage = () => {
  const context = useContext(DataContext);
  if (!context?.selectedEntry) return;
  const { name, id, description, image } = context.selectedEntry;

  //@ts-ignore
  const prevEntry = context.entries.find(entry => entry.id === id - 1);
  //@ts-ignore
  const nextEntry = context.entries.find(entry => entry.id === id + 1);

  return (
    <div className="flex flex-col px-4 overflow-auto max-w-[925px] mx-auto fade-in">
      <hr />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center sm:items-start justify-between py-2 sm:py-4
        overflow-auto"
      >
        <div className="flex flex-col gap-2 w-full">
          <h2 className="font-medium text-4xl sm:text-5xl flex flex-row items-center justify-between gap-2">
            {name}
            <span className="text-zinc-500">#{id}</span>
          </h2>
          <hr />
          <div className="text-justify text-base sm:text-lg max-w-prose">
            {description}
          </div>

          <MiscInfo entry={context.selectedEntry} />

        </div>

        <img src={image} alt={name}
          className="aspect-square object-cover size-full max-h-60 max-w-60 md:max-h-80 md:max-w-80
            rounded-lg shadow-lg"
        />
      </div>
      <hr />

      <div className="flex flex-col-reverse gap-2 sm:flex-row justify-between pt-2 sm:pt-3.5 pb-2.5">
        {prevEntry ? <NextEntry entry={prevEntry} direction="previous" /> : <div />} 
        {nextEntry ? <NextEntry entry={nextEntry} direction="next" /> : <div />} 
      </div>
    </div>
  );
}

const MiscInfo = ({ entry }: {entry: Entry}) => {
  type RowProps = {
    heading: string,
    list: any[],
    icon: JSX.Element
  }
  const InfoRow = ({ heading, list, icon }: RowProps) => {
    return (
      <>
        <hr />
        <div className="flex flex-row justify-between items-center py-1">
          <div className="flex flex-row items-center gap-2">
            {icon}
            <h4 className="font-medium text-base sm:text-[1.05rem]">{heading}</h4>
          </div>
          <div className="flex flex-row flex-wrap text-sm sm:text-base pl-12 justify-end">
            <BulletSeparatedList list={list} />
          </div>
        </div>
      </>
    );
  }

  const {common_locations, drops, properties, cooking_effect, hearts_recovered } = entry;
  
  return (
    <div className="flex flex-col gap-1">
      {common_locations && 
        <InfoRow icon={<Map />} heading="Locations" list={common_locations} />}
      {(drops && drops.length > 0) && 
        <InfoRow icon={<Bone />} heading="Drops" list={drops.map(drop => capitalizeWords(drop))} />}
      {properties?.attack ?
        <InfoRow icon={<Sword />} heading="Weapon Strength" list={[properties.attack]} />: null}
      {properties?.defense ? 
        <InfoRow icon={<Shield />} heading="Equipment Defense" list={[properties.defense]} />: null}
      {cooking_effect && 
        <InfoRow icon={<CookingPot />} heading="Cooking Effect" list={[capitalizeWords(cooking_effect)]} />}
      {hearts_recovered && 
        <InfoRow icon={<Heart />} heading="Hearts Recoverd" list={[hearts_recovered]} />}
      <hr className="sm:hidden" />
    </div>
  );
}

export default ItemPage;