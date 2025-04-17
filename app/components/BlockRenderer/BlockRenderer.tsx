import { Cover } from "../Cover";

export const BlockRenderer = ({blocks}) => {
    // check what kind of block it is
    // note that block is always an array
    return blocks.map(block => {
        switch(block.name) {
            case 'core/cover' :{
                return <Cover key={block.id} background={block.attributes.url}>Cover!</Cover>
            }
            default: 
                return null;
        }
    })
}