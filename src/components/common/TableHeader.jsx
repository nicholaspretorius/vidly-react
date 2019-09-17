import React, { Component } from "react";

class TableHeader extends Component {
  sort = column => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                className={column.sortable ? "clickable" : ""}
                onClick={() => this.sort(column.column)}
                scope="col"
                key={column.label}
              >
                {column.label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
