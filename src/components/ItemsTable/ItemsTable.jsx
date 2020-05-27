import React from "react";
import "./ItemsTable.css";

import { cn } from "@bem-react/classname";

const b = cn("ItemsTable");

export default function ItemsTable({ items, selectedRow }) {
  return (
    <div className={"ItemsTableWrapper"}>
      <table className={b()}>
        <colgroup>
          <col width="100" />
        </colgroup>
        <thead>
          <tr>
            <th className={b("Cell", { type: "header" })}>Артикул</th>
            <th className={b("Cell", { type: "header" })}>Наименование</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={b("Row", { selected: index === selectedRow })}
              {...(index === selectedRow ? { id: "selected" } : {})}
            >
              <td className={b("Cell")}>{item.artNo}</td>
              <td title={item.name} className={b("Cell")}>
                {item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
