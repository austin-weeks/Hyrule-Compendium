import { createContext, useEffect, useState } from 'react'
import fetchData, { Entries } from './api/fetch';
import Entry from './api/entry-type';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import { LoadingSpinner } from './components/ui/spinner';
import CategoryPage from './pages/CategoryPage';
import ItemPage from './pages/ItemPage';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import { ThemeToggle } from './components/ui/theme-toggle';

//Compendium category names || HOME -> app homepage || search -> search page
export type category = 'creatures' | 'monsters' | 'materials' | 'equipment' | 'treasure' | 'search' | 'HOME';

type AppData = {
  category: category
  changeCategory: (category: category) => void
  selectedEntry: Entry | null
  setSelectedEntry: (entryy: Entry | null) => void
  entries: Entries
  throwError: () => void
} | null;

export const DataContext = createContext<AppData>(null)

const App = () => {
  const [error, setError] = useState(false);
  const [category, _setCategory] = useState<category>('HOME');
  const [selectedEntry, _setSelectedEntry] = useState<Entry | null>(null);
  const [entries, setEntries] = useState<Entries>(null);

  const changeCategory = (category: category) => {
    _setSelectedEntry(null);
    _setCategory(category);
  }
  const setSelectedEntry = (entry: Entry | null) => {
    if (entry) _setCategory(entry.category)
    _setSelectedEntry(entry);
  }

  useEffect(() => {
    async function loadData() {
      try {
        setEntries(null);
        setEntries(await fetchData(category));
      } catch (e) {
        setError(true);
      }
    }
    loadData();
  }, [category]);

  let content;
  if (error) content = <ErrorMessage />
  else if (selectedEntry) content = <ItemPage />
  else if (category === 'HOME') content = <LandingPage />
  else if (category === 'search') content = <SearchPage />
  else if (!entries) content = (
    <div className='flex justify-center flex-grow'>
      <LoadingSpinner />
    </div>
  );
  else content = <CategoryPage />

  return (
    <DataContext.Provider
      value={{
        category,
        changeCategory,
        selectedEntry,
        setSelectedEntry,
        entries,
        throwError: () => setError(true)
      }}
    >
      <main
        className="size-full flex relative flex-col items-center
          bg-white dark:bg-black
          text-black dark:text-zinc-50
        "
      >
        <ThemeToggle />
        <Header />
        {content}
      </main>
    </DataContext.Provider>
  )
}

export default App;
