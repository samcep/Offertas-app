<script setup lang="ts">
import type { OfferSelectHTML } from '@/interfaces/offers.interfaces.ts'
interface Props {
  offer: OfferSelectHTML
}
const props = defineProps<Props>();
</script>
<template>
  <div v-if="props.offer && props.offer.value" class="card w-96 card-md">
    <div class="card-body">
      <h2 class="card-title">{{props.offer.value}}</h2>
      <p>{{props.offer.name}}</p>
    </div>
  </div>
  <h2 v-else>No hay oferta seleccionada</h2>

</template>

