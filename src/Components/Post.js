import React from "react";
import styled from "styled-components";

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  margin-bottom: 5px;
`;

const PostImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
`;

const Post = ({ post }) => {
  return (
    <PostCard>
      <a href={post.download_url}>
        <PostImage src={post.download_url} alt={post.author}></PostImage>
      </a>
    </PostCard>
  );
};

export default Post;
