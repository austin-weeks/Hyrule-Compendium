import { capitalizeWords, truncateText } from "@/utils";
import Entry from "./entry-type";
import { category } from "@/App";

const BASE_URL = "https://api.hyrule-compendium.com/v3/compendium/category/";

export type Entries = Entry[] | null;

//Stores Entries for Available Compendium Categories
const compendiumData = {
  creatures: null,
  equipment: null,
  materials: null,
  monsters: null,
  treasure: null,
};

export default async function (category: category): Promise<Entries> {
  if (category === "HOME" || category === "search") return null;
  if (compendiumData[category]) return compendiumData[category];
  const resp = await fetch(BASE_URL + category);
  const json = await resp.json();
  const data: Entry[] = json.data;
  for (const entry of data) {
    entry.name = capitalizeWords(entry.name);
    entry.descriptionShort = truncateText(entry.description);
  }
  data.sort((a, b) => a.id - b.id);
  // @ts-expect-error - API response is untyped
  compendiumData[category] = data;
  return data;
}
