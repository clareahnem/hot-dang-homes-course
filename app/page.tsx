import { gql } from "@apollo/client";
import client from "../client"
import { BlockRenderer } from "./components/BlockRenderer";
import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks";

export default async function Home() {
    const {props} = await getProps()
    console.log('props: ', props)
    return (
        <>
        <BlockRenderer blocks={props.blocks}/>
        </>
    )
}

// doing an equivalent of getStaticProps in page directory
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops
// [NOTE] this function is running on the server side!
async function getProps() {
    // query wp data using apollo client
    const { data } = await client.query({
        query: gql`
        query NewQuery {
            nodeByUri(uri: "/") {
              ... on Page {
                id
                blocks(postTemplate: false)
              }
            }
          }
        `
    })
    return{
        props: {
            blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
        }
    }
}