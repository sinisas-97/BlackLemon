export const getProductImages =
	`query ProductImageList($productId: ID!) {
      product(id: $productId) {
        media(first: 10, query: "media_type:IMAGE", sortKey: POSITION) {
          nodes {
            id
            alt
            ... on MediaImage {
              image {
                width
                height
                url
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
          }
        }
      }
    }`