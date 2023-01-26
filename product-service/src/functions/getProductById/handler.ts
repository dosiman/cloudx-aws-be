import { middyfy } from '@libs/lambda';
import products from 'src/mock-data/products';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

const getProductById = async (event) => {
  try {
    const { productId } = event.pathParameters;
    const product = products.find(item => item.id === productId);

    if (product) {
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ product }),
      }
    } else {
      return {
        statusCode: 404,
        headers: corsHeaders,
        body: {
          message: 'Product not found',
        }
      }
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

export const main = middyfy(getProductById);
