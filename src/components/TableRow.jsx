import React from "react";

const TableRow = ({
  title,
  cost,
  startDate,
  endDate,
  destination,
  onUpdate,
  onDelete,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{cost}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{destination}</td>
      <td>
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
