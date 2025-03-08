import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  OfferResponse,
  OfferSelectHTML,
} from '@/interfaces/offers.interfaces'
import OfferService from '@/services/offerService'

export const useOfferStore = defineStore('offer', () => {
  const offersIndex = ref<Map<string, OfferResponse>>(new Map());
  const isLoading = ref<boolean>(false);
  const offersSelectHTML = ref<OfferSelectHTML[]>([]);
  const loadOffers = async () => {
    isLoading.value = true
    offersIndex.value = await OfferService.setOffers()
    setOffersAsSelectHTML();
    isLoading.value = false
  }

  const setOffersAsSelectHTML = () => {
    offersSelectHTML.value = [];
    for (const [key, value] of offersIndex.value.entries()) {
      const offerSelectHTML: OfferSelectHTML = { value: key , name: value.name };
      offersSelectHTML.value.push(offerSelectHTML);
    }
  };

  return {  loadOffers  , offersIndex ,  offersSelectHTML , isLoading}
})
