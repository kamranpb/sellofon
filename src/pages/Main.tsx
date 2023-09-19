import React from "react";

import { CardContainer } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { FilterContainer } from "../components/Filter";

export function Main() {
  return (
    <section className="flex justify-center items-center flex-col">
      <div
        className="mt-8 px-3"
        style={{
          width: 946,
          borderLeft: "1px solid rgba(137, 43, 226, 0.06)",
          borderRight: "1px solid rgba(137, 43, 226, 0.06)",
        }}
      >
        <div className="flex justify-start gap-10 flex-wrap flex-start borde">
          <FilterContainer />
          <CardContainer maxW={200} />
          <CardContainer maxW={200} />
          <CardContainer maxW={200} />
          <CardContainer maxW={200} />
          <CardContainer maxW={200} />
          <CardContainer maxW={200} />
        </div>
      </div>
    </section>
  );
}
