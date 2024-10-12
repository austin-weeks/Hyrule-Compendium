import Entry from "./entry-type";

const compendiumBaseUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';

//Compendium category names || HOME -> app homepage
export type category = 'creatures' | 'equipment' | 'materials' | 'monsters' | 'treasure' | 'HOME';

export type Entries = Entry[] | 'error' | null;

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
  try {
    const resp = await fetch(compendiumBaseUrl + category);
    const json = await resp.json();
    const data = json.data;
    compendiumData[category] = data;
    return data;
  } catch (e) {
    return 'error';
  }
}
export default fetchData;