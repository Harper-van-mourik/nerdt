export interface Posts {
  id: number;
  slug: string;
  title: string;
  content: string;
  time: number;
}

export const posts: Posts[] = [
  {
    id: 0,
    slug: "first-post",
    title: "First post",
    content: "Hello first post",
    time: 1715947218257,
  },
  {
    id: 1,
    slug: "second-post",
    title: "Second posted post",
    content: "The second time",
    time: 1715947218257,
  },
];

export const usePosts = () => {
  return posts;
};
