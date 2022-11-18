import { useEffect, useState } from "react";

type Props = {
  values?: any[];
  columns?: string[];
};

const GenericTable = ({ values, columns }: Props) => {
  return (
    <div className="max-h-full overflow-y-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {columns?.map((columnName, i) => (
              <th key={i}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values?.map((rowValues, i) => (
            <tr key={i}>
              {columns?.map((columnName, j) => (
                <td key={j}>{rowValues[columnName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
