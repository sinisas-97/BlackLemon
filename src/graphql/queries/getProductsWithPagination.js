export const getProductsWithPagination =
	` query($cursor:String) { 
        products(first: 10, after: $cursor) { 
            edges { 
                node {
                  category {
                    id
                  }
                  collections(first: 5) {
                      edges {
                        node {
                          handle
                          id
                        }
                      }
                  }
                  description
                  descriptionHtml
                  handle
                  id
                  productType
                  seo {
                      title
                      description
                  }
                  status
                  tags
                  title
                  totalInventory
                  updatedAt
                  variants(first: 5) {
                    edges {
                      node {
                          barcode
                          displayName
                          image {
                              width
                              height
                              url
                          }
							            inventoryQuantity
							            price
							            sku
							            title
                        }
                      }
                    }
                  variantsCount {
                    count
                  }
                } 
            }
            pageInfo {
                hasNextPage
                endCursor
            } 
        } 
    }`