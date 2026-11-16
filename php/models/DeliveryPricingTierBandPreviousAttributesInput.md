[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingTierBandPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options). |
| `from` | Optional | integer or null | Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. `from`: [declared alternatives](../models/DeliveryPricingTierBandPreviousAttributesInput.md#deliverypricingtierbandpreviousattributesinputfrom). |
| `to` | Optional | integer or null | Exclusive upper bound. Required for every band except the final band, where it must be omitted. `to`: [declared alternatives](../models/DeliveryPricingTierBandPreviousAttributesInput.md#deliverypricingtierbandpreviousattributesinputto). |

### DeliveryPricingTierBandPreviousAttributesInput.currency_options

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributesInput.currency_options](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options).

### DeliveryPricingTierBandPreviousAttributesInput.from

### DeliveryPricingTierBandPreviousAttributesInput.from variant 1

anyOf variant 1: Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`..

- Value shape: integer. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Format: `int64`. 

### DeliveryPricingTierBandPreviousAttributesInput.from variant 2

anyOf variant 2.

- Value shape: null. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. 

### DeliveryPricingTierBandPreviousAttributesInput.to

### DeliveryPricingTierBandPreviousAttributesInput.to variant 1

anyOf variant 1: Exclusive upper bound. Required for every band except the final band, where it must be omitted..

- Value shape: integer. Exclusive upper bound. Required for every band except the final band, where it must be omitted. Exclusive upper bound. Required for every band except the final band, where it must be omitted. Format: `int64`. 

### DeliveryPricingTierBandPreviousAttributesInput.to variant 2

anyOf variant 2.

- Value shape: null. Exclusive upper bound. Required for every band except the final band, where it must be omitted. 

