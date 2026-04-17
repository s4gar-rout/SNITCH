import axios from 'axios';

const productApiInstance = axios.create({
  baseURL: '/api/products',
 withCredentials: true,
});

export async function createProducts(formdata) {
const reponse = await productApiInstance.post('/create', formdata);
return reponse.data;
}


export async function getSellerProducts() {
const reponse = await productApiInstance.get('/seller');
return reponse.data;
}

