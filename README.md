# BlackLemon

This is coding test for Black Lemon company. Task is to synchronize products from PIM to Shopify Store.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`PIM_STORE_SHOPIFY_ACCESS_TOKEN`

`PIM_STORE_SHOPIFY_NAME`

`RECEIVER_STORE_SHOPIFY_ACCESS_TOKEN`

`RECEIVER_STORE_SHOPIFY_NAME`

## Run Locally

Clone the project

```bash
  git clone https://github.com/sinisas-97/BlackLemon.git
```

Go to the project directory

```bash
  cd BlackLemon
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

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

## Trello

Here is link to Trello board

[Trello Board](https://trello.com/b/ir1eukE7/black-lemon)


## Author

- [@sinisas-97](https://www.github.com/sinisas-97)


