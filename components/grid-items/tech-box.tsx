import { GridItemInterface } from "@/app/config/site-config";
import Image from "next/image";
import Link from "next/link";
import React from "react"

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
                  { tech.title }
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
