import axios from 'axios';

const productsAPI = axios.create({baseURL: 'http://localhost:5000/produtos'});

async function listProducts(nameProduct) {
    try {
        const response = await productsAPI.post('/', {descricao: nameProduct});
        return response.data;
    } catch (err) {
        return `Erro: ${err}`
    }
}

export {
    listProducts,
}