import React from "react";
import { useParams } from "react-router-dom";

function IncidentDetails() {
  const { id } = useParams();
  return <div>Incident Details for ID: {id}</div>;
}

export default IncidentDetails;
