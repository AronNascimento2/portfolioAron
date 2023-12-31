import { ProjectModel } from "../domain/models/projectsModel";

export const projects: ProjectModel[] = [
  {
    id: 1,
    title: "PowerFit",
    video: "assets/gravaçãopowerfit.webm",
    thumbnail: "assets/powerfitthumb.png",
    repo: "https://github.com/AronNascimento2/powerfit",
    site: "https://powerfit-gym.vercel.app/",
    description:
      "POWERFIT é um site de academia com recursos que incluem informações sobre horários de aulas, unidades próximas, modalidades de treino oferecidas pela academia e planos de aulas.",
    stacks: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", "https://sujeitoprogramador.com/wp-content/uploads/2019/05/styled.png"],
  },

  {
    id: 2,
    title: "PlayShop",
    video: "assets/gravaçãoplayshop.webm",
    thumbnail: "assets/playshopthumb.png",
    repo: "https://github.com/AronNascimento2/playshop",
    site: "https://playshop-commerce.vercel.app/",
    description:
      "O PlayShop oferece uma experiência real de compras em um e-commerce. Além de permitir que você adicione seus produtos ao carrinho, podemos lembrar quais foram os últimos itens clicados e manter seus produtos no carrinho utilizando cookies. Você pode fazer buscas por seus itens favoritos, fazer login e finalizar suas compras com um cartão de crédito fictício.",
      stacks: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" , "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", "https://sujeitoprogramador.com/wp-content/uploads/2019/05/styled.png"],

  },
  {
    id: 3,
    title: "SuperHero",
    video: "assets/gravaçãosuperhero.webm",
    thumbnail: "assets/superherothumb.png",

    repo: "https://github.com/AronNascimento2/superheroes",
    site: "https://superheroes-ruby.vercel.app/",
    description:
      "Neste projeto, mesmo que eu esteja consumindo uma API, o foco foi praticar o uso do TailwindCSS! Foi uma experiência interessante. Percebi que o Tailwind possui uma curva de aprendizado suave, e estou entusiasmado para explorar as inúmeras possibilidades que este framework oferece,",
    stacks: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"],
  },
  {
    id: 4,
    title: "Pokedex",
    video: "assets/pokedex.webm",
    thumbnail: "assets/pokedexthumb.png",
    repo: "https://github.com/AronNascimento2/pokedexAngular",
    site: "https://pokedex-angular-sand.vercel.app/",
    description: "Meu primeiro projeto em Angular, foi interessante conhecer o Angular e ver suas possibilidades ",
    stacks: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"],
  },
  {
    id: 5,
    title: "FlixFlow",
    video: "",
    repo: "",
    site: "",
    description: "",
    stacks: ["Angular"],
  },
];
