"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPosts, Post } from "@/lib/posts";
import PostCard from "@/app/components/PostCard";
import NewPostForm from "@/app/components/NewPostForm";

export default function Home() {
  const initialPosts = getAllPosts();
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregar posts dinâmicos do localStorage
    const dynamicPosts = localStorage.getItem("dynamicPosts");
    if (dynamicPosts) {
      const parsedDynamicPosts: Post[] = JSON.parse(dynamicPosts);
      // Combinar posts dinâmicos com posts estáticos
      setPosts([...parsedDynamicPosts, ...initialPosts]);
    }
    setIsLoading(false);
  }, []);

  const handleAddPost = (newPost: Post) => {
    // Adicionar o novo post no início da lista
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 bg-gray-200 rounded mb-8"></div>
          <div className="h-32 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo ao Meu Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Compartilhando conhecimentos sobre desenvolvimento web, tecnologia e
          carreira.
        </p>
      </div>

      {/* New Post Form */}
      <NewPostForm onAddPost={handleAddPost} />

      {/* Posts List */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Posts Recentes
        </h2>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum post encontrado.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
