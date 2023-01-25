import Image from "next/image";
import React from "react";
import { Container, ImageArea, Text, Title} from "./index.style";
interface Props {}

const Hero: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <ImageArea>
        <Image src='/images/site/me.jpg' alt='Tuấn image' width={300} height={300}/>
      </ImageArea>
      <Title>Hi, Im Tuấn</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nobis
        ullam, ipsum quos pariatur optio voluptatem hic repellendus velit
        perferendis ad incidunt aliquam nostrum nulla dolorum labore omnis nemo
        ipsa.
      </Text>
    </Container>
  );
};

export default Hero;
