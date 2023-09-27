import React from "react";

export default function Card({ title, children }) {
  return (
    <div class="card">
      <div class="card-header">{title}</div>
      <div class="card-body" style={{ position: "relative" }}>
        {children}
      </div>
    </div>
  );
}
