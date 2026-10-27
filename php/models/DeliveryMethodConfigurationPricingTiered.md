[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingTiered

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `tiered` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryMethodConfigurationPricingTieredCalculated](../models/DeliveryMethodConfigurationPricingTieredCalculated.md#deliverymethodconfigurationpricingtieredcalculated) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingTiered.md#deliverymethodconfigurationpricingtieredcalculated-fields-1). |
| `callback` | Optional | [DeliveryMethodConfigurationPricingTieredCallback](../models/DeliveryMethodConfigurationPricingTieredCallback.md#deliverymethodconfigurationpricingtieredcallback) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingTiered.md#deliverymethodconfigurationpricingtieredcallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingTieredCallerSupplied](../models/DeliveryMethodConfigurationPricingTieredCallerSupplied.md#deliverymethodconfigurationpricingtieredcallersupplied) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingTiered.md#deliverymethodconfigurationpricingtieredcaller_supplied). |
| `fixed` | Optional | [DeliveryMethodConfigurationPricingTieredFixed](../models/DeliveryMethodConfigurationPricingTieredFixed.md#deliverymethodconfigurationpricingtieredfixed) | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingTiered.md#deliverymethodconfigurationpricingtieredfixed-fields-1). |
| `rate_table` | Optional | [DeliveryMethodConfigurationPricingTieredRateTable](../models/DeliveryMethodConfigurationPricingTieredRateTable.md#deliverymethodconfigurationpricingtieredratetable) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingTiered.md#deliverymethodconfigurationpricingtieredrate_table). |
| `tiered` | Required | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | Values: `"tiered"`. |

### DeliveryMethodConfigurationPricingTiered.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1).

### DeliveryMethodConfigurationPricingTiered.calculated fields 1.distance

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1distance).

### DeliveryMethodConfigurationPricingTiered.calculated fields 1.weight

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1weight).

### DeliveryMethodConfigurationPricingTiered.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingTiered.caller_supplied

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingTiered.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfigurationPricingTiered.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table).

### DeliveryMethodConfigurationPricingTiered.rate_table.rates[]

Field definitions: [DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerates).

### DeliveryMethodConfigurationPricingTiered.tiered

Declared alternatives: [DeliveryMethodConfigurationPricingCalculated.tiered](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered).

