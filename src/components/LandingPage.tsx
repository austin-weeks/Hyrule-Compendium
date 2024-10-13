import Header from "./Header";
import AboutDrawer from "./AboutDrawer";

const LandingPage = () => {

  return (
    <div className="p-2 flex flex-col flex-grow justify-between gap-2">
      <div className="mx-auto">
        <picture>
          <img src="/koroks.png" alt="" className="max-w-[100vw] object-cover w-[500px] mx-auto" />
        </picture>
        <p className="text-2xl text-zinc-500 pt-6 max-w-[600px] text-center mx-auto">
          The Hyrule Compendium is an encyclopedia of all of the 385 creatures, monsters, materials, equipment, and treasure in <em>The Legend of Zelda: Breath of the Wild.</em>
        </p>
      </div>
      <AboutDrawer />
    </div>
  )
}

export default LandingPage;