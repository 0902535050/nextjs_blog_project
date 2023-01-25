import PostDetail from "@/components/post/detail";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import Head from "next/head";
import React, { Fragment } from "react";

interface Props {
  post: any;
}

const PostDetailPage: React.FC<Props> = (props: Props) => {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post}/>
      </Head>
      <PostDetail post={post} />
    </Fragment>
  );
};

export function getStaticPaths() {

  const postsFileNames = getPostsFiles();

  const slugs = postsFileNames.map((fileName: any) => {
    return fileName.replace(/\.md$/,'');
  })

  return {
    paths: slugs.map((slug: any) => (
      { params: { slug: slug } }
    )),
    fallback: 'blocking',
  }

}

export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export default PostDetailPage;
