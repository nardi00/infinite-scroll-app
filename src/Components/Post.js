import React from "react";
import styled from "styled-components";

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  margin-bottom: 1.5rem;
`;

const PostImage = styled.img`
  height: 300px;
  width: 500px;
  object-fit: cover;
`;

const PostAuthor = styled.p`
  font-family: "Poppins", serif;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 0.3rem;
`;

const Post = ({ post }) => {
  return (
    <PostCard>
      <a
        href={post.download_url}
        rel="noreferrer"
        target="_blank"
        alt={post.author}
      >
        <PostImage src={post.download_url} alt={post.author}></PostImage>
      </a>
      <PostAuthor>{post.author}</PostAuthor>
    </PostCard>
  );
};

export default Post;
