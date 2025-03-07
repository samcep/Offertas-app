<script setup lang="ts">
import { onMounted } from 'vue'
import { useOfferStore } from '@/stores/offerStore'
import Offers from '@/components/Offers.vue'

onMounted(async () => {
  const offerStore = useOfferStore()
  await offerStore.loadOffers()
  console.log(offerStore.offersSelectHTML)
})
</script>

<template>
    <div class="grid grid-cols-1 gap-5">
      <div class="bg-white p-4 shadow-md rounded-lg w-full">
       <offers></offers>
        <router-view />
      </div>
    </div>
</template>
