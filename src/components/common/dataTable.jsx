import React, { Component } from "react";
import Table from "./Table";
import LikeButton from "./like";

class DataTable extends Component {
  columns = [
    { column: "title", label: "Title", sortable: true },
    { column: "genre.name", label: "Genre", sortable: true },
    { column: "numberInStock", label: "Stock", sortable: true },
    { column: "dailyRentalRate", label: "Rate", sortable: true },
    {
      column: "like",
      label: "Like",
      sortable: false,
      content: item => <LikeButton liked={item.liked} onLike={() => this.props.onLike(item)} />
    },
    {
      column: "action",
      label: "Action",
      sortable: false,
      content: item => (
        <button className="btn btn-danger btn-sm" onClick={() => this.props.onClick(item)}>
          Delete
        </button>
      )
    }
  ];

  render() {
    const { sortColumn, onSort, data } = this.props;
    return (
      <React.Fragment>
        <Table columns={this.columns} sortColumn={sortColumn} onSort={onSort} data={data} />
      </React.Fragment>
    );
  }

  onDelete(arg) {
    console.log("Delete", arg);
  }
}

export default DataTable;
