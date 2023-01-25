import AllPosts from "@/components/post";
import { getAllPosts } from "@/lib/posts-util";
import React from "react";

interface Props {
  posts: any;
}

const AllPostsPage: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
