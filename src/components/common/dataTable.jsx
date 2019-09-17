import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
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
        <div className="table-responsive">
          <table className="table">
            <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
            <TableBody data={data} columns={this.columns} />
          </table>
        </div>
      </React.Fragment>
    );
  }

  onDelete(arg) {
    console.log("Delete", arg);
  }
}

export default DataTable;
