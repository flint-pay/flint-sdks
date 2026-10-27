[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingRateTable

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `rate_table` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryMethodConfigurationPricingRateTableCalculated](../models/DeliveryMethodConfigurationPricingRateTableCalculated.md#deliverymethodconfigurationpricingratetablecalculated) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTable.md#deliverymethodconfigurationpricingratetablecalculated-fields-1). |
| `callback` | Optional | [DeliveryMethodConfigurationPricingRateTableCallback](../models/DeliveryMethodConfigurationPricingRateTableCallback.md#deliverymethodconfigurationpricingratetablecallback) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTable.md#deliverymethodconfigurationpricingratetablecallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingRateTableCallerSupplied](../models/DeliveryMethodConfigurationPricingRateTableCallerSupplied.md#deliverymethodconfigurationpricingratetablecallersupplied) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTable.md#deliverymethodconfigurationpricingratetablecaller_supplied). |
| `fixed` | Optional | [DeliveryMethodConfigurationPricingRateTableFixed](../models/DeliveryMethodConfigurationPricingRateTableFixed.md#deliverymethodconfigurationpricingratetablefixed) | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTable.md#deliverymethodconfigurationpricingratetablefixed-fields-1). |
| `rate_table` | Required | [DeliveryMethodConfigurationPricingRateTableRateTable](../models/DeliveryMethodConfigurationPricingRateTableRateTable.md#deliverymethodconfigurationpricingratetableratetable) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingRateTable.md#deliverymethodconfigurationpricingratetablerate_table). |
| `tiered` | Optional | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | Values: `"rate_table"`. |

### DeliveryMethodConfigurationPricingRateTable.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1).

### DeliveryMethodConfigurationPricingRateTable.calculated fields 1.distance

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1distance).

### DeliveryMethodConfigurationPricingRateTable.calculated fields 1.weight

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1weight).

### DeliveryMethodConfigurationPricingRateTable.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingRateTable.caller_supplied

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingRateTable.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfigurationPricingRateTable.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table).

### DeliveryMethodConfigurationPricingRateTable.rate_table.rates[]

Field definitions: [DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerates).

### DeliveryMethodConfigurationPricingRateTable.tiered

Declared alternatives: [DeliveryMethodConfigurationPricingCalculated.tiered](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered).

