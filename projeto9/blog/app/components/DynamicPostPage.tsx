"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { Post } from "@/lib/posts";
import LikeButton from "@/app/components/LikeButton";

interface DynamicPostPageProps {
  slug: string;
  staticPosts: Post[];
}

export default function DynamicPostPage({
  slug,
  staticPosts,
}: DynamicPostPageProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Buscar post nos posts estáticos ou no localStorage (posts dinâmicos)
    let foundPost = staticPosts.find((p) => p.slug === slug);

    if (!foundPost) {
      // Buscar em posts dinâmicos salvos no localStorage
      const dynamicPosts = localStorage.getItem("dynamicPosts");
      if (dynamicPosts) {
        const parsedPosts: Post[] = JSON.parse(dynamicPosts);
        foundPost = parsedPosts.find((p) => p.slug === slug);
      }
    }

    if (foundPost) {
      setPost(foundPost);
    }

    setLoading(false);
  }, [slug, staticPosts]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Post não encontrado
        </h1>
        <p className="text-gray-600 mb-6">
          O post que você está procurando não existe ou foi removido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Voltar para o blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Voltar para o blog
        </Link>
      </nav>

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center space-x-4">
            <span>Por {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date + "T00:00:00").toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <LikeButton initialLikes={post.likes} />
        </div>
      </header>

      {/* Post Content */}
      <article className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">
          {post.content.split("\n\n").map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith("# ")) {
              return (
                <h1
                  key={index}
                  className="text-3xl font-bold text-gray-900 mb-6 mt-8"
                >
                  {paragraph.replace("# ", "")}
                </h1>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-gray-900 mt-6 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }

            // Handle code blocks
            if (paragraph.startsWith("```")) {
              const codeContent = paragraph
                .replace(/```\w*\n?/, "")
                .replace(/```$/, "");
              return (
                <pre
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6"
                >
                  <code className="text-sm font-mono">{codeContent}</code>
                </pre>
              );
            }

            // Handle regular paragraphs
            const formattedParagraph = paragraph
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(
                /`(.*?)`/g,
                '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>'
              );

            return (
              <p
                key={index}
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: formattedParagraph }}
              />
            );
          })}
        </div>
      </article>

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Gostou do post? Não esqueça de curtir! ❤️
          </div>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Ver mais posts →
          </Link>
        </div>
      </footer>
    </div>
  );
}
