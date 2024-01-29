import React from "react";
import { ThemeToggle } from "./theme-toggle";

function Footer () {
    return (
        <div className="flex items-center w-full justify-between text-xs border-t pt-5 border-neutral-200 dark:border-neutral-800">
            <div className="text-neutral-500">
                Built by @GuiHeinrichs | @2024 GuiHeinrichs. All Rights Reserved
            </div>
            <ThemeToggle/>
        </div>
    )
}

export default Footer;