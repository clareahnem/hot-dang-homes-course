import { Level, TextAlign } from "./types"

export const getTextAlign = (textAlign: TextAlign = TextAlign.Left): string => {
    const textAlignMap = {
        [TextAlign.Left]: "text-left",
        [TextAlign.Center]: "text-center",
        [TextAlign.Right]: "text-right"
    }
    return `${textAlignMap[textAlign]} || ""`
}

export const getFontSizeForHeading = (level: Level): string => {
    //wp heading level ranges from 1-6, for h1~h6
    const fontSizeMap = {
        1: "text-6xl",
        2: "text-5xl",
        3: "text-4xl",
        4: "text-3xl",
        5: "text-2xl",
        6: "text-xl"
    }
    return `${fontSizeMap[level] || ""}`
}