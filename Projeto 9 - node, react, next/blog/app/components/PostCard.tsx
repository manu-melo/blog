import Link from "next/link";
import { Post } from "@/lib/posts";
import LikeButton from "./LikeButton";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col space-y-4">
        {/* Header with date and like button */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={post.date}>
            {new Date(post.date + "T00:00:00").toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <LikeButton initialLikes={post.likes} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          <Link
            href={`/posts/${post.slug}`}
            className="hover:underline"
            prefetch={false}
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-500 flex items-center space-x-1">
            <span>✍️</span>
            <span>Por {post.author}</span>
          </span>
          <Link
            href={`/posts/${post.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors group"
            prefetch={false}
          >
            <span>Ler mais</span>
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
