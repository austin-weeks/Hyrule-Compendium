import React, { useContext } from "react";
import Categories from "./Categories";
import { DataContext } from "@/App";

const Header = (props: React.PropsWithChildren) => {
  const setCategory = useContext(DataContext)?.changeCategory;

  return (
    <div className="flex sticky top-0 flex-col gap-4 pt-5 pb-3 mx-auto w-full bg-white text-center">
      <h1
        className="text-5xl font-hylian lg:text-5xl hover:cursor-pointer mx-auto w-auto"
        onClick={() => {if (setCategory) setCategory('HOME')}}
      >
        The Hyrule Compendium
      </h1>
      {props.children}
      <Categories />
    </div>
  )
}

export default Header;