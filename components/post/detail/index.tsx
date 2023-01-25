//@ts-nocheck
import Image from "next/image";
import React from "react";
import ReactMarkdown from 'react-markdown';
import { Container, ImageArea, ContentHeader, Title } from "./index.style";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
interface Props {
  post?: any;
}

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostDetail = (props: Props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <ImageArea>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </ImageArea>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <Container>
      <ContentHeader>
        <Title>{post.title}</Title>
        <Image src={imagePath} alt={post.title} width={200} height={150} />
      </ContentHeader>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </Container>
  );
};

export default PostDetail;
