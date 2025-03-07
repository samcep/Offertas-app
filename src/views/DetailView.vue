<script setup lang="ts">
import { ref, watch } from 'vue'
import { useOfferStore } from '@/stores/offerStore.ts'
import Characteristics from '@/components/Characteristics.vue'
import type {
  Characteristic,
  OfferResponse,
  ProductOfferingPrice
} from '@/interfaces/offers.interfaces.ts'
import Prices from '@/components/Prices.vue'
const offerStore = useOfferStore()
interface Props {
  id: string
}
const characteristics = ref<Characteristic[]>([]);
const productOfferingPrice = ref<ProductOfferingPrice[]>([]);
const props = defineProps<Props>();

watch(
  () => props.id,
  () => {
      if(offerStore.offersIndex.has(props.id))  {
        const detailInformation  : OfferResponse = offerStore.offersIndex.get(props.id)!;
        characteristics.value = detailInformation.characteristics;
        productOfferingPrice.value  = detailInformation.productOfferingPrices
      }
  },
);

</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="bg-white p-4 shadow-md rounded-lg">
      <h2 class="text-lg font-bold">Caracteristicas</h2>
      <Characteristics :characteristics="characteristics"></Characteristics>
    </div>
    <div class="bg-gray-100 p-4 shadow-md rounded-lg">
      <h2 class="text-lg font-bold">Precios</h2>
      <Prices :product-offering-prices="productOfferingPrice"></Prices>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
