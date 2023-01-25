import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: any) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((item: any) => {
    return getPostData(item);
  });

  const sortedPosts = allPosts.sort((a: any, b: any) =>
    a.date > b.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts () {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post:any) => post.isFeatured);

    return featuredPosts;
}
