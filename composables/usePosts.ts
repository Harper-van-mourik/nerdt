import { Timestamp } from "firebase/firestore";

export declare type PostStatus = "published" | "draft" | "archived";

export const postStatusOptions: { value: PostStatus; label: string }[] = [
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
  { value: "archived", label: "Archived" },
];

export declare interface Post {
  id?: string;
  slug?: string;
  title: string;
  content: string;
  status: string;
  featured_image: string;
  timestamp_created?: Timestamp;
  timestamp_updated?: Timestamp;
  seo: {
    title: string;
    description: string;
  };
}

export const usePosts = () => {
  return posts;
};

const postsSlug = "/posts";

export function returnPostsSlug(slug: string): string {
  return `${postsSlug}/${slug}`;
}

export const postDefaultContent = `
<p><strong>These are examples</strong></p>
<p><i>Use keyboard shortcuts to style the post</i></p>
<p></p>
<code>This is a code.</code>
<p></p>
<pre><code>div {
width: 12px
}</code></pre>
<p></p>
<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&amp;w=2976&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">A link</a></p>
<p></p>
<img src="https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&amp;w=2976&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" contenteditable="false" draggable="true" class="ProseMirror-selectednode">`;

export const postDefault: Post = {
  title: "",
  slug: "",
  status: "draft",
  content: postDefaultContent,
  featured_image:
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  seo: {
    title: "",
    description: "",
  },
};

export const posts: Ref<Post[] | null> = ref(null);
export const relatedPosts: Ref<Post[] | null> = ref(null);
export const featuredPosts: Ref<Post[] | null> = ref(null);
