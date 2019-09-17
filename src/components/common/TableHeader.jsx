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

  renderIcon = column => {
    const { sortColumn } = this.props;

    if (column.column !== sortColumn.column) return null;
    else if (sortColumn.order === "asc") return <i className="fa fa-sort-down"></i>;
    else return <i className="fa fa-sort-up"></i>;
  };

  setClassName = field => {
    if (field.column === "title") return "clickable column-primary";
    else if (field.sortable) return "clickable column-regular";
    else return "column-regular";
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                className={this.setClassName(column)}
                onClick={() => this.sort(column.column)}
                scope="col"
                key={column.label}
              >
                {column.label} {column.sortable ? this.renderIcon(column) : ""}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
