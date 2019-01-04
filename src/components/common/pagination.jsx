import React from "react";
import _ from "lodash";

const Pagination = props => {
  const pageCount = Math.ceil(props.count / props.pageSize);
  console.log(props.current);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={
              page === props.current ? "page-item active" : "page-item"
            }
          >
            <a className="page-link" onClick={() => props.onPaginate(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
