import React from "react";

export default function Card({ title, children }) {
  return (
    <div class="card">
      <div class="card-header">
        <h3>{title}</h3>
      </div>
      <div class="card-body">{children}</div>
    </div>
  );
}
