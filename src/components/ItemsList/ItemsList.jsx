import React from "react";
import "./ItemsList.css";

import { cn } from "@bem-react/classname";

const b = cn("ItemsList");

export default function ItemsList({ addedItems }) {
  return <div className={b()}></div>;
}
