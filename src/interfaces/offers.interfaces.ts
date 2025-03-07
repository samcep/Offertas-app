export interface OffersResponse {
  versions: OfferResponse[];
  id:       string;
  href:     string;
}

export interface OfferResponse {
  characteristics:       Characteristic[];
  productOfferingPrices: ProductOfferingPrice[];
  name:                  string;
  id:                    string;
}

export interface Characteristic {
  versions: CharacteristicVersion[];
  id:       string;
}

export interface CharacteristicVersion {
  validFor:                ValidFor;
  valueType:               ValueType;
  name:                    string;
  id:                      string;
  type:                    Type;
  characteristicValues?:   CharacteristicValue[];
  properties?:             Property[];
  displayValue?:           string;
  value?:                  string;
  valueTypeSpecification?: ValueTypeSpecification;
}

export interface CharacteristicValue {
  displayValue: string;
  isDefault:    boolean;
  validFor:     ValidFor;
  valueType:    ValueType;
  value:        string;
}

export interface ValidFor {
  startDateTime: Date;
}

export enum ValueType {
  Boolean = "Boolean",
  CodeTable = "CodeTable",
  Number = "Number",
  String = "String",
}

export interface Property {
  isSelected: boolean;
  value:      string;
}

export enum Type {
  InfoModelSystemAttribute = "infoModelSystemAttribute",
  InfoModelUserAttribute = "infoModelUserAttribute",
  LifeCycle = "lifeCycle",
  PscmSystemAttribute = "pscmSystemAttribute",
  PscmUserAttribute = "pscmUserAttribute",
}

export interface ValueTypeSpecification {
  id: string;
}

export interface ProductOfferingPrice {
  versions: ProductOfferingPriceVersion[];
  id:       string;
}

export interface ProductOfferingPriceVersion {
  characteristics?: Characteristic[];
  markup:           number;
  price:            Price;
  percentage:       number;
  name:             string;
  id:               string;
  plaId:            string;
  popType:          string;
  frequency:        string;
}

export interface Price {
  amount: number;
  units:  Units;
}

export interface Units {
  code: string;
  name: string;
}

export interface OfferSelectHTML {
  name: string;
  value: string;
}
