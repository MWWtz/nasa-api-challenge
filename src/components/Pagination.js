import React from "react";

const Pagination = ({ page, setPage, isPreviousData, photos }) => {
  return (
    <nav
      aria-label="..."
      className="d-flex align-items-center justify-content-around w-100"
    >
      <ul className="pagination">
        <li className={page === 1 ? "page-item disabled" : "page-item"}>
          <span
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            className="page-link"
            tabIndex={-1}
          >
            Previous
          </span>
        </li>
        <li className="page-item">
          <span className="page-link text-reset"> {page}</span>
        </li>
        <li className={isPreviousData ? "page-item disabled" : "page-item"}>
          <span
            className="page-link"
            onClick={() => {
              if (!isPreviousData) {
                setPage((old) => old + 1);
              }
            }}
            disabled={photos.length}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
