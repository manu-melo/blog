"use client";

import { useState } from "react";
import { Post } from "@/lib/posts";

interface NewPostFormProps {
  onAddPost: (post: Post) => void;
}

export default function NewPostForm({ onAddPost }: NewPostFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content || !formData.author) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    setIsSubmitting(true);

    // Gerar excerpt do conteúdo (primeiros 150 caracteres)
    const excerpt =
      formData.content.length > 150
        ? formData.content.substring(0, 150) + "..."
        : formData.content;

    // Gerar slug do título
    const slug = formData.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^a-z0-9\s]/g, "") // remove caracteres especiais
      .replace(/\s+/g, "-") // substitui espaços por hífens
      .trim();

    // Criar o novo post
    const newPost: Post = {
      slug: `${slug}-${Date.now()}`, // adiciona timestamp para garantir unicidade
      title: formData.title,
      excerpt,
      content: formData.content,
      date: new Date().toLocaleDateString("en-CA"), // formato YYYY-MM-DD em fuso horário local
      author: formData.author,
      likes: 0,
    };

    // Simular tempo de processamento
    setTimeout(() => {
      // Salvar posts dinâmicos no localStorage para persistência durante a sessão
      const existingDynamicPosts = localStorage.getItem("dynamicPosts");
      const dynamicPosts: Post[] = existingDynamicPosts
        ? JSON.parse(existingDynamicPosts)
        : [];
      dynamicPosts.unshift(newPost); // Adicionar no início
      localStorage.setItem("dynamicPosts", JSON.stringify(dynamicPosts));

      onAddPost(newPost);
      setFormData({ title: "", content: "", author: "" });
      setIsSubmitting(false);
      setIsOpen(false);
    }, 500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
          <span>✍️</span>
          <span>Escrever um novo post</span>
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          {isOpen ? "Cancelar" : "Novo Post"}
        </button>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          {/* Título */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Título do Post *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Digite o título do seu post..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              disabled={isSubmitting}
              required
            />
          </div>

          {/* Autor */}
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Seu Nome *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Digite seu nome..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              disabled={isSubmitting}
              required
            />
          </div>

          {/* Conteúdo */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Conteúdo do Post *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Escreva o conteúdo do seu post... Você pode usar formatação markdown básica como **texto em negrito** e # para títulos."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
              disabled={isSubmitting}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Dica: Os primeiros 150 caracteres serão usados como resumo na
              lista de posts.
            </p>
          </div>

          {/* Data automática */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Data de publicação:</span>{" "}
              {new Date().toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Botões */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-6 py-2 rounded-lg font-medium transition-all duration-200
                ${
                  isSubmitting
                    ? "bg-blue-400 text-white cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-0.5"
                }
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Publicando...</span>
                </span>
              ) : (
                "Publicar Post"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
