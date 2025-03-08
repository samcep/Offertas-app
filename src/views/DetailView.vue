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
      }else{
        characteristics.value = []
        productOfferingPrice.value = []
      }
  },
  { immediate: true }
);

</script>
<template>
    <div class="bg-gray-100 p-4 shadow-md rounded-lg">
      <h2 class="text-lg font-bold">Caracteristicas</h2>
      <Characteristics :characteristics="characteristics"></Characteristics>
    </div>
    <div class="bg-gray-100 p-4 shadow-md rounded-lg">
      <h2 class="text-lg font-bold">Precios</h2>
      <Prices :product-offering-prices="productOfferingPrice"></Prices>
    </div>
</template>

