import React from "react";

import { useParams } from "react-router-dom";

export default function HousingPage() {
  const { id } = useParams();
  return <div>Housing {id}</div>;
}
