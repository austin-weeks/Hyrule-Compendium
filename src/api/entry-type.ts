type Entry = {
  // Base Data for all items
  name: string,
  id: number,
  category: string,
  description: string,
  descriptionShort: string,
  image: string,
  common_locations: string[] | null,

  // dlc: boolean

  // Monsters
  drops?: string[] | null,

  //Equipment
  properties?: { attack: number; defense: number; },

  //Creatures
  // edible?: boolean,

  //Materials & Creatures
  hearts_recovered?: number,
  cooking_effect?: string,
}
export default Entry;