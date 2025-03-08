<script setup lang="ts">
import { useOfferStore } from '@/stores/offerStore.ts'
import { ref } from 'vue'
import type { OfferSelectHTML } from '@/interfaces/offers.interfaces.ts'
import { useRouter } from 'vue-router'
const offerStore = useOfferStore();
const router = useRouter();

const emit = defineEmits<{
  (e: 'renderOffer', currentOffer: OfferSelectHTML): void
}>()
const fetchDetail = () => {
  emit('renderOffer' , currentOfferSelected.value);
  router.push({ name: 'detail', params: { id: currentOfferSelected.value.value } });
}
const currentOfferSelected = ref<OfferSelectHTML>({
  name: '',
  value: ''
});
</script>

<template>
  <div class="flex flex-row justify-between items-center mb-5">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Ofertas</legend>
      <select class="select select-sm" v-model="currentOfferSelected" @change="fetchDetail">
        <option
          v-for="offerSelectHTML in offerStore.offersSelectHTML"
          :key="offerSelectHTML.value"
          :value="offerSelectHTML"
        >
          {{offerSelectHTML.name }}
        </option>
      </select>
    </fieldset>
  </div>
</template>

