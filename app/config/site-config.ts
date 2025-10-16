import { Grid } from "lucide-react";

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "project" | "tech" | "bio";
export type TechItemType = {
  title: string;
  link: string;
  techIcon: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonSecondaryTitle?: string;
  buttonLink?: string;
  /*Project*/
  stars?: number;
  projectImage?: string;
  projectDescription?: string;
  inDevelopment?: boolean;
  // Techs
  techs?: TechItemType[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "bio",
    title: "Journey resume 👦🏻",
    icon: "discord",
    username: "@GuiHeinrichs",
    description:
      "I'm 22 years old programmer enthusiast, working since 2021 with software developing. Currently working as FullStack developer. Systems analysis and development student.",
    color: "#171717",
    buttonLink: "https://github.com/GuiHeinrichs",
  },
  {
    layout: "1x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "joão-guilherme-heinrichs",
    color: "#0a66c2",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/jo%C3%A3o-guilherme-heinrichs/",
    buttonSecondaryTitle: "264",
  },
  {
    layout: "1x2",
    type: "social",
    title: "GitHub",
    icon: "github",
    username: "@GuiHeinrichs",
    color: "#070707",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/GuiHeinrichs",
    buttonSecondaryTitle: "7",
  },
  {
    layout: "2x4",
    type: "tech",
    title: "Technologies",
    image: "/tech-image.jpg",
    techs: [
      {
        title: "JavaScript",
        link: "",
        techIcon: "JavaScript",
      },
      {
        title: "TypeScript",
        link: "",
        techIcon: "TypeScript",
      },
      {
        title: "ReactJS",
        link: "",
        techIcon: "React",
      },
      {
        title: "CSharp",
        link: "",
        techIcon: "C#",
      },
      {
        title: "HTML",
        link: "",
        techIcon: "Html",
      },
      {
        title: "CSS",
        link: "",
        techIcon: "Css",
      },
      {
        title: "Tailwindcss",
        link: "",
        techIcon: "TailWind",
      },
      {
        title: "Framer Motion",
        link: "",
        techIcon: "FramerMotion",
      },
      {
        title: "NextJs",
        link: "",
        techIcon: "NextJs",
      },
      {
        title: "NodeJS",
        link: "",
        techIcon: "NodeJs",
      },
      {
        title: ".NetCore",
        link: "",
        techIcon: "C#",
      },
      {
        title: "LINQ",
        link: "",
        techIcon: "C#",
      },
      {
        title: "Entity",
        link: "",
        techIcon: "C#",
      },
      {
        title: "Dapper",
        link: "",
        techIcon: "C#",
      },
      {
        title: "SQLServer",
        link: "",
        techIcon: "SqlServer",
      },
      {
        title: "Git",
        link: "",
        techIcon: "Git",
      },
      {
        title: "Azure",
        link: "",
        techIcon: "Azure",
      },
      {
        title: "BootStrap",
        link: "",
        techIcon: "Bootstrap",
      },
    ],
  },
  {
    layout: "2x4",
    type: "project",
    title: "Car Hub",
    icon: "github",
    color: "#070707",
    buttonLink: "https://carhub-sigma.vercel.app/",
    stars: 2,
    projectImage: "/project-images/carhub-presentation.png",
    projectDescription: "Plataforma de vendas de veículos com interface moderna e funcionalidades completas.",
  },
  {
    layout: "2x4",
    type: "project",
    title: "YUI Coffee",
    icon: "github",
    color: "#070707",
    buttonLink: "https://yui-coffee.vercel.app/",
    stars: 1,
    projectImage: "/project-images/YUI-coffee-presentation.png",
    projectDescription: "Site de venda de cafés e acessórios com design elegante e responsivo.",
  },
  {
    layout: "2x4",
    type: "project",
    title: "Stock Pro",
    icon: "github",
    color: "#070707",
    buttonLink: "#",
    stars: 0,
    projectImage: "/project-images/stock-pro-presentation.png",
    projectDescription: "Sistema de gerenciamento e controle de estoque.",
    inDevelopment: true,
  }
];

export const siteConfig = {
  creator: "João Guilherme Heinrichs",
  title: "Software Engineer",
  description: "Currently working as FullStack Developer!",
  location: "Porto Alegre, Brasil",
  locationLink: "https://pt.wikipedia.org/wiki/Porto_Alegre",
  email: "guiheinrichs.dev@gmail.com",
  item: GridItems,
} as const;

