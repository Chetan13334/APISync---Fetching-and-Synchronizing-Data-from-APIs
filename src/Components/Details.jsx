import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./details.css";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";

const UserDetails = () => {
 
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json()),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res) => res.json()),
    ])
      .then(([userData, postData]) => {
        setUser(userData);
        setPosts(postData);
      })
      .catch((err) => console.error("Error fetching data", err));
  }, [id]);

  const handleShowComments = (post) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setSelectedPost(post);
      });
  };

  const closeModal = () => {
    setSelectedPost(null);
    setComments([]);
  };

  const handlePageClick = (pageNum) => setCurrentPage(pageNum);

  if (!user)
    return (
      <div className="banter-loader">
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
      </div>
    );

  // Pagination
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);
   const { darkMode } = useContext(ThemeContext); // Fix: added useContext

  return (
    <>
      <Navbar />
      <div className={`user-details-container ${selectedPost ? "blurred" : ""} ${darkMode ? "dark-mode" : "light-mode"}`}>
        <button className={`back-btn ${darkMode ? "dark-btn" : ""}`} onClick={() => navigate(-1)}>
          ←Back
        </button>

        <h2 className="user-title">{user.name} – Profile & Posts</h2>

        {/* User Info */}
        <div className={`user-info-card ${darkMode ? "dark-card" : ""}`}>
          <h2>{user.name}</h2>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>City:</b> {user.address.city}</p>
          <p><b>Company:</b> {user.company.name}</p>
        </div>

        {/* Posts */}
        <div className="posts-section">
          <h3>User Posts</h3>
          <div className="posts-grid">
            {currentPosts.map((post) => (
              <div key={post.id} className={`post-card ${darkMode ? "dark-card" : ""}`}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <button className={`seecmt ${darkMode ? "dark-btn" : ""}`} onClick={() => handleShowComments(post)}>
                  See Comments
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-secondary"} ${darkMode ? "dark-btn" : ""}`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {selectedPost && (
        <div className={`popup-overlay ${darkMode ? "dark-popup" : ""}`}>
          <div className="popup-container">
            <h3 className="popup-title">Comments for: {selectedPost.title}</h3>
            <div className="popup-comments">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className={`popup-comment ${darkMode ? "dark-card" : ""}`}>
                    <p className="popup-comment-name">{comment.name}</p>
                    <p className="popup-comment-body">{comment.body}</p>
                  </div>
                ))
              ) : (
                <p className="popup-loading">Loading comments...</p>
              )}
            </div>
            <button className={`popup-close-btn ${darkMode ? "dark-btn" : ""}`} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
