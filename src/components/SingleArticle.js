import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../features/APIslice";

function SingleArticle() {
  const { id } = useParams();
  const { data, error, loading } = useGetArticleByIdQuery(id);
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Home</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error...</h1>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default SingleArticle;
