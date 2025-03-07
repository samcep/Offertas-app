<script setup lang="ts">
import { useOfferStore } from '@/stores/offerStore.ts'
import Offer from '@/components/Offer.vue'
import { ref } from 'vue'
import type { OfferSelectHTML } from '@/interfaces/offers.interfaces.ts'
import { useRouter } from 'vue-router'
const offerStore = useOfferStore();
const router = useRouter();
const fetchDetail = () => {
  router.push({ name: 'detail', params: { id: currentOfferSelected.value.value } });
}
const currentOfferSelected = ref<OfferSelectHTML>({
  name: '',
  value: ''
});
</script>

<template>
  <div class="flex flex-row justify-between items-center">
    <select class="select select-sm" v-model="currentOfferSelected" @change="fetchDetail">
      <option
        v-for="offerSelectHTML in offerStore.offersSelectHTML"
        :key="offerSelectHTML.value"
        :value="offerSelectHTML"
      >
        {{offerSelectHTML.name }}
      </option>
    </select>
    <offer :offer="currentOfferSelected"></offer>
  </div>
</template>

