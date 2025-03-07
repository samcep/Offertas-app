import type { OfferResponse, OffersResponse } from '@/interfaces/offers.interfaces'

export default class OfferService {
  private static urlData = '/data/ofertas.json'
  private static async getOffers(): Promise<OffersResponse[]> {
    try {
      const response = await fetch(this.urlData)
      if (!response.ok) {
        throw new Error('Failed to load offers')
      }
      return await response.json()
    } catch (error) {
      console.error('Failed fetching offers', error)
      return Promise.reject(error);
    }
  }
  public static async setOffers () : Promise<Map<string,OfferResponse>> {
    const offersAvaliable : OffersResponse[] = await this.getOffers();
    const productsAvaliable = new Map<string , OfferResponse>(
       offersAvaliable.flatMap((offersAvaliable : OffersResponse) => {
        return offersAvaliable.versions.map((productOnSale: OfferResponse) => {
          return [
            productOnSale.id,
            {
              characteristics: productOnSale.characteristics,
              productOfferingPrices: productOnSale.productOfferingPrices,
              name: productOnSale.name,
              id: productOnSale.id
            }

          ]
        })
      })
    );
    return productsAvaliable;
  }
}


