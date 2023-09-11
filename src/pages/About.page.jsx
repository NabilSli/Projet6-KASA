import React, { useState } from "react";

import Collapse from "../components/collapse";

export default function AboutPage() {
  const [selectedCollapse, setSelectedCollapse] = useState(null);

  return (
    <div>
      <Collapse
        collapseTitle="Fiablitité"
        collapseTexte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
        isOpen={selectedCollapse === "reliability"}
        close={() => {
          setSelectedCollapse(null);
        }}
        open={() => {
          setSelectedCollapse("reliability");
        }}
      />
      <Collapse
        collapseTitle="Respect"
        collapseTexte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        isOpen={selectedCollapse === "respect"}
        close={() => {
          setSelectedCollapse(null);
        }}
        open={() => {
          setSelectedCollapse("respect");
        }}
      />
      <Collapse
        collapseTitle="Service"
        collapseTexte="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        isOpen={selectedCollapse === "service"}
        close={() => {
          selectedCollapse(null);
        }}
        open={() => {
          setSelectedCollapse("service");
        }}
      />
      <Collapse
        collapseTitle="Sécurité"
        collapseTexte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
        isOpen={selectedCollapse === "security"}
        close={() => {
          setSelectedCollapse(null);
        }}
        open={() => {
          setSelectedCollapse("security");
        }}
      />
    </div>
  );
}
