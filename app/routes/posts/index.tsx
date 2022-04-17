import { Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
    const posts = useLoaderData<Post[]>();
    return (
      <div>
        <h1 className="text-2xl font-semibold">Posts</h1>
        <ul className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map(post => (
            <div key={post.slug}>
                <Link to={post.slug} className="mt-2 block">{post.title}</Link>
            </div>
            ))}
        </ul>
      </div>
    );
  }