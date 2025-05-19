//date = 2025-05-18
export const productsUpdatedAfterDateQuery =
	` query($date:String) {
    products(first: 10, query: "updated_at:>$date") {
      edges {
        node {
          collections(first: 5) {
                edges {
                  node {
                    handle
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
    }
}`