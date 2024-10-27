import { useContext } from "react";
import { Button } from "./ui/button";
import { DataContext } from "@/App";
import { Apple, Axe, Icon, Search, Skull, Squirrel } from "lucide-react";
import { chest } from '@lucide/lab';

const Categories = () => {
  const context = useContext(DataContext);
  if (!context) return;
  const { changeCategory } = context;

  return (
    <div className="grid grid-cols-2 sm:flex flex-row flex-wrap gap-1.5 justify-center px-2">
      <Button variant="outline"
        isActive={context.category === 'search'}
        size="lg"
        className="text-base sm:text-xl gap-2"
        onClick={() => changeCategory('search')}
      >
        <Search />
        Search
      </Button>
      <Button variant="outline"
        isActive={context.category === 'creatures'}
        size="lg"
        className="text-base sm:text-xl gap-2"
        onClick={() => changeCategory('creatures')}
      >
        <Squirrel />
        Creatures
      </Button>
      <Button variant="outline"
        isActive={context.category === 'monsters'}
        size="lg"
        className="text-base sm:text-xl gap-2"
        onClick={() => changeCategory('monsters')}
      >
        <Skull />
        Monsters
      </Button>
      <Button variant="outline"
        isActive={context.category === 'materials'}
        size="lg"
        className="text-base sm:text-xl gap-2"
        onClick={() => changeCategory('materials')}
      >
        <Apple />
        Materials
      </Button>
      <Button variant="outline"
        isActive={context.category === 'equipment'}
        size="lg"
        className="text-base sm:text-xl gap-2"
        onClick={() => changeCategory('equipment')}
      >
        <Axe />
        Equipment
      </Button>
      <Button variant="outline"
        isActive={context.category === 'treasure'}
        size="lg"
        className="text-base sm:text-xl gap-2"
        onClick={() => changeCategory('treasure')}
      >
        <Icon iconNode={chest} />
        Treasure
      </Button>
    </div>
  )
}

export default Categories;