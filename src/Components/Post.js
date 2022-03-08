import React from "react";
import styled from "styled-components";

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  margin-bottom: 1.5rem;
`;

const PostAuthor = styled.h4`
  padding: 0.5rem;
`;

const PostImage = styled.img`
  height: 300px;
  width: 500px;
  object-fit: cover;
`;

const Post = ({ post }) => {
  return (
    <PostCard>
      <PostAuthor>{post.author}</PostAuthor>
      <PostImage src={post.download_url} alt={post.author}></PostImage>
    </PostCard>
  );
};

export default Post;
