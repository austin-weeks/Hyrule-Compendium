import { useContext, useEffect, useRef, useState } from "react";
import EntryPreview from "./EntryPreview";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { DataContext } from "@/App";

const entriesPerPage = 12;

const ListContent = () => {
  const context = useContext(DataContext);
  const entries = context?.entries;
  if (!entries || entries === 'error' || entries === 'loading') return;

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [visiblePageRange, setVisiblePageRange] = useState<[number, number]>([1, 1]);

  const startIndex = (pageNumber - 1) * entriesPerPage;
  const maxPages = Math.ceil(entries.length / entriesPerPage);
  const changePage = (newPage: number) => {
    if (newPage === pageNumber) return;
    if (newPage < 1) return;
    if (newPage > maxPages) return;
    setPageNumber(newPage);
  }

  useEffect(() => setPageNumber(1), [context.category]);

  const displayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //Calculate number of page buttons that can fit on screen
    const observer = new ResizeObserver(() => {
      if (!displayRef.current) return;
      const maxPossible = Math.floor((displayRef.current.clientWidth - 200) / 80);
      const floor = Math.max(Math.floor(pageNumber - maxPossible / 2), 2);
      const remainingRange = maxPossible - (pageNumber - floor);
      const ceil = Math.min(pageNumber + remainingRange, maxPages - 1);
      setVisiblePageRange([floor, ceil]);
      //15
      //range 5
      // cur 2
      
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [pageNumber])
  
  console.log(visiblePageRange[0], visiblePageRange[1])
  const paginations: number[] = [];
  for (let i = visiblePageRange[0]; i <= visiblePageRange[1]; i++) {
    paginations.push(i);
  }

  return (
    <div className="flex flex-col pb-4 gap-4">
      <div
        ref={displayRef}
        className="flex flex-row flex-wrap justify-center gap-2
          max-w-[1200px] px-2"
      >
        {entries?.slice(startIndex, startIndex + entriesPerPage)
          .map(entry => <EntryPreview entry={entry} key={entry.id} />)
        }
      </div>
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`${pageNumber === 1 && 'hover:cursor-default hover:bg-inherit text-zinc-500 hover:text-zinc-500'}`}
              onClick={() => changePage(pageNumber - 1)}
            />
          </PaginationItem>
          <PaginationLink
            isActive={pageNumber === 1}
            onClick={() => changePage(1)}
          >
            1
          </PaginationLink>
          {visiblePageRange[0] > 2 &&
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          }
          {paginations.map((pg) => {
            return (
              <PaginationLink
                key={pg}
                isActive={pageNumber === pg}
                onClick={() => changePage(pg)}
              >
                {pg}
              </PaginationLink>
            )
          })}
          {visiblePageRange[1] < maxPages - 1 &&
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          }
          {maxPages > 1 &&
            <PaginationLink
              isActive={pageNumber === maxPages}
              onClick={() => changePage(maxPages)}
            >
              {maxPages}
            </PaginationLink>
          }
          <PaginationItem>
            <PaginationNext
              className={`${pageNumber === maxPages && 'hover:cursor-default hover:bg-inherit text-zinc-500 hover:text-zinc-500'}`}
              onClick={() => changePage(pageNumber + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ListContent;