let comments = [];

export const addComment = (postId, content) => {
  const newComment = {
    id: comments.length + 1,
    postId,
    content,
    timestamp: new Date().toISOString()
  };
  comments.push(newComment);
  console.log('Comment added:', newComment);
  return newComment;
};

export const getCommentsByPostId = (postId) => {
  return comments.filter(comment => comment.postId === postId);
};