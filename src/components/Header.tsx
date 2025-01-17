import { useContext } from "react";
import Categories from "./Categories";
import { DataContext } from "@/App";

const Header = () => {
  const setCategory = useContext(DataContext)?.changeCategory;

  return (
    <div className="flex sticky z-10 top-0 flex-col gap-2 sm:gap-4 pt-5 pb-3 mx-auto w-full bg-white dark:bg-black text-center">
      <h1
        className="text-3xl sm:text-5xl font-hylian lg:text-5xl hover:cursor-pointer mx-auto w-auto"
        onClick={() => {if (setCategory) setCategory('HOME')}}
      >
        The Hyrule Compendium
      </h1>
      <Categories />
    </div>
  )
}

export default Header;