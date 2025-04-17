import { gql } from "@apollo/client";
import client from "../client"

export default async function Home() {
    const props = await getProps()
    console.log('props: ', props)
    return <div>Next JS &amp; WordPress course.</div>;
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
            blocks: data.nodeByUri.blocks,
            myexampleProp: "test"
        }
    }
}