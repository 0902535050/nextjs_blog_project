import Hero from "../components/hero/hero";
import { Fragment } from "react";
import { getFeaturedPosts } from "@/lib/posts-util";
import FeaturedPosts from "@/components/featured/featured-posts";

interface Props {
  posts: any;
}

const Home: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    }
  };
}

export default Home;
