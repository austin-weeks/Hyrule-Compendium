import React from "react";
import Categories from "./Categories";

const Header = (props: React.PropsWithChildren) => {
  return (
    <div className="flex sticky top-0 flex-col gap-4 py-4 mx-auto w-full bg-inherit text-center">
      <h1 className="text-5xl font-hylian lg:text-5xl">
        The Hyrule Compendium
      </h1>
      {props.children}
      <Categories />
    </div>
  )
}

export default Header;