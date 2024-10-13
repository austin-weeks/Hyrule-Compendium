import AboutDrawer from "@/components/AboutDrawer";

const LandingPage = () => (
  <div className="flex flex-col py-2 flex-grow justify-between gap-2 fade-in">
    <div className="mx-auto">
      <picture>
        <img src="/koroks.png" alt="" className="max-w-[100vw] object-cover px-2 w-[500px] mx-auto" />
      </picture>
      <p className="text-xl sm:text-2xl px-4 text-zinc-500 pt-6 max-w-[550px] text-center mx-auto">
        The Hyrule Compendium is an encyclopedia of all 385 creatures, monsters, materials, equipment, and treasure in <em>The Legend of Zelda: Breath of the Wild.</em>
      </p>
    </div>
    <AboutDrawer />
  </div>
);

export default LandingPage;