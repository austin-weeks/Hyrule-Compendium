import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"

const AboutDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger
        className="bg-inherit hover:bg-zinc-100 w-20 mx-auto
          text-[0.9rem] text-zinc-500"
      >
        About
      </DrawerTrigger>
      <DrawerContent className="w-96 mx-auto">
        <DrawerHeader>
          <DrawerTitle className="text-center">
            The Hyrule Compendium
          </DrawerTitle>
          <DrawerDescription className="text-center">
            <div>
              Data from <a href="https://github.com/gadhagod/Hyrule-Compendium-API" target="_blank">
                Hyrule Compendium API
              </a>
            </div>
            <div>
              Made by <a href="https://austinweeks.dev" target="_blank">Austin Weeks</a>
            </div>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default AboutDrawer;