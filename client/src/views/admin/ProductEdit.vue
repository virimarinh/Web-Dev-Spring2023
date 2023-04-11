<script setup lang="ts">

import type { Product } from '@/model/products';
import { ref } from 'vue'; 
import { useRoute } from 'vue-router';
import { getProduct} from '@/model/products';

    const product = ref<Product>({}as Product);
    const route = useRoute();

    getProduct(+route.params.id).then((data) => {
        product.value = data.data;
    })

    function save(){}
</script>

<template>
    <form class="admin-product-edit" @submit.prevent="save()">
        <h1 class="title" v-if="product.id">Edit Product</h1>
        <h1 class="title" v-else>Add New Product</h1>
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input type="text" class="input" placeholder="Title" v-model="product.title">
            </div>
        </div>
        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea class="textarea" placeholder="Description" v-model="product.description"></textarea>
            </div>
        </div>
        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input type="number" class="input" placeholder="Price" v-model="product.price">
            </div>
        </div>
        <div class="field">
            <label class="label">Category</label>
            <div class="control">
                <input type="text" class="input" placeholder="Title" v-model="product.category">
            </div>
        </div>
        <div class="field">
            <label class="label">Brand</label>
            <div class="control">
                <input type="text" class="input" placeholder="Brand" v-model="product.brand">
            </div>
        </div>
        <div class="field">
            <label class="label">Stock</label>
            <div class="control">
                <input type="number" class="input" placeholder="Stock" v-model="product.stock">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-linked is-light">
                    Submit
                </button>
            </div>
            <div class="control">
                <button class="button is-linked is-light">
                    Cancel
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>