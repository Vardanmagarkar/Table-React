import React from "react";
import { useTable } from "react-table";
// useTable is a external React Hook which returns instance object which contains everything you'll need to build a table and interact with its state.
import "./table.css";

function Table() {
  // It's important that we use React.useMemo here to ensure that our data isn't recreated on every render.
  const data = React.useMemo(
    () => [
      {
        id: "1",
        Country: "China",
        TotalEmission: "11680 Mt",
        PerCapita: "7.38 t",
        Population: "1414094351",
      },
      {
        id: "2",
        Country: "US",
        TotalEmission: "4535 Mt",
        PerCapita: "15.52 t",
        Population: "323015995",
      },
      {
        id: "3",
        Country: "India",
        TotalEmission: "2411 Mt",
        PerCapita: "1.91 t",
        Population: "1324517249",
      },
      {
        id: "4",
        Country: "Russia",
        TotalEmission: "1674 Mt",
        PerCapita: "11.44 t",
        Population: "145275383",
      },
      {
        id: "5",
        Country: "Japan",
        TotalEmission: "1061 Mt",
        PerCapita: "9.70 t",
        Population: "127763265",
      },
    ],
    []
  );

  const columns = React.useMemo(
    // let's create a set of column definitions to pass into the useTable hook.
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Country",
        accessor: "Country",
      },
      {
        Header: "Total Carbon Emission",
        accessor: "TotalEmission",
      },
      {
        Header: "Per Capita Emission ",
        accessor: "PerCapita",
      },
      {
        Header: "Population",
        accessor: "Population",
      },
    ],
    []
  );

  //   Now that we have some data and columns defined, we can pass those into the useTable hook to create a table instance.
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="table-color">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
