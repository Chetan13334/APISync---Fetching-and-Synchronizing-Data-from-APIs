import React, { useEffect, useState } from "react";
import "./details.css";

const CommentsPopup = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setLoading(false);
      });
  }, [postId]);

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h3 className="popup-title">Comments for Post {postId}</h3>
        {loading ? (
          <p className="popup-loading">Loading comments...</p>
        ) : comments.length > 0 ? (
          <div className="popup-comments">
            {comments.map((comment) => (
              <div key={comment.id} className="popup-comment">
                <p className="popup-comment-name"><b>{comment.name}</b> ({comment.email})</p>
                <p className="popup-comment-body">{comment.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="popup-no-comments">No comments available.</p>
        )}
        <button className="popup-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CommentsPopup;
