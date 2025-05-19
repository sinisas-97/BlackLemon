# BlackLemon

This is coding test for Black Lemon company. Task is to synchronize products from PIM to Shopify Store.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`PIM_STORE_SHOPIFY_ACCESS_TOKEN`

`PIM_STORE_SHOPIFY_NAME`

`RECEIVER_STORE_SHOPIFY_ACCESS_TOKEN`

`RECEIVER_STORE_SHOPIFY_NAME`

## API Reference

#### Synchronize all products

```http
  GET /pim/syncProducts
```


## Running Tests

To run tests, run the following command

```bash
  npm test
```


## Author

- [@sinisas-97](https://www.github.com/sinisas-97)


