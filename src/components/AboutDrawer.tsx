import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"

const AboutDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="bg-inherit hover:bg-zinc-100">About</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">
            The Hyrule Compendium
          </DrawerTitle>
          <DrawerDescription className="text-center">
            <div>
              Data from <a href="https://github.com/gadhagod/Hyrule-Compendium-API">
                Hyrule Compendium API
              </a>
            </div>
            <div>
              Made by <a href="https://austinweeks.dev">Austin Weeks</a>
            </div>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default AboutDrawer;