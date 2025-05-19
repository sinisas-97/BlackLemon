import 'dotenv/config'
import express from 'express'
import {  PORT } from '../shared/config.js'
import { syncProducts } from './client/pim/service.js';
const app = express();

// PIM
app.get('/pim/syncProducts', syncProducts);
// app.get('/pim/syncProduct/{id}', syncProduct);

// PIM1
//app.get('/pim1/syncProducts', syncProducts);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
})