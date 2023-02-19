import React from "react";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const { id } = useParams();
  return <div>SingleArticle = {id}</div>;
}

export default SingleArticle;
