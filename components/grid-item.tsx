import React from "react";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
    "hover:bg-neutral-50 hover:dark:bg-neutral-800 shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
    {
        variants: {
            size: {
                "1x2": "col-span-1 row-span-2 p-8",
                "2x1": "col-span-2 row-span-1 px-8 py-4",
                "2x2": "col-span-2 row-span-2 p-8",
                "2x4": "col-span-2 row-span-4 relative overflow-hidden",
            },
            defaultVariantas: {
                size: "1x2",
            }
        }
    }
);

type GridItemProps = {children: React.ReactNode } & VariantProps<typeof variants>;

function GridItem({ size, children }: GridItemProps) {
  return (
    <motion.div
        initial={{
            opacity: 0,
            y: 60,
            scale: 0.8,
        }}
        className={
            cn(variants({size}))
        }
    >
        {children}
    </motion.div>
  )
}

export default GridItem