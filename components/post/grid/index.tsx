import React from "react";
import PostItem from "../item";
import { GridContainer } from "./index.style";

interface Props {
  posts: any;
}

const PostsGrid = (props: Props) => {
  const { posts } = props;
  return (
    <GridContainer>
      <ul>
        {posts.map((post: any, i: number) => (
          <li key={i}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </GridContainer>
  );
};

export default PostsGrid;
