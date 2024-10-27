import Entry from "@/api/entry-type";
import fetchData from "@/api/fetch";
import { DataContext } from "@/App";
import EntryPreview from "@/components/EntryPreview";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/spinner";
import { triggerFade } from "@/utils";
import { Search } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";

const SearchPage = () => {
  const context = useContext(DataContext);
  const [allEntries, _setAllEntries] = useState<Entry[] | null>(null);
  const [search, _setSearch] = useState<string>('');

  function updateSearch(e: { target: { value: string; }; }) {
    _setSearch(e.target.value.toLowerCase().trim());
  }

  useEffect(() => {
    async function loadEntries() {
      try {
        const all: Entry[] = [];
        const fetches = [];
        fetches.push(fetchData('creatures').then(entries => entries !== null && all.push(...entries)));
        fetches.push(fetchData('monsters').then(entries => entries !== null && all.push(...entries)));
        fetches.push(fetchData('materials').then(entries => entries !== null && all.push(...entries)));
        fetches.push(fetchData('equipment').then(entries => entries !== null && all.push(...entries)));
        fetches.push(fetchData('treasure').then(entries => entries !== null && all.push(...entries)));
        await Promise.all(fetches);
        all.sort((a, b) => a.id - b.id);
        console.assert(all.length > 300);
        _setAllEntries(all);
      } catch (e) {
        if (context && context?.throwError) context.throwError();
      }
    }
    loadEntries();
  }, []);

  const resultsRef = useRef<HTMLDivElement>(null);
  useEffect(() => triggerFade(resultsRef, 'light'), [search]);

  if (allEntries === null) return (
    <div className='flex justify-center flex-grow'>
      <LoadingSpinner />
    </div>
  )

  return (
    <div className="size-full overflow-auto px-2 sm:px-4 flex flex-col">
      <hr />
      <div className="flex flex-col gap-1 py-3 w-full self-center items-center max-w-[300px]">
        <div className="flex flex-row items-center justify-between w-full">
          <Search /> 
          <h2 className="font-medium text-2xl">Search the Compendium</h2>
        </div>
        <Input
          className="w-full shadow-sm focus:shadow-inner text-center"
          type="text"
          placeholder="Enter a name or entry ID"
          onChange={updateSearch}
        >
        </Input>
      </div>
      <hr />

      <div className="flex flex-row flex-wrap justify-center gap-2
          max-w-[1300px] mx-auto
          overflow-auto py-3"
        ref={resultsRef}
      >
        {allEntries.map(entry => <EntryPreview searchString={search} entry={entry} key={entry.id} />)}
      </div>
    </div>
  );
}

export default SearchPage;