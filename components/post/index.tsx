import React from 'react'
import PostsGrid from './grid'
import { Container, Title } from './index.style';

interface Props {
    posts: any;
}

const AllPosts = (props: Props) => {
  const {posts} = props;
  return (
    <Container>
        <Title>All Posts</Title>
        <PostsGrid posts={posts}/>
    </Container>
  )
}

export default AllPosts