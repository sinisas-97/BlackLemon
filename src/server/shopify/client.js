import { upsertProductByHandle } from "../../graphql/mutations/upsertProductByHandle.js";
import { getProductByHandle } from "../../graphql/queries/getProductByHandle.js";
import { API_ENDPOINT } from "../../shared/config.js";
import fetch from 'node-fetch'

export async function upsertProduct(element, shopifyName, shopifyAccessToken) {
    return await fetch(`https://${shopifyName}${API_ENDPOINT}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': shopifyAccessToken,
        },
        body: JSON.stringify({
            query: upsertProductByHandle,
            variables: {
                //TODO: move this to mapper.js
                "input": {
                    "category": element.node.category?.id,
                    "collections": element.node.collections.edges.map(entry => entry.node.id),
                    "descriptionHtml": element.node.descriptionHtml,
                    "handle": element.node.handle,
                    "productType": element.node.productType,
                    "seo": {
                        "description": element.node.seo.description,
                        "title": element.node.seo.title
                    },
                    "status": element.node.status,
                    "tags": element.node.tags,
                    "title": element.node.title
                },
                "identifier": {
                    "handle": element.node.handle
                }
            }
        }),
    })
}

export async function getProduct(element, shopifyName, shopifyAccessToken) {
    return await fetch(`https://${shopifyName}${API_ENDPOINT}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': shopifyAccessToken,
        },
        body: JSON.stringify({
            query: getProductByHandle,
            variables: { "handle": element.node.handle }
        }),
    })
        .then(response => response.json())
        .then(product => {
            if (product.data.productByHandle == null) {
                console.log(`${element.node.handle} does not exists in destination store`)
            } else {
                console.log(`${product.data.productByHandle.id} is product id in destination store`)
            }
        })
        .catch(error => console.error('Error fetching products:', error));
}

export async function getProductsCount(shopifyName, shopifyAccessToken) {
    return fetch(`https://${shopifyName}${API_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": `${shopifyAccessToken}`
        },
        body: JSON.stringify({
            query: `{
                productsCount(query: "id:>=1000") {
                    count
                }
            }`
        })
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("Response data", data);
        })
        .catch((err) => {
            console.log("Unable to fetch:", err)
        })
}