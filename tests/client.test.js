import { describe, it, expect, vitest } from "vitest";
import { getProducts } from "../src/server/client/pim/client";
import fetch from 'node-fetch'

vitest.mock('node-fetch')

describe('"Should make paginated request of products from PIM"', () => {
    it('check number of product returned', async () => {
        const cursor = "123"
        
        const response = Promise.resolve({
            "ok": true,
            json: () => {
                return {
                    "data" : [
                        {"title":"Product 1"},
                        {"title":"Product 2"},
                        {"title":"Product 3"},
                        {"title":"Product 4"},
                        {"title":"Product 5"},
                        {"title":"Product 6"},
                        {"title":"Product 7"},
                        {"title":"Product 8"},
                        {"title":"Product 9"},
                        {"title":"Product 10"}]
                    }
            },
        })

        fetch.mockImplementation(() => response)

        await getProducts(cursor).then(function (data) {
            expect(data).toHaveLength(10)
        }).catch((e) => {
            console.log(e.message)
        });
    });
});