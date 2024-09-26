import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { dummyPosts } from '../data/dummyPosts';
import CommentForm from './CommentForm';
import { getCommentsByPostId } from '../data/comments';
import { glowAnimation } from '../styles/animations';

const PostDetailContainer = styled.div`
  background: rgba(0, 0, 0, 0.8); // Changed from rgba(0, 255, 255, 0.1) to a darker background
  border: 1px solid #00FFFF;
  border-radius: 5px;
  padding: 2rem;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
`;

const PostTitle = styled.h2`
  color: #FF00FF;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #FF00FF;
`;

const PostContent = styled.p`
  color: #00FFFF; // Changed from #00FF00 to a brighter cyan color
  margin-bottom: 2rem;
`;

const InteractiveButton = styled.button`
  background: transparent;
  border: 2px solid #00FFFF;
  color: #00FFFF;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 10px #00FFFF;
    animation: ${glowAnimation} 1.5s infinite;
  }
`;

const GlitchEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 0, 255, 0.2);
  opacity: 0;
  pointer-events: none;
  animation: glitch 20s infinite;

  @keyframes glitch {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    20% {
      opacity: 0.8;
      transform: translateX(5px);
    }
    40% {
      opacity: 0;
      transform: translateX(-5px);
    }
    60% {
      opacity: 0.8;
      transform: translateX(5px);
    }
    80% {
      opacity: 0;
      transform: translateX(-5px);
    }
    100% {
      opacity: 0;
      transform: translateX(0);
    }
  }
`;

const CommentsSection = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #00FFFF;
  padding-top: 1rem;
`;

const CommentItem = styled.div`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00FFFF;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover, &:focus {
    box-shadow: 0 0 15px #00FFFF, 0 0 30px #00FFFF;
    transform: translateY(-2px) scale(1.02);
    outline: none;
  }

  &:focus {
    border-color: #FF00FF;
  }
`;

const CommentContent = styled.p`
  color: #00FF00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.4;
`;

const CommentTimestamp = styled.span`
  color: #FF00FF;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const CommentHeader = styled.h3`
  color: #00FFFF;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #00FFFF;
`;

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const foundPost = dummyPosts.find((p, index) => index === parseInt(id));
    setPost(foundPost);
    if (foundPost) {
      setComments(getCommentsByPostId(id));
    }
  }, [id]);

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
  };

  if (!post) {
    console.error("Post not found for ID:", id);
    return <div>Post not found</div>;
  }

  return (
    <PostDetailContainer>
      <GlitchEffect />
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
      <InteractiveButton onClick={() => console.log('Post liked:', post.title)}>Like</InteractiveButton>
      <InteractiveButton onClick={() => console.log('Post shared:', post.title)}>Share</InteractiveButton>
      <CommentForm postId={id} onCommentAdded={handleCommentAdded} />
      {comments.length > 0 && (
        <CommentsSection>
          <CommentHeader>Comments:</CommentHeader>
          {comments.map((comment, index) => (
            <CommentItem
              key={comment.id || index}
              tabIndex={0}
              onFocus={(e) => e.currentTarget.style.borderColor = '#FF00FF'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#00FFFF'}
            >
              <CommentContent>{comment.content}</CommentContent>
              <CommentTimestamp>{new Date(comment.timestamp).toLocaleString()}</CommentTimestamp>
            </CommentItem>
          ))}
        </CommentsSection>
      )}
    </PostDetailContainer>
  );
};

export default PostDetail;