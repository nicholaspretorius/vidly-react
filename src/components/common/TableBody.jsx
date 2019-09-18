import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    if (column.column === "title")
      return <Link to={`/movies/${item._id}`}>{_.get(item, column.column)}</Link>;
    else return _.get(item, column.column);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => {
              return <td key={column.column}> {this.renderCell(item, column)}</td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
