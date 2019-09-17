import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return <td key={column.column}>{column.content(item)}</td>;

    return <td key={column.column}>{_.get(item, column.column)}</td>;
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => {
              return this.renderCell(item, column);
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
