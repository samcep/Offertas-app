<script setup lang="ts">
import type { Characteristic } from '@/interfaces/offers.interfaces.ts'

interface Props {
  characteristics: Characteristic[]
}
defineProps<Props>();
</script>

<template>
    <table class="table overflow-x-auto overflow-y">
      <tbody>
        <tr v-for="characteristic in characteristics"  :key="characteristic.id!">
            <template v-for="characteristicVersion in  characteristic.versions" :key="characteristicVersion.id">
                {{characteristicVersion.name}}
            </template>
        </tr>
      </tbody>
    </table>
</template>

<style scoped></style>
