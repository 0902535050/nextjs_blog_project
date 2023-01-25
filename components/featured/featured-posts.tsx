import React from 'react'
import PostsGrid from '../post/grid';
import { Container, Title } from './index.style';

interface Props {
  posts: any;
}

const FeaturedPosts: React.FC<Props> = (props: Props) => {
  const {posts} = props;
  return (
    <Container>
      <Title>FeaturedPosts</Title>
      <PostsGrid posts={posts}/>
    </Container>
  );
};

export default FeaturedPosts