import React from "react";
import WithFetchAPI from "../withFetchAPI/WithFetchAPI";
import ProductListElement from "../Products/ProductListElement";
import withStyles from "../withFetchAPI/withStyles";

const PostList = WithFetchAPI(
  withStyles(ProductListElement),
  "https://jsonplaceholder.typicode.com/posts"
);

const TodoList = WithFetchAPI(
  withStyles(ProductListElement),
  "https://jsonplaceholder.typicode.com/todos"
);

const AlbumList = WithFetchAPI(
  ProductListElement,
  "https://jsonplaceholder.typicode.com/albums"
);

export { PostList, TodoList, AlbumList };
