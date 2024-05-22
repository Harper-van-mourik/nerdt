export declare interface Post {
  id?: number;
  slug?: string;
  title: string;
  content: string;
  featured_image: string;
  timestamp_created?: number;
  timestamp_updated?: number;
}

export const posts: Post[] = [
  {
    id: 0,
    slug: "first-post",
    title: "First post",
    content:
      "Hello first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit tortor in diam ornare, eu aliquet lacus maximus. Pellentesque enim ante, euismod quis ante in, ullamcorper fringilla diam.",
    featured_image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp_created: 1715947218257,
  },
  {
    id: 1,
    slug: "second-post",
    title: "Second posted post",
    content:
      "CSS animations like no other. Donec egestas tellus quis viverra semper. Duis at lectus leo. Aenean tristique porta enim, eget aliquam nisi semper sit amet. ",
    featured_image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp_created: 1715947218257,
  },
];

export const usePosts = () => {
  return posts;
};
