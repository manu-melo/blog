export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  likes: number;
}

export const posts: Post[] = [
  {
    slug: "aprendendo-nextjs",
    title: "Aprendendo Next.js 15 e App Router",
    excerpt:
      "Uma jornada pelos novos recursos do Next.js 15 e como o App Router está revolucionando o desenvolvimento React.",
    content: `# Aprendendo Next.js 15 e App Router

O Next.js 15 trouxe muitas novidades interessantes, especialmente com o App Router que se tornou estável e é agora a forma recomendada de estruturar aplicações Next.js.

## O que mudou com o App Router?

### 1. Estrutura baseada em pastas
Agora cada pasta na pasta \`app\` representa uma rota. É muito mais intuitivo:

\`\`\`
app/
├── page.tsx          # /
├── about/
│   └── page.tsx      # /about
└── posts/
    └── [slug]/
        └── page.tsx  # /posts/[slug]
\`\`\`

### 2. Server Components por padrão
Todos os componentes são Server Components por padrão, o que significa:
- Melhor performance
- Menos JavaScript enviado ao cliente
- Acesso direto a APIs e banco de dados

### 3. Client Components quando necessário
Para interatividade, usamos a diretiva \`"use client"\`:

\`\`\`tsx
"use client";

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  // ...
}
\`\`\`

## Vantagens que notei

1. **Organização mais clara**: A estrutura de pastas faz mais sentido
2. **Performance melhor**: Server Components reduzem o bundle
3. **Developer Experience**: Menos configuração, mais desenvolvimento

Estou empolgado para explorar mais recursos do Next.js 15!`,
    date: "2025-09-13",
    author: "Manu Melo",
    likes: 12,
  },
  {
    slug: "typescript-no-frontend",
    title: "Por que TypeScript Transformou Meu Desenvolvimento Frontend",
    excerpt:
      "Como o TypeScript mudou completamente minha forma de desenvolver aplicações frontend e por que recomendo para todos.",
    content: `# Por que TypeScript Transformou Meu Desenvolvimento Frontend

Há alguns anos, eu era resistente ao TypeScript. "JavaScript já funciona bem", pensava. Como estava errado! Hoje não consigo mais imaginar desenvolvimento frontend sem TypeScript.

## O que mudou na prática?

### 1. Detecção de erros em tempo de desenvolvimento
Antes de TypeScript, muitos bugs só apareciam em produção:

\`\`\`typescript
// TypeScript me avisa que 'user' pode ser undefined
function getUserName(user?: User) {
  return user.name; // Error: Object is possibly 'undefined'
}

// Versão corrigida
function getUserName(user?: User) {
  return user?.name ?? 'Usuário anônimo';
}
\`\`\`

### 2. Intellisense poderoso
O autocomplete do VS Code ficou incrível:
- Sugestões precisas de propriedades
- Parâmetros de funções
- Importações automáticas

### 3. Refatoração segura
Renomear propriedades, mover arquivos, alterar interfaces - tudo com confiança de que não vou quebrar nada.

## Dicas para quem está começando

1. **Comece gradualmente**: Use \`any\` no início se necessário
2. **Configure o tsconfig.json**: Comece com configurações mais relaxadas
3. **Use tipos utilitários**: \`Partial\`, \`Pick\`, \`Omit\` são seus amigos

## Resultado

- **Menos bugs em produção**: Problemas detectados cedo
- **Código mais legível**: Interfaces documentam o código
- **Maior confiança**: Refatorações sem medo

TypeScript não é só sobre tipos - é sobre escrever código melhor e mais seguro!`,
    date: "2025-09-12",
    author: "Manu Melo",
    likes: 8,
  },
  {
    slug: "dicas-carreira-dev",
    title: "5 Dicas Para Acelerar Sua Carreira Como Desenvolvedor",
    excerpt:
      "Lições que aprendi que podem ajudar novos desenvolvedores a crescerem mais rapidamente na carreira.",
    content: `# 5 Dicas Para Acelerar Sua Carreira Como Desenvolvedor

Depois de alguns anos na área, percebi alguns padrões que realmente fazem diferença na carreira de um desenvolvedor. Aqui compartilho as 5 dicas mais importantes.

## 1. 🎯 Foque na resolução de problemas, não só no código

O código é apenas o meio, não o fim. Os melhores desenvolvedores são aqueles que:
- Entendem o problema antes de codificar
- Fazem perguntas para esclarecer requisitos
- Pensam no impacto para o usuário final

## 2. 📚 Aprenda a aprender continuamente

A tecnologia muda rápido. Desenvolva o hábito de:
- Ler documentação oficial
- Fazer projetos pessoais
- Acompanhar comunidades (Reddit, Discord, Twitter)
- Não ter medo de experimentar coisas novas

## 3. 🤝 Soft skills são tão importantes quanto hard skills

Comunicação, trabalho em equipe e empatia fazem toda diferença:
- Saiba explicar conceitos técnicos de forma simples
- Seja colaborativo em code reviews
- Peça ajuda quando necessário
- Ajude colegas quando possível

## 4. 🏗️ Construa projetos que importam

Ter projetos no GitHub é importante, mas projetos que resolvem problemas reais impressionam mais:
- Crie ferramentas que você mesmo usaria
- Contribua para projetos open source
- Documente bem seus projetos
- Mostre o processo, não só o resultado

## 5. 🌱 Cultive uma mentalidade de crescimento

- Aceite feedback de forma construtiva
- Celebre pequenas vitórias
- Aprenda com os erros (todos cometem)
- Seja paciente com seu próprio progresso

## Conclusão

A carreira em desenvolvimento é uma maratona, não uma corrida de 100 metros. Consistência e curiosidade genuína valem mais que talent natural.

Boa sorte na sua jornada! 🚀`,
    date: "2025-09-11",
    author: "Manu Melo",
    likes: 15,
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
