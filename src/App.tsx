import { createContext, useEffect, useState } from 'react'
import fetchData, { category, Entries } from './api/fetch';
import LandingPage from './components/LandingPage';
import ListPage from './components/ListPages';
import Entry from './api/entry-type';
import ItemPage from './components/ItemPage';
import Header from './components/Header';

type AppData = {
  category: category,
  changeCategory: (category: category) => void,
  selectedEntry: Entry | null,
  setSelectedEntry: (entryy: Entry | null) => void,
  entries: Entries,
} | null;

export const DataContext = createContext<AppData>(null)

const App = () => {
  const [category, setCategory] = useState<category>('HOME');
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [entries, setEntries] = useState<Entries>(null);

  const changeCategory = (category: category) => {
    setSelectedEntry(null);
    setCategory(category);
  }

  useEffect(() => {
    async function loadData() {
      setEntries('loading');
      setEntries(await fetchData(category));
    }
    loadData();
  }, [category]);

  let content;
  if (selectedEntry) content = <ItemPage />
  else if (category === 'HOME') content = <LandingPage />
  else content = <ListPage />

  return (
    <DataContext.Provider
      value={{
        category,
        changeCategory,
        selectedEntry,
        setSelectedEntry,
        entries
      }}
    >
      <main className='size-full flex flex-col'>
        <Header />
        {content}
      </main>
    </DataContext.Provider>
  )
}

export default App;
