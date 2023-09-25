import React from "react";

import { useParams } from "react-router-dom";

export default function HousingPage() {
  const par = useParams();
  console.log(par);
  return <div>Housing </div>;
}
