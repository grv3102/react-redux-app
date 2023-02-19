import React from "react";
import "./App.css";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/:id" element={<SingleArticle />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
