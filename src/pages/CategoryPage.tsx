import { useContext, useEffect, useRef, useState } from "react";
import EntryPreview from "../components/EntryPreview";
import { DataContext } from "@/App";
import PageNumbers from "@/components/PageNumber";
import { triggerFade } from "@/utils";

const entriesPerPage = 12;

const CategoryPage = () => {
  const context = useContext(DataContext);
  const entries = context?.entries;
  if (!entries) return;

  const [pageNumber, setPageNumber] = useState<number>(1);

  const startIndex = (pageNumber - 1) * entriesPerPage;
  const maxPages = Math.ceil(entries.length / entriesPerPage);

  const changePage = (newPage: number) => {
    if (newPage === pageNumber) return;
    if (newPage < 1) return;
    if (newPage > maxPages) return;
    setPageNumber(newPage);
  }

  useEffect(() => setPageNumber(1), [context.category]);

  const entriesRef = useRef<HTMLDivElement>(null);
  useEffect(() => triggerFade(entriesRef), [context.category, pageNumber]);

  return (
    <div className="flex flex-col justify-between overflow-auto flex-grow pb-3 px-2 sm:px-4 w-full fade-in">
      <hr/>
      <div className="flex flex-row flex-wrap justify-center gap-2
          max-w-[1300px] mx-auto
          overflow-auto py-3"
        ref={entriesRef}
      >
        {entries?.slice(startIndex, startIndex + entriesPerPage)
          .map(entry => <EntryPreview entry={entry} key={entry.id} />)
        }
      </div>
      
      <div className="flex-grow" />
      <hr className="pb-2.5"/>

      <PageNumbers
        pageNumber={pageNumber}
        maxPages={maxPages}
        changePage={changePage}
      />
    </div>
  );
}

export default CategoryPage;