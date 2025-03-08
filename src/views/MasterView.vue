<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useOfferStore } from '@/stores/offerStore'
import type { OfferSelectHTML } from '@/interfaces/offers.interfaces.ts'
import Offers from '@/components/Offers.vue'
import Offer from '@/components/Offer.vue'
import Loading from '@/components/Loading.vue'
const currentOffer = ref<OfferSelectHTML>({
    name: '',
    value: ''
  });
const offerStore = useOfferStore()
onMounted(async () => {
  await offerStore.loadOffers()
})
const renderOffer = (offer : OfferSelectHTML) => {
  currentOffer.value = offer;
}
</script>
<template>
  <Loading v-if="offerStore.isLoading"></Loading>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
    <div class="bg-white p-4 shadow-md rounded-lg w-full">
      <offers @render-offer="renderOffer"></offers>
    </div>
    <div class="p-4 shadow-md rounded-lg w-full">
      <offer :offer="currentOffer"></offer>
    </div>
    <router-view />
  </div>
</template>
