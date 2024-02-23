import { GridItemInterface } from "@/app/config/site-config";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiMsqlServer,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  SiMicrosoftazure,
  SiCsharp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

function TechBox({ item }: { item: GridItemInterface }) {
  const textIndex = useMotionValue(0);
  const titleText = "Technologies";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    titleText.slice(0, latest),
  );

  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === titleText.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-primary/25 bg-gradient-to-b from-transparent via-neutral-900/5 to-neutral-900/90" />
      {/* Image */}
      <Image
        className="object-center"
        fill
        src={item.image ?? ""}
        alt="tech-image"
      />
      {/* Content container */}
      <div className="relative z-20 p-8">
        {/* Title */}
        <div className="pb-2">
          <motion.span className="mb-3 text-3xl font-semibold text-white">
            {displayText}
          </motion.span>
        </div>
        {/* Items */}
        <div className="flex flex-wrap items-center gap-3">
          {item.techs?.map((tech) => {
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
                {tech.techIcon === "JavaScript" ? (
                  <DiJsBadge />
                ) : tech.techIcon === "TypeScript" ? (
                  <SiTypescript />
                ) : tech.techIcon === "React" ? (
                  <DiReact />
                ) : tech.techIcon === "Html" ? (
                  <DiHtml5 />
                ) : tech.techIcon === "Git" ? (
                  <DiGit />
                ) : tech.techIcon === "Css" ? (
                  <DiCss3 />
                ) : tech.techIcon === "Bootstrap" ? (
                  <DiBootstrap />
                ) : tech.techIcon === "SqlServer" ? (
                  <DiMsqlServer />
                ) : tech.techIcon === "NodeJs" ? (
                  <DiNodejsSmall />
                ) : tech.techIcon === "Azure" ? (
                  <SiMicrosoftazure />
                ) : tech.techIcon === "C#" ? (
                  <SiCsharp />
                ) : tech.techIcon === "TailWind" ? (
                  <SiTailwindcss />
                ) : tech.techIcon === "FramerMotion" ? (
                  <TbBrandFramerMotion />
                ) : tech.techIcon === "NextJs" ? (
                  <TbBrandNextjs />
                ) : (
                  <DiJsBadge />
                )}
                {tech.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechBox;
