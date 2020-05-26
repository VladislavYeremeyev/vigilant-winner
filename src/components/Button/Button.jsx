import React from "react";
import "./Button.css";
import { cn } from "@bem-react/classname";

const b = cn("Button");

export default function Button({ disabled, onClick, icon, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={b(icon ? { icon } : {})}
    >
      {children}
    </button>
  );
}
