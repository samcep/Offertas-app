<script setup lang="ts">
import type { OfferSelectHTML } from '@/interfaces/offers.interfaces.ts'

interface Props {
  offer: OfferSelectHTML
}

const props = defineProps<Props>();

</script>

<template>
  <div class="card w-96 bg-base-100 card-md shadow-sm">
    <div class="card-body">
      <h2 class="card-title">{{props.offer.value}}</h2>
      <p>{{props.offer.name}}</p>
    </div>
  </div>

</template>

