import _ from "lodash";

function paginate(items, pageNumber, pageSize) {
  const index = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(index)
    .take(pageSize)
    .value();
}

export default paginate;
