import React from "react";
import _ from "lodash";
const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //const test2 = [...Array(n).keys()];
  // [1... pagesCount].map()
  console.log(currentPage);
  return (
    <div>
      <nav>
        <ul className="pagination">
          <li key={"prev"} className="page-item">
            <a
              className="page-link"
              onClick={() => {
                if (currentPage === 1) {
                  onPageChange(currentPage);
                } else {
                  onPageChange(currentPage - 1);
                }
              }}
            >
              {"Previous"}
            </a>
          </li>
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
          <li key={"next"} className="page-item">
            <a
              className="page-link"
              onClick={() => {
                if (currentPage === pagesCount) {
                  onPageChange(currentPage);
                } else {
                  onPageChange(currentPage + 1);
                }
              }}
            >
              {" Next"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
