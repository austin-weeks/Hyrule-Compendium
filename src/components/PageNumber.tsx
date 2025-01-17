import { useState, useEffect, useContext, useReducer } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "./ui/pagination";
import { DataContext } from "@/App";

type PageNumbersProps = {
  pageNumber: number
  maxPages: number
  changePage: (newPage: number) => void
}

const PageNumbers = ({ pageNumber, maxPages, changePage}: PageNumbersProps) => {
  const category = useContext(DataContext)?.category;
  if (!category) return;
  const [_onRender, reRender] = useReducer(x => x + 1, 0);
  const [paginations, _setPaginations] = useState<number[]>([1]);

  useEffect(() => {
    window.addEventListener('resize', reRender);
    return () => window.removeEventListener('resize', reRender);
  }, [])

  const updatePaginations = (startPage: number, endPage: number) => {
    const pageRangeArr = [];
    for (let i = startPage; i <= endPage; i++) pageRangeArr.push(i);
    _setPaginations(Array.from(new Set([1, ...pageRangeArr, maxPages])));
  }

  useEffect(() => {
    //Room for paginations minus whitespace and next/prev buttons
    const paginationsThatCanFit = Math.floor((document.body.clientWidth - 300) / 45);
    //No need to truncate
    if (maxPages <= paginationsThatCanFit) {
      updatePaginations(1, maxPages);
      return;
    }

    const distToBottom = pageNumber - 1;
    const distToTop = maxPages - pageNumber;
    if (distToBottom < distToTop) {
      const lowerRange = Math.floor(paginationsThatCanFit / 2);
      const floor = Math.max(pageNumber - lowerRange, 1);
      const lowerRangeUsed = pageNumber - floor;
      const upperRange = paginationsThatCanFit - lowerRangeUsed - 1;
      const ceil = Math.min(pageNumber + upperRange, maxPages);
      updatePaginations(floor, ceil);
    } else {
      const upperRange = Math.ceil(paginationsThatCanFit / 2);
      const ceil = Math.min(pageNumber + upperRange, maxPages);
      const upperRangeUsed = ceil - pageNumber;
      const lowerRange = paginationsThatCanFit - upperRangeUsed - 1;
      const floor = Math.max(pageNumber - lowerRange, 1);
      updatePaginations(floor, ceil);
    }
  }, [_onRender, pageNumber, maxPages])

  const disabledNextPrevClasses = 'hover:cursor-default hover:bg-inherit dark:hover:bg-inherit text-zinc-500 hover:text-zinc-500 dark:hover:text-zinc-500';

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${pageNumber === 1 && disabledNextPrevClasses}`}
            onClick={() => changePage(pageNumber - 1)}
          />
        </PaginationItem>
        <span className="hidden sm:flex flex-row items-center">
          <PageButtons
            paginations={paginations}
            pageNumber={pageNumber}
            maxPages={maxPages}
            changePage={changePage}
          />
        </span>
        <PaginationItem>
          <PaginationNext
            className={`${pageNumber === maxPages && disabledNextPrevClasses}`}
            onClick={() => changePage(pageNumber + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

type PageButtonsProps = {
  paginations: number[]
  pageNumber: number
  maxPages: number
  changePage: (newPage: number) => void
}
const PageButtons = ({ paginations, pageNumber, maxPages, changePage }: PageButtonsProps) => (
  paginations.map((pg, ind) => {
    // if second element and not page 2
    // or if second to last element and not second to last page
    if ((ind === 1 && pg !== 2) ||
      (ind === paginations.length - 2 && pg !== maxPages - 1)
    ) return (
      <PaginationItem key={ind}>
        <PaginationEllipsis />
      </PaginationItem>
    );
    else return (
      <PaginationLink
        key={ind}
        isActive={pageNumber === pg}
        onClick={() => changePage(pg)}
      >
        {pg}
      </PaginationLink>
    );
  })
);

export default PageNumbers;