import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { glowAnimation } from '../styles/animations';

const PostListContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const PostCard = styled(Link)`
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00FFFF;
  border-radius: 5px;
  padding: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 10px #00FFFF;
    transform: translateY(-2px);
    animation: ${glowAnimation} 1.5s infinite;
  }
`;

const PostTitle = styled.h3`
  color: #FF00FF;
  margin-bottom: 0.5rem;
`;

const PostContent = styled.p`
  color: #00FF00;
`;

const PostList = ({ posts }) => {
  console.log("PostList component: Start of render", { postsCount: posts.length });
  if (!posts || posts.length === 0) {
    console.log("No posts available to display.");
    return <PostListContainer>No posts available.</PostListContainer>;
  }

  return (
    <PostListContainer>
      {posts.map((post, index) => (
        <PostCard key={index} to={`/posts/${index}`}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content.substring(0, 100)}...</PostContent>
        </PostCard>
      ))}
    </PostListContainer>
  );
};

export default PostList;