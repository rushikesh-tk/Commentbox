import React, { useEffect, useState } from "react";
import "./App.css";
import LightBox from "./components/lightbox/lightbox";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import Products from "./components/Products/Products";
import Pagination from "./components/Comment/Comment";
import CommentBox from "./components/CommentBox/CommentBox";
import useNode from "./components/CommentBox/useNodeHook";

// {
//   id: 123,
//   msg: "Hii",
//   items: [],
// }
const comments = {
  id: 1,
  items: [],
};

const App = () => {
  const [commentData, setCommentData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (id, comment) => {
    const finalTree = insertNode(commentData, id, comment);
    setCommentData(finalTree);
  };

  const handleEditNode = (id, comment) => {
    const finalTree = editNode(commentData, id, comment);
    setCommentData(finalTree);
  };

  const handleDeleteNode = (id) => {
    const finalTree = deleteNode(commentData, id);
    setCommentData(finalTree);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <button
            className="btn"
            style={{
              position: "fixed",
              top: 20,
              right: "5%",
            }}
          >
            Home
          </button>
        </Link>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/scroll" Component={InfiniteScroll} />
          <Route path="/lightbox" Component={LightBox} />
          <Route path="/products" Component={Products} />
          <Route path="comments" Component={Pagination} />
          <Route
            path="/section"
            element={
              <CommentBox
                comment={commentData}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
