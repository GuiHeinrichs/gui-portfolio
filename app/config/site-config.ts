import { Grid } from "lucide-react";

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "project" | "tech" | "bio";
export type TechItemType = {
    title: string;
    link: string;
}

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
        description: "I'm 22 years old programmer enthusiast, working since 2021 with software developing. Currently working as FullStack developer. Systems analysis and development student.",
        color: "#171717",
        buttonLink: "https://github.com/GuiHeinrichs"
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
        buttonSecondaryTitle: "264"
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
        buttonSecondaryTitle: "7"
    },
    {
        layout: "2x4",
        type: "tech",
        title: "Technologies",
        image: "/tech-image.jpg",
        techs: [
            {
                title: "JavaScript",
                link: ""
            },
            {
                title: "TypeScript",
                link: ""
            },
            {
                title: "ReactJS",
                link: ""
            },
            {
                title: "CSharp",
                link: ""
            },
            {
                title: "HTML",
                link: ""
            },
            {
                title: "CSS",
                link: ""
            },
            {
                title: "Tailwindcss",
                link: ""
            },
            {
                title: "Framer Motion",
                link: ""
            },
            {
                title: "NextJs",
                link: ""
            },
            {
                title: "NodeJS",
                link: ""
            },
            {
                title: ".NetCore",
                link: ""
            },
            {
                title: "LINQ",
                link: ""
            },
            {
                title: "Entity",
                link: ""
            },
            {
                title: "Dapper",
                link: ""
            },
            {
                title: "SQLServer",
                link: ""
            },
            {
                title: "Git",
                link: ""
            },
            {
                title: "CI/CD",
                link: ""
            },
            {
                title: "BootStrap",
                link: ""
            },
        ]
    },
    {
        layout: "2x2",
        type: "social",
        title: "Twitter",
        icon: "twitter",
        username: "@GuiHeinrichsDev",
        buttonTitle: "Follow",
        buttonLink: "https://twitter.com/GuiHeinrichsDev",
        color: "#1DA1F2",
        description:
          "Full Stack Developer who enjoys coding and experimenting with new technologies.",
    },
    {
        layout: "2x1",
        type: "project",
        title: "API com Express",
        icon: "github",
        color: "#070707",
        buttonLink: "https://github.com/GuiHeinrichs/API-com-Express",
        stars: 2,
    },
    {
        layout: "2x1",
        type: "project",
        title: "Nutri Table Project",
        icon: "github",
        color: "#070707",
        buttonLink: "https://github.com/GuiHeinrichs/nutriTableProject",
        stars: 1,
    },
    {
        layout: "2x1",
        type: "project",
        title: "Visual Studio Code Configuration",
        icon: "vscode",
        color: "#3ca5ea",
        buttonLink: "https://github.com/GuiHeinrichs/vscode-config/blob/main/settings.json",
        stars: 0,
    },
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