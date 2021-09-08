import React from "react";
import Todotask from "./Todotask";
export default function TodoList({ arr }) {
  return (
    <div>
      {arr.map((e) => (
        <div>
          <Todotask element={e} />
        </div>
      ))}
    </div>
  );
}
