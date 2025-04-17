import { gql } from "@apollo/client";
import client from "../../client";

export default async function Page ({ params }: { params: Promise<{slug: string[]}>}) {
    const { slug } = await params
    console.log('slug is', slug);
    return <>page</>
}

//nextjs method to get paramaters based on path user is visiting
export const generateStaticParams = async () => {
    //fetch for all of the existing pages in wp and return the "slugs" i.e. path params (e.g. /buying/all-properties => slug: ["buying", "all-properties"])
    const { data } = await client.query({
        query: gql`
        query AllPagesQuery {
            pages {
              nodes {
                uri
              }
            }
          }
        `
    });

    // we name our params key to be "slug" because in our folder we used [...slug].
    // if this was [...blah] then we need the key here to be "blah"
    return data.pages.nodes.filter(page => page.uri !== "/").map((page) => ({
        params: {
            // we cannot parse / to slug. so we need to make sure we remove any trailing slashes and any other / in between when it's a nested path.
            slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        }
    }))
}