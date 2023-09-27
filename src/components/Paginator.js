import React from "react";

export default function Paginator({
  count = 1,
  pageSize = 1,
  currentPage,
  fetchData,
  setPage,
}) {
  const pages = Array.from(
    { length: Math.ceil(count / pageSize) },
    (_, index) => index + 1
  );

  const handleClick = (e, page) => {
    e.preventDefault();
    setPage(page);
    fetchData(page);
  };
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(e) => handleClick(e, page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
