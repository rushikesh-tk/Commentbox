import React from "react";
import {
  AlbumList,
  PostList,
  TodoList,
} from "../ListComponents/ListComponents";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <TodoList listname="TODOS" />
      <AlbumList listname="ALBUMS" />
      <PostList listname="POSTS" />
    </div>
  );
};

export default Products;
