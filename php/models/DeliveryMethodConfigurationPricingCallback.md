[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallback

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `callback` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryMethodConfigurationPricingCallbackCalculated](../models/DeliveryMethodConfigurationPricingCallbackCalculated.md#deliverymethodconfigurationpricingcallbackcalculated) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackcalculated-fields-1). |
| `callback` | Required | [DeliveryMethodConfigurationPricingCallbackCallback](../models/DeliveryMethodConfigurationPricingCallbackCallback.md#deliverymethodconfigurationpricingcallbackcallback) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackcallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingCallbackCallerSupplied](../models/DeliveryMethodConfigurationPricingCallbackCallerSupplied.md#deliverymethodconfigurationpricingcallbackcallersupplied) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackcaller_supplied). |
| `fixed` | Optional | [DeliveryMethodConfigurationPricingCallbackFixed](../models/DeliveryMethodConfigurationPricingCallbackFixed.md#deliverymethodconfigurationpricingcallbackfixed) | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackfixed-fields-1). |
| `rate_table` | Optional | [DeliveryMethodConfigurationPricingCallbackRateTable](../models/DeliveryMethodConfigurationPricingCallbackRateTable.md#deliverymethodconfigurationpricingcallbackratetable) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackrate_table). |
| `tiered` | Optional | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | Values: `"callback"`. |

### DeliveryMethodConfigurationPricingCallback.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1).

### DeliveryMethodConfigurationPricingCallback.calculated fields 1.distance

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1distance).

### DeliveryMethodConfigurationPricingCallback.calculated fields 1.weight

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1weight).

### DeliveryMethodConfigurationPricingCallback.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingCallback.caller_supplied

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingCallback.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfigurationPricingCallback.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table).

### DeliveryMethodConfigurationPricingCallback.rate_table.rates[]

Field definitions: [DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerates).

### DeliveryMethodConfigurationPricingCallback.tiered

Declared alternatives: [DeliveryMethodConfigurationPricingCalculated.tiered](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered).

