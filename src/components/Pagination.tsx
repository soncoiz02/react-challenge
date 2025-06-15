import React from "react";
import "../styles/scss/_pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPages = () => {
    const pages = [];

    pages.push(1);

    const start = Math.max(currentPage - 1, 2);
    const end = Math.min(currentPage + 4, totalPages - 1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination">
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="ellipsis">
            ...
          </span>
        ) : (
          <button key={idx} className={`page ${page === currentPage ? "active" : ""}`} onClick={() => onPageChange(Number(page))}>
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
