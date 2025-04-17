import React from "react";
import { getFontSizeForHeading, getTextAlign } from "../../../utils/fonts";
import { Level, TextAlign } from "../../../utils/types";

export const Heading = ({textAlign, level = 2, heading}: {heading: string; textAlign: TextAlign; level: Level;}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: heading},
        className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
    })
    return tag;
}