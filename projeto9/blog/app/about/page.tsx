import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Meu Blog",
  description:
    "Conheça mais sobre Manu - Estudante de Engenharia de Software e Engenheiro de Dados",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sobre Mim
        </h1>
        <p className="text-xl text-gray-600">
          Estudante de Engenharia de Software e Engenheiro de Dados
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Apresentação Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
            <span>🌟</span>
            <span>Apresentação</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Oi, eu sou o <strong>Manu</strong>!
            </p>

            <p>
              Atualmente sou estudante de{" "}
              <strong>Engenharia de Software</strong>, mas já sou formado em
              Engenharia de Dados. Tenho foco em construir soluções práticas e
              inteligentes para diferentes tipos de usuários. Gosto de unir
              teoria e prática no meu aprendizado, explorando conceitos de
              desenvolvimento de software em projetos reais, tanto acadêmicos
              quanto pessoais.
            </p>

            <p>
              Minhas principais experiências estão relacionadas a{" "}
              <strong>desenvolvimento web e pipeline de dados</strong>,
              especialmente com{" "}
              <strong>
                JavaScript, TypeScript, React, Next.js, Python, Databricks, Air
                Flow, PostgreSQL
              </strong>
              . Também tenho interesse em{" "}
              <strong>
                arquitetura de sistemas, usabilidade e acessibilidade
              </strong>
              , além de estar sempre buscando formas de aprimorar minha lógica
              de programação e boas práticas de código.
            </p>
          </div>
        </section>

        {/* Tecnologias Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
            <span>💻</span>
            <span>Tecnologias e Interesses</span>
          </h2>

          <div className="space-y-6">
            {/* Front-end */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Front-end</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Back-end */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Back-end</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "APIs REST"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Dados */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Dados</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Databricks", "Air Flow", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Outros */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span>Outros</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git/GitHub",
                  "Boas práticas de versionamento",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Estudos Atuais */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Atualmente</strong>, estou aprofundando meus estudos em{" "}
                <strong>JavaScript moderno</strong>
                (como <strong>arrow functions</strong>, Promises e Client/Server
                Components no Next.js).
              </p>
            </div>
          </div>
        </section>

        {/* Curiosidades Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
            <span>�</span>
            <span>Curiosidades sobre mim</span>
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-xl">🏨</span>
              <span>
                Jogo <strong>Habbo</strong> e sou programador de{" "}
                <strong>wired</strong>.
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-xl">☕🚫</span>
              <span>
                Diferente da maioria dos programadores, eu{" "}
                <strong>não gosto de café</strong>.
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-xl">🌱</span>
              <span>
                Tenho como hábito{" "}
                <strong>aprender algo novo toda semana</strong>.
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-xl">�️‍⚧️</span>
              <span>
                Faço parte da <strong>comunidade LGBT+</strong>, sendo um{" "}
                <strong>homem trans</strong>.
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
            <span>📫</span>
            <span>Vamos Conversar?</span>
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700">
              Adoraria conversar sobre tecnologia, projetos ou oportunidades!
              Você pode me encontrar nas seguintes plataformas:
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mn.manu822@gmail.com"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <span>📧</span>
                <span>Email</span>
              </a>

              <a
                href="https://github.com/manu-melo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <span>⚡</span>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/manu-melo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
