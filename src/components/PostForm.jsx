import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulsePink = keyframes`
  0%, 95%, 100% {
    box-shadow: 0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF;
  }
  97.5% {
    box-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF;
  }
`;

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #00FFFF;
  border-radius: 5px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px #00FFFF;
  animation: ${pulsePink} 5s infinite; 
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: #00FF00;
  margin-bottom: 5px;
  font-size: 1.2em;
`;

const StyledInput = styled.input`
  background-color: #000000;
  border: 1px solid #00FFFF;
  color: #00FFFF;
  padding: 10px;
  margin-bottom: 15px;
  font-family: 'VT323', monospace;
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #FF00FF;
  }
`;

const StyledTextarea = styled(StyledInput).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #FF00FF;
  color: #000000;
  border: none;
  padding: 10px 20px;
  font-family: 'VT323', monospace;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00FFFF;
    box-shadow: 0 0 10px #00FFFF;
  }
`;

const PostForm = () => {
  console.log("PostForm component: Start of render");
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', { title, content });
    // Error handling for empty title or content
    if (!title.trim() || !content.trim()) {
      console.error('Error: Title and content are required.');
      return;
    }
    try {
      // Simulate post submission
      console.log('Simulating post submission...');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Post submission error:', error.message, error.stack);
    }
  };

  console.log("PostForm component: End of render");
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Title:</StyledLabel>
        <StyledInput
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <StyledLabel htmlFor="content">Content:</StyledLabel>
        <StyledTextarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <SubmitButton type="submit">Submit Post</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PostForm;