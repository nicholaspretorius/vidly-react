import React, { Component } from "react";
import DataRow from "./dataRow";
import TableHeader from "./common/TableHeader";

class DataTable extends Component {
  columns = [
    { column: "title", label: "Title", sortable: true },
    { column: "genre.name", label: "Genre", sortable: true },
    { column: "numberInStock", label: "Stock", sortable: true },
    { column: "dailyRentalRate", label: "Rate", sortable: true },
    { column: "like", label: "Like", sortable: false },
    { column: "action", label: "Action", sortable: false }
  ];

  render() {
    const { onClick, onLike, sortColumn, onSort } = this.props;
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table">
            <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
            <tbody>
              {this.props.movies.map((movie, index) => (
                <DataRow
                  index={index}
                  movie={movie}
                  key={movie._id}
                  onClick={() => onClick(movie)}
                  onLike={() => onLike(movie)}
                />
              ))}
            </tbody>
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
