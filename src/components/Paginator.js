import { useState, memo } from "react";

const Paginator = ({
  count = 1,
  pageSize = 1,
  currentPage,
  fetchData,
  setPage,
  ...props
}) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const pages = Array.from(
    { length: Math.ceil(count / pageSize) },
    (_, index) => index + 1
  );

  const handleClick = (e, page) => {
    e.preventDefault();
    setPage(page);
    fetchData(page);
  };

  const handlePrevNext = (e, qty) => {
    e.preventDefault();
    setStart(start + qty);
    setEnd(end + qty);

    if (qty > 0) {
      setPage(end + 1);
      fetchData(end + 1);
    } else {
      setPage(start);
      fetchData(start);
    }
  };

  return (
    <nav aria-label="..." {...props}>
      <ul className="pagination" style={{ float: "right" }}>
        <li className={`page-item ${start < 5 && "disabled"}`}>
          <a
            className="page-link"
            href="#"
            onClick={(e) => handlePrevNext(e, -5)}
          >
            Previous
          </a>
        </li>
        {pages.slice(start, end).map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage && "active"}`}
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

        <li className={`page-item ${end > pages.length - 1 && "disabled"}`}>
          <a
            className="page-link"
            href="#"
            onClick={(e) => handlePrevNext(e, 5)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Paginator);
