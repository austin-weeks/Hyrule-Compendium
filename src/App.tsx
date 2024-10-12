import { createContext, useEffect, useState } from 'react'
import fetchData, { category, Entries } from './api/fetch';
import LandingPage from './components/LandingPage';

type AppData = {
  category: category,
  setCategory: (category: category) => void,
  entries: Entries,
} | null;

const DataContext = createContext<AppData>(null)

const App = () => {
  const [category, setCategory] = useState<category>('HOME');
  const [entries, setEntries] = useState<Entries>(null);

  useEffect(() => {
    if (!category) return;
    async function loadData() {
      setEntries(await fetchData(category));
    }
    loadData();
  }, [category]);

  return (
    <DataContext.Provider value={{category, entries, setCategory}}>
      {category === 'HOME' && <LandingPage />}
    </DataContext.Provider>
  )
}

export default App;
