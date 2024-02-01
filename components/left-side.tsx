import React from "react";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import Footer from "./footer";

import { siteConfig } from "@/app/config/site-config";

function LeftSide() {
    return (
      <div className="flex-1 p-8 px-8 w-full xl:h-full xl:max-w-md">
        <div className="w-full h-full rounded-md flex flex-col space-y-6">
          {/* {Image} */}
          <div>
            <Image 
              alt="avatar" 
              className="rounded-full" 
              src="/my-photo.jpeg" 
              width="120"
              height="120"
              priority
              loading="eager"
            />
          </div>
          {/* {Content Container} */}
          <div>
            {/* {Title} */}
            <div className="font-semibold text-primary text-xl">{siteConfig.title}</div>
            {/* {Name} */}
            <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
            {/* {Description} */}
            <p className="text-2xl text-neutral-500 font-light">{siteConfig.description}</p>
          </div>
          {/* {Buttons Container} */}
          <div className="flex items-center justify-between gap-4">
            {/* {Buttons} */}
            <a className="border border-neutral-200 dark:border-neutral-800 w-full flex items-center gap-2 py-3 px-2 rounded-md" 
              href={siteConfig.locationLink}
            >
              <MapPin size="16"/>
              {siteConfig.location}
            </a>
            <a className="border border-neutral-200 dark:border-neutral-800 w-full flex items-center gap-2 py-3 px-2 rounded-md" 
              href={`mailto:${siteConfig.email}`}
            >
              <Mail size="16"/>
              Contact Me
            </a>
          </div>
          {/* {Footer} */}
          <div className="hidden xl:flex">
            <Footer />
          </div>
        </div>
      </div>
    )
}

export default LeftSide;