const data = require('../data/products.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'Products';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll() {
    const col = await collection();
    const items = await col.find().toArray();
    return items;
}

function getById(id) {
    return data.products.find(product => product.id === id);
}

function add(item) {
    item.id = data.products.length + 1;
    data.products.push(item);
}

function update(item) {
    const index = data.products.findIndex(p => p.id === item.id);
    data.products[index] = item;
}

function deleteItem(id) {
    const index = data.products.findIndex(p => p.id === id);
    data.products.splice(index, 1);
}

function search(searchTerm) {
    return data.products.filter(product => {
        return  product.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteItem, 
    search
};