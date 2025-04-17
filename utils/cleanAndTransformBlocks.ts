import { v4 as uuid } from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    // set id for each of our blocks and any inner blocks
    // [note] because our apollo client sets an inMemoryCache for all of our returned graphql data, we cannot directly modiy it (it is immutable)
    // we need to first convert our blocks as a stringified json, and then parse this back as a json object
    const blocks = JSON.parse(JSON.stringify(blocksJSON))

    // recursive function
    const assignIds = (blocks: any[]) => {
        blocks.forEach(block => {
            block.id = uuid();
            //check if blocks has any ids
            if(block.innerBlocks?.length) {
                assignIds(block.innerBlocks)
            }
        })
    } 

    assignIds(blocks);
    return blocks;
}