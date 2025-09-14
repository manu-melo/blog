import { getAllPosts } from "@/lib/posts";
import DynamicPostPage from "@/app/components/DynamicPostPage";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Gerar páginas estáticas para todos os posts estáticos
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Gerar metadata para SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post não encontrado | Meu Blog",
    };
  }

  return {
    title: `${post.title} | Meu Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const staticPosts = getAllPosts();

  return <DynamicPostPage slug={slug} staticPosts={staticPosts} />;
}
