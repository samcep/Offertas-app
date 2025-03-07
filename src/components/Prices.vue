<script setup lang="ts">
import type {  ProductOfferingPrice } from '@/interfaces/offers.interfaces.ts'

interface Props {
  productOfferingPrices: ProductOfferingPrice[]
}
defineProps<Props>();
</script>

<template>
  <div class="overflow-x-auto overflow-y-auto">
    <table class="table">
      <thead>
        <th>Nombre</th>
        <th>Monto</th>
      </thead>
      <tbody>
      <tr v-for="productOfferingPrice in productOfferingPrices"  :key="productOfferingPrice.id!">
        <template v-for="productOfferPrice in  productOfferingPrice.versions" :key="productOfferPrice.id">
          <td>{{productOfferPrice.name}}</td>
          <td>{{productOfferPrice.price.amount}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
