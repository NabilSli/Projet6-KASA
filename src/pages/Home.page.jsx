import React from "react";

import TitleCard from "../components/cards/TitleCard";
import Gallery from "../components/gallery";

export default function HomePage() {
  return (
    <section className="pageCards">
      <TitleCard />
      <Gallery />
    </section>
  );
}
