Projeto - Blog Pessoal Simples (Next.js
App Router)
PROJETO INDIVIDUAL
Vocês criarão um projeto Next.js - um blog pessoal simples que demonstra os conceitos
fundamentais de roteamento, Server Components e Client Components.
Conceito da Aplicação
Um blog pessoal minimalista com as funcionalidades essenciais:
1. Página inicial - Lista de posts do blog (Server Component)
2. Posts individuais - Páginas dinâmicas para cada post
3. Página sobre - Página estática com informações pessoais
4. Navegação global - Layout compartilhado entre todas as páginas
5. Botão de curtir - Interatividade com Client Component
Conceitos Next.js que serão praticados
01 - App Router Structure
● Roteamento baseado em sistema de arquivos
● Páginas definidas por page.tsx
● Layouts com layout.tsx
● Rotas dinâmicas com [slug]
02 - Server Components (Padrão)
● Componentes que rodam no servidor
● Acesso direto a APIs e banco de dados
● Melhor performance
● Sem JavaScript enviado ao cliente
03 - Client Components
● Componentes interativos com estado
● Executam no navegador
● Necessários para useState, useEffect, eventos
● Marcados com "use client"
04 - Layouts e Templates
● Layout compartilhado entre páginas
● Navegação persistente
● Estrutura HTML consistente
05 - Roteamento Dinâmico
● Páginas baseadas em parâmetros
● Geração de URLs dinâmicas
● Acesso aos parâmetros da URL
Estrutura da Aplicação
app/
├── layout.tsx # Layout global com navegação
├── page.tsx # Página inicial (lista de posts)
├── about/
│ └── page.tsx # Página sobre
├── posts/
│ └── [slug]/
│ └── page.tsx # Post individual dinâmico
└── components/
├── PostCard.tsx # Card do post (Server Component)
└── LikeButton.tsx # Botão curtir (Client Component)
Requisitos Funcionais
01 - Layout Global
● Navegação com links para Home e Sobre
● Design consistente em todas as páginas
● Responsivo e moderno
02 - Página Inicial (Lista de Posts)
● Exibir lista de posts do blog
● Card para cada post com título, resumo e data
● Link para post completo
● Server Component para melhor performance

03 - Posts Individuais (Roteamento Dinâmico)
● URL do tipo /posts/[slug]
● Conteúdo completo do post
● Metadados (título, data, autor)
● Botão de curtir interativo
04 - Página Sobre
● Informações pessoais
● Página estática simples
● Contato e redes sociais
05 - Componente de Like (Client Component)
● Botão interativo para curtir posts
● Contador de likes com estado local
● Animações e feedback visual
06 - Design Responsivo
● Layout mobile-first
● Design limpo e legível
● Tipografia otimizada para leitura
Objetivos de Aprendizado
1. Entender o App Router - Nova estrutura de roteamento do Next.js 15
2. Diferenciar Server vs Client Components - Quando usar cada tipo
3. Implementar roteamento dinâmico - URLs baseadas em parâmetros
4. Criar layouts compartilhados - Navegação consistente
5. Trabalhar com TypeScript - Tipagem em Next.js
6. Estruturar projeto Next.js - Organização de arquivos e pastas
7. Implementar interatividade - Client Components com estado
