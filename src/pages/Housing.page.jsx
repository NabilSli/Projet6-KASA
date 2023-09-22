import React from "react";

import useHousings from "../components/useHousings";
import { useParams } from "react-router-dom";

export default function HousingPage() {
  const { id } = useParams();
  return <div>Housing {id}</div>;
}
