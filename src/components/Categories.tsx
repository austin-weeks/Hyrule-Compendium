import React, { useContext } from "react";
import { Button } from "./ui/button";
import { DataContext } from "@/App";
import { category } from "@/api/fetch";

const Categories = () => {
  const context = useContext(DataContext);
  if (!context) return;
  const {setCategory, setSelectedEntry } = context;

  const updateCategory = (category: category) => {
    setCategory(category);
    setSelectedEntry(null);
  }

  return (
    <div className="flex flex-row flex-wrap gap-1.5 justify-center">
      <Button variant="outline" size="lg" className="text-xl" onClick={() => updateCategory('creatures')}>
        Creatures
      </Button>
      <Button variant="outline" size="lg" className="text-xl" onClick={() => updateCategory('monsters')}>
        Monsters
      </Button>
      <Button variant="outline" size="lg" className="text-xl" onClick={() => updateCategory('materials')}>
        Materials
      </Button>
      <Button variant="outline" size="lg" className="text-xl" onClick={() => updateCategory('equipment')}>
        Equipment
      </Button>
      <Button variant="outline" size="lg" className="text-xl" onClick={() => updateCategory('treasure')}>
        Treasure
      </Button>
    </div>
  )
}

export default Categories;