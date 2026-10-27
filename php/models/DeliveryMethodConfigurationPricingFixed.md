[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingFixed

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `fixed` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryMethodConfigurationPricingFixedCalculated](../models/DeliveryMethodConfigurationPricingFixedCalculated.md#deliverymethodconfigurationpricingfixedcalculated) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingFixed.md#deliverymethodconfigurationpricingfixedcalculated-fields-1). |
| `callback` | Optional | [DeliveryMethodConfigurationPricingFixedCallback](../models/DeliveryMethodConfigurationPricingFixedCallback.md#deliverymethodconfigurationpricingfixedcallback) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingFixed.md#deliverymethodconfigurationpricingfixedcallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingFixedCallerSupplied](../models/DeliveryMethodConfigurationPricingFixedCallerSupplied.md#deliverymethodconfigurationpricingfixedcallersupplied) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingFixed.md#deliverymethodconfigurationpricingfixedcaller_supplied). |
| `fixed` | Required | [DeliveryMethodConfigurationPricingFixedFixed](../models/DeliveryMethodConfigurationPricingFixedFixed.md#deliverymethodconfigurationpricingfixedfixed) | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingFixed.md#deliverymethodconfigurationpricingfixedfixed-fields-1). |
| `rate_table` | Optional | [DeliveryMethodConfigurationPricingFixedRateTable](../models/DeliveryMethodConfigurationPricingFixedRateTable.md#deliverymethodconfigurationpricingfixedratetable) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingFixed.md#deliverymethodconfigurationpricingfixedrate_table). |
| `tiered` | Optional | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | Values: `"fixed"`. |

### DeliveryMethodConfigurationPricingFixed.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1).

### DeliveryMethodConfigurationPricingFixed.calculated fields 1.distance

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1distance).

### DeliveryMethodConfigurationPricingFixed.calculated fields 1.weight

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1weight).

### DeliveryMethodConfigurationPricingFixed.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingFixed.caller_supplied

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingFixed.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfigurationPricingFixed.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table).

### DeliveryMethodConfigurationPricingFixed.rate_table.rates[]

Field definitions: [DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerates).

### DeliveryMethodConfigurationPricingFixed.tiered

Declared alternatives: [DeliveryMethodConfigurationPricingCalculated.tiered](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered).

