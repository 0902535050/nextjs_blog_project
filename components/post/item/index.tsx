import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Content, ImageArea, Text, Time, Title } from "./index.style";

type Props = {
  post: any;
};

const PostItem = (props: Props) => {
  const { title, image, desc, date, slug } = props.post;
 
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
      <Link href={linkPath}>
        <ImageArea>
          <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
        </ImageArea>
        <Content>
          <Title>{title}</Title>
          <Time>{formattedDate}</Time>
          <Text>{desc}</Text>
        </Content>
      </Link>
  );
};

export default PostItem;
