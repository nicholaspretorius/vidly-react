import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <div className="table-responsive">
      <table className="table">
        <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
