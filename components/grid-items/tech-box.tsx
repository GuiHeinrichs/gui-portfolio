import { GridItemInterface } from "@/app/config/site-config";
import Image from "next/image";
import Link from "next/link";
import React from "react"
import { DiBootstrap, DiCss3, DiGit, DiHtml5, DiJsBadge, DiMsqlServer, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiMicrosoftazure, SiCsharp, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

function TechBox({ item }: { item: GridItemInterface }) {
  return (
    <div className="flex flex-col justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-primary/25 bg-gradient-to-b from-transparent via-neutral-900/5 to-neutral-900/90"/>
      {/* Image */}
      <Image className="object-center" fill src={item.image ?? ""} alt="tech-image"/>
      {/* Content container */}
      <div className="relative z-20 p-8">
        {/* Title */}
        <div className="mb-3 text-lg font-semibold text-white">
          Technologies
        </div>
        {/* Items */}
        <div className="flex flex-wrap items-center gap-3">
          { 
            item.techs?.map((tech) => {
              return (
                <Link 
                  key={tech.link} 
                  href={tech.link ?? ""}
                  className="
                    flex
                    justify-between
                    items-center
                    gap-1
                    px-2 
                    py-1 
                    text-sm 
                    font-light 
                    bg-white 
                    rounded-lg 
                    dark:bg-neutral-900 
                    hover:bg-white/80 
                    hover:dark:bg-neutral-800"
                >
                  { 
                    tech.techIcon === "JavaScript" ? (<DiJsBadge /> 
                    ) : tech.techIcon === "TypeScript" ? (<SiTypescript />
                    ) : tech.techIcon === "React" ? (<DiReact />
                    ) : tech.techIcon === "Html" ? (<DiHtml5 />
                    ) : tech.techIcon === "Git" ? (<DiGit />
                    ) : tech.techIcon === "Css" ? (<DiCss3 />
                    ) : tech.techIcon === "Bootstrap" ? (<DiBootstrap />
                    ) : tech.techIcon === "SqlServer" ? (<DiMsqlServer />
                    ) : tech.techIcon === "NodeJs" ? (<DiNodejsSmall />
                    ) : tech.techIcon === "Azure" ? (<SiMicrosoftazure />
                    ) : tech.techIcon === "C#" ? (<SiCsharp/>
                    ) : tech.techIcon === "TailWind" ? (<SiTailwindcss/>
                    ) : tech.techIcon === "FramerMotion" ? (<TbBrandFramerMotion />
                    ) : tech.techIcon === "NextJs" ? (<TbBrandNextjs />
                    ) : (<DiJsBadge />)
                  }
                  {tech.title} 
                </Link>
              )
            }) 
          }
        </div>
      </div>
    </div>
  )
}

export default TechBox;
