import { useContext } from "react";
import { Button } from "./ui/button";
import { DataContext } from "@/App";


const Categories = () => {
  const context = useContext(DataContext);
  if (!context) return;
  const { changeCategory, setSelectedEntry } = context;

  return (
    <div className="flex flex-row flex-wrap gap-1.5 justify-center">
      <Button variant="outline"
        isActive={context.category === 'creatures'}
        size="lg"
        className="text-xl"
        onClick={() => changeCategory('creatures')}
      >
        Creatures
      </Button>
      <Button variant="outline"
        isActive={context.category === 'monsters'}
        size="lg"
        className="text-xl"
        onClick={() => changeCategory('monsters')}
      >
        Monsters
      </Button>
      <Button variant="outline"
        isActive={context.category === 'materials'}
        size="lg"
        className="text-xl"
        onClick={() => changeCategory('materials')}
      >
        Materials
      </Button>
      <Button variant="outline"
        isActive={context.category === 'equipment'}
        size="lg"
        className="text-xl"
        onClick={() => changeCategory('equipment')}
      >
        Equipment
      </Button>
      <Button variant="outline"
        isActive={context.category === 'treasure'}
        size="lg"
        className="text-xl"
        onClick={() => changeCategory('treasure')}
      >
        Treasure
      </Button>
    </div>
  )
}

export default Categories;