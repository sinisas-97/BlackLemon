import { upsertProduct } from "../../shopify/client.js";
import { getProducts } from "./client.js";

const { RECEIVER_STORE_SHOPIFY_NAME, RECEIVER_STORE_SHOPIFY_ACCESS_TOKEN } = process.env;

export async function syncProducts(req, res) {
    var hasNextPage = true;
    var cursor = null;
    var number = 0;
    try {
        while (hasNextPage == true) {
            await getProducts(cursor)
                .then(response => response.json())
                .then(data => {
                    for (const element of data.data.products.edges) {
                        number++;
                        upsertProduct(element, RECEIVER_STORE_SHOPIFY_NAME, RECEIVER_STORE_SHOPIFY_ACCESS_TOKEN)
                            .then(response => response.json())
                            //TODO: Create/Update Product Variants
                            //TODO: Create/Update Product Media
                            .catch(error => console.error('Error fetching products:', error));
                    }
                    hasNextPage = data.data.products.pageInfo.hasNextPage;
                    cursor = data.data.products.pageInfo.endCursor;
                })
                .catch(error => console.error('Error fetching products:', error));
        }
        res.json(`Number of created/updated products is: ${number}`);
    } catch (error) {
        console.error('Shopify graphql error ', error);
        res.status(500).json({ error: 'Shopify graphql error!' })
    }
}