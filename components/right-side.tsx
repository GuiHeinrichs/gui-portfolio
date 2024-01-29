import React from "react";

import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import BioBox from "./grid-items/bio-box";
import TechBox from "./grid-items/tech-box";
import ProjectBox from "./grid-items/project-box";

import { siteConfig } from "@/app/config/site-config";

function RightSide() {
    return (
        <div className="flex-1 h-full">
        {/* Grid Container */}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
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