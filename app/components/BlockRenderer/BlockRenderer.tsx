import { Cover } from "../Cover";
import { Heading } from "../Heading";

export const BlockRenderer = ({blocks}) => {
    // check what kind of block it is
    // note that block is always an array
    return blocks.map(block => {
        switch(block.name) {
            case 'core/cover' :{
                return (
                    <Cover key={block.id} background={block.attributes.url}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
                )
            }
            case 'core/heading': {
                return <Heading key={block.id} heading={block.attributes.content} textAlign={block.attributes.textAlign} level={block.attributes.level}/>
            }
            default: 
                return null;
        }
    })
}