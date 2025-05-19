import { getProductsWithPagination } from "../../../graphql/queries/getProductsWithPagination.js";
import { API_ENDPOINT } from "../../../shared/config.js";
import fetch from 'node-fetch'

const { PIM_STORE_SHOPIFY_NAME, PIM_STORE_SHOPIFY_ACCESS_TOKEN } = process.env;


export async function getProducts(cursor) {
    return await fetch(`https://${PIM_STORE_SHOPIFY_NAME}${API_ENDPOINT}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Access-Token': PIM_STORE_SHOPIFY_ACCESS_TOKEN,
            },
            body: JSON.stringify({
              query: getProductsWithPagination,
              variables: { "cursor": cursor }
            }),
          });
}