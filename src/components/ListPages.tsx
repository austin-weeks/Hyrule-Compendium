import { DataContext } from "@/App";
import React, { useContext} from "react";
import { LoadingSpinner } from "./ui/spinner";
import ErrorMessage from "./ErrorMessage";
import ListContent from "./ListContent";

const ListPage = () => {
  const context = useContext(DataContext);
  if (!context) return null;
  const { entries } = context;

  let content;
  if (entries === 'loading') content = <LoadingSpinner />;
  else if (entries === 'error') content = <ErrorMessage message="Something went wrong :(" />;
  else content = <ListContent />

  return (
      <div className="flex justify-center">
        {content}
      </div>
  );
}

export default ListPage;