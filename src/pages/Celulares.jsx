import DisplayItems from "../components/DisplayItems";

import { Pagination } from "flowbite-react";
import { useState } from "react";
const pages = 5;

const Celulares = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <DisplayItems props={{ page: currentPage, pages: pages }}></DisplayItems>

      <div className="flex overflow-x-auto sm:justify-center mt-8 mb-10">
        <Pagination
          currentPage={currentPage}
          totalPages={pages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};
export default Celulares;
