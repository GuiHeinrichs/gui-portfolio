import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from './config/site-config'
import { Mail, MapPin } from 'lucide-react'
import GridItem from '@/components/grid-item'
import SocialBox from '@/components/grid-items/social-box'
import BioBox from '@/components/grid-items/bio-box'
import TechBox from '@/components/grid-items/tech-box'
import ProjectBox from '@/components/grid-items/project-box'

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">
      {/* {Left Side} */}
      <div className="flex-1 p-8 h-full max-w-md">
        <div className="h-full rounded-md flex flex-col space-y-6">
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
          <div className="flex items-center justify-between text-xs border-t pt-5 border-neutral-200 dark:border-neutral-800">
            <div className="text-neutral-500">
              Built by @GuiHeinrichs | @2024 GuiHeinrichs. All Rights Reserved
            </div>
            <ThemeToggle/>
          </div>
        </div>
      </div>
      {/* {Right Side} */}
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
    </main>
  )
}
