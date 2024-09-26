import React, { useState } from 'react';
import styled from 'styled-components';
import { addComment } from '../data/comments';
import { glowPinkAnimation } from '../styles/animations';

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #00FFFF;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px #00FFFF;
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

const StyledTextarea = styled.textarea`
  background-color: #000000;
  border: 1px solid #00FFFF;
  color: #00FFFF;
  padding: 10px;
  margin-bottom: 15px;
  font-family: 'VT323', monospace;
  font-size: 1em;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #FF00FF;
  }
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
    animation: ${glowPinkAnimation} 1.5s infinite;
  }
`;

const ErrorMessage = styled.p`
  color: #FF0000;
  margin-bottom: 10px;
`;

const CommentForm = ({ postId, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      if (comment.trim() === '') throw new Error('Comment cannot be empty');
      const newComment = addComment(postId, comment.trim());
      console.log('Comment submitted:', newComment);
      setComment('');
      if (onCommentAdded) onCommentAdded(newComment);
    } catch (error) {
      console.error('Error submitting comment:', error.message, error.stack);
      setError(error.message);
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="comment">Add a comment:</StyledLabel>
        <StyledTextarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Submit Comment</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default CommentForm;