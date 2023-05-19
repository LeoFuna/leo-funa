import Image from "next/image";

const TECH_STACKS_PATHS = [
  { path: '/techstack/next.png', title: 'Next Js' },
  { path: '/techstack/typescript.png', title: 'TypeScript' },
  { path: '/techstack/nodejs.png', title: 'Node Js' },
  { path: '/techstack/jest.png', title: 'Jest' },
  { path: '/techstack/mysql.png', title: 'MySQL' },
  { path: '/techstack/mongodb.png', title: 'MongoDb' },
  { path: '/techstack/ionic.png', title: 'Ionic' },
  { path: '/techstack/tailwind.png', title: 'Tailwind CSS' },
  { path: '/techstack/firebase.png', title: 'Firebase' },
  { path: '/techstack/prisma.png', title: 'Prisma ORM' },
  { path: '/techstack/react.png', title: 'React' },
  { path: '/techstack/docker.png', title: 'Docker' },
  { path: '/techstack/redux.png', title: 'Redux' },
  { path: '/techstack/js.png', title: 'Javascript' },
  { path: '/techstack/html.png', title: 'Html' },
  { path: '/techstack/css.png', title: 'CSS' },
];

const TOOLS_PATHS = [
  { path: '/techstack/vscode.png', title: 'VS Code' },
  { path: '/techstack/git.png', title: 'Git' },
  { path: '/techstack/github.png', title: 'Github' },
  { path: '/techstack/npm.png', title: 'NPM' },
  { path: '/techstack/postman.png', title: 'Postman' },
  { path: '/techstack/vercel.png', title: 'Vercel' },
];

export default function Technologies() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tecnologias
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Tecnologias que já trabalhei
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {TECH_STACKS_PATHS.map(({ path, title }, index) =>
          <Image
            key={index}
            width={100}
            height={100}
            src={path}
            title={title}
            alt={`${title} logo`}
          />)}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Ferramentas
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {TOOLS_PATHS.map(({ path, title }, index) =>
          <Image
            key={index}
            width={100}
            height={100}
            src={path}
            title={title}
            alt={`${title} logo`}
          />)}
      </section>
    </main>
  );
}
