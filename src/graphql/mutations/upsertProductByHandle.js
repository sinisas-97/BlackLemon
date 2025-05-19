export const upsertProductByHandle =
  `mutation UpsertProductByHandle($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
    productSet(input: $input, identifier: $identifier) {
      product {
        id
        title
        handle
      }
      userErrors {
        field
        message
      }
    }
  }`