"use client";
import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion"

import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import BioBox from "./grid-items/bio-box";
import TechBox from "./grid-items/tech-box";
import ProjectBox from "./grid-items/project-box";
import { siteConfig } from "@/app/config/site-config";

const staggerDelay = stagger(0.02);

function RightSide() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if(scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.05,
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerDelay
        }
      );
    }
  });

    return (
        <div className="flex-1 md:h-full">
        {/* Grid Container */}
        <div
          ref={scope}
          className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10"
        >
          {siteConfig.item.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {
                item.type === "social" ? (
                  <SocialBox item={item}/> 
                ) : item.type === "bio" ? (
                  <BioBox item={item}/>
                ) : item.type === "tech" ? (
                  <TechBox item={item}/>
                ) : item.type === "project" ?
                (
                  <ProjectBox item={item}/>
                ) : (
                  <div>Not implemented yet!</div>
                )}
              </GridItem>
            )
          })}
        </div>
      </div>
    )
}

export default RightSide;