import React, { Fragment } from 'react'
import { Container, Logo, Content } from "./index.style";
import Link from 'next/link';
interface Props {
  children: any;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Fragment>
      <Container>
        <Link href="/">
          <Logo>My Next Blog</Logo>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Container>
      <Content>{props.children}</Content>
    </Fragment>
  );
};

export default Layout;