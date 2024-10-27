import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"

const AboutDrawer = () => (
  <Drawer>
    <DrawerTrigger className="bg-inherit transition-colors hover:bg-zinc-100 active:bg-zinc-200 py-2 px-4 rounded-sm mx-auto text-[0.9rem] text-zinc-500">
      About
    </DrawerTrigger>
    <DrawerContent className="w-96 max-w-full mx-auto">
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

export default AboutDrawer;