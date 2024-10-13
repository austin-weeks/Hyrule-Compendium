import { capitalizeWords, truncateText } from "@/utils";
import Entry from "./entry-type";

const compendiumBaseUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';

//Compendium category names || HOME -> app homepage
export type category = 'creatures' | 'monsters' | 'materials' | 'equipment' | 'treasure' | 'HOME';

export type Entries = Entry[] | null;

//Stores Entries for Available Compendium Categories
const compendiumData = {
  creatures: null,
  equipment: null,
  materials: null,
  monsters: null,
  treasure: null
};

const fetchData = async (category: category): Promise<Entries> => {
  if (category === 'HOME') return null;
  if (compendiumData[category]) return compendiumData[category];
  const resp = await fetch(compendiumBaseUrl + category);
  const json = await resp.json();
  const data: Entry[] = json.data;
  for (const entry of data) {
    entry.name = capitalizeWords(entry.name);
    entry.descriptionShort = truncateText(entry.description);
  }
  data.sort((a, b) => a.id - b.id);
  //@ts-ignore
  compendiumData[category] = data;
  return data;
}
export default fetchData;