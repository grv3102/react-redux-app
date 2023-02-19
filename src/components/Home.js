import React from "react";
import { Link } from "react-router-dom";
import { useGetAllArticlesQuery } from "../features/APIslice";

function Home() {
  const { data, error, loading } = useGetAllArticlesQuery();
  return (
    <div>
      <h1>Home</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error...</h1>}
      {data && (
        <div>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <p>{item.author}</p>
                <Link to={`/${item.id}`}>
                  <button>Read ...{item.id}</button>
                </Link>
              </div>
            );
          })}
          <hr />
        </div>
      )}
    </div>
  );
}

export default Home;
