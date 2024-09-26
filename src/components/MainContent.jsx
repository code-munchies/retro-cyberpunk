import React from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { Route, Routes } from 'react-router-dom';
import { dummyPosts } from '../data/dummyPosts';
import GlitchEffect from './GlitchEffect';
import BackgroundGrid3D from './BackgroundGrid3D';

const MainContentContainer = styled.main`
  grid-area: main;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const MainContent = ({ title }) => {
  return (
    <MainContentContainer>
      <BackgroundGrid3D />
      <ContentWrapper>
        <GlitchEffect>
          <h2>{title}</h2>
        </GlitchEffect>
        <Routes>
          <Route path="/" element={
            <>
              <PostForm />
              <PostList posts={dummyPosts} />
            </>
          } />
          <Route path=":id" element={
            <>
              <PostDetail posts={dummyPosts} />
            </>
          } />
        </Routes>
      </ContentWrapper>
    </MainContentContainer>
  );
};

export default MainContent;