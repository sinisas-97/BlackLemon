//date = "2025-05-18"
export const productsCreatedAfterDateQuery =
` query($date:String) {
    products(first: 10, query: "created_at:>$date") {
      edges {
        node {
          id
          createdAt
        }
      }
    }
}`