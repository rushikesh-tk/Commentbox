import React, { useState } from "react";
import "./Comment.css";
import Action from "./Action";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const CommentBox = (props) => {
  const { comment, handleInsertNode, handleEditNode, handleDeleteNode } = props;

  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);
  const [input, setInput] = useState("");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEditClick = () => {
    setEditMode(false);
  };

  const handleReplyClick = () => {
    setExpand((prev) => !prev);
    setShowInput(true);
  };

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const handleCancelReply = () => {
    setShowInput(false);
  };

  const handleAddComment = () => {
    setExpand(true);
    handleInsertNode(comment.id, input);
    setShowInput(false);
    setInput("");
  };

  return (
    <div className="comment-main">
      <div className="upper-main">
        {comment && comment?.id === 1 ? (
          <>
            <input
              value={input}
              className="input-box"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Comment"
            />

            <Action
              className="btn"
              type="Add Comment"
              handleClick={handleAddComment}
            />
          </>
        ) : (
          <div>
            <div className="comment-item">{comment?.msg}</div>

            <div style={{ display: "flex" }}>
              {editMode ? (
                <>
                  <Action
                    className="btn"
                    type="Save"
                    handleClick={handleAddComment}
                  />
                  <Action
                    className="btn"
                    type="Cancel"
                    handleClick={handleCancelEditClick}
                  />
                </>
              ) : (
                <>
                  <>
                    <Action
                      className="btn"
                      type={
                        <>
                          {!expand ? (
                            <FaChevronDown size={10} />
                          ) : (
                            <FaChevronUp size={10} />
                          )}
                          Reply
                        </>
                      }
                      handleClick={handleNewComment}
                    />
                  </>

                  <Action
                    className="btn"
                    type="Edit"
                    handleClick={handleEditClick}
                  />
                  <Action className="btn" type="Delete" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="list" style={{ display: expand ? "block" : "none" }}>
        {showInput && (
          <>
            <input
              value={input}
              className="input-box"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Comment"
            />
            <Action
              className="btn"
              type="Reply"
              handleClick={handleAddComment}
            />
            <Action
              className="btn"
              type="Cancel"
              handleClick={handleCancelReply}
            />
          </>
        )}
        {comment?.items.map((cmt, index) => {
          return (
            <CommentBox
              key={cmt.id}
              comment={cmt}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
