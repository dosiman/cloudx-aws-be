import { middyfy } from '@libs/lambda';
import products from 'src/mock-data/products.json';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

const getProductsList = async () => {
  try {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ products }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: error.message || 'Internal error',
      }
    }
  }
}

export const main = middyfy(getProductsList);
