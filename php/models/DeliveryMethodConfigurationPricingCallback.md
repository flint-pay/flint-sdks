[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallback

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `callback` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryMethodConfigurationPricingCallbackCalculated](../models/DeliveryMethodConfigurationPricingCallbackCalculated.md#deliverymethodconfigurationpricingcallbackcalculated) | Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackcalculated-fields-1). |
| `callback` | Required | [DeliveryMethodConfigurationPricingCallbackCallback](../models/DeliveryMethodConfigurationPricingCallbackCallback.md#deliverymethodconfigurationpricingcallbackcallback) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackcallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingCallbackCallerSupplied](../models/DeliveryMethodConfigurationPricingCallbackCallerSupplied.md#deliverymethodconfigurationpricingcallbackcallersupplied) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackcaller_supplied). |
| `fixed` | Optional | [DeliveryMethodConfigurationPricingCallbackFixed](../models/DeliveryMethodConfigurationPricingCallbackFixed.md#deliverymethodconfigurationpricingcallbackfixed) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackfixed-fields-1). |
| `rate_table` | Optional | [DeliveryMethodConfigurationPricingCallbackRateTable](../models/DeliveryMethodConfigurationPricingCallbackRateTable.md#deliverymethodconfigurationpricingcallbackratetable) | Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingCallback.md#deliverymethodconfigurationpricingcallbackrate_table). |
| `tiered` | Optional | object and Alternative shapes (see declared variants) | Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"callback"`. |

### DeliveryMethodConfigurationPricingCallback.calculated fields 1

Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculated).

### DeliveryMethodConfigurationPricingCallback.calculated fields 1.distance

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.calculated.distance](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculateddistance).

### DeliveryMethodConfigurationPricingCallback.calculated fields 1.weight

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.calculated.weight](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculatedweight).

### DeliveryMethodConfigurationPricingCallback.callback fields 1

Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcallback).

### DeliveryMethodConfigurationPricingCallback.caller_supplied

Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcallback).

### DeliveryMethodConfigurationPricingCallback.fixed fields 1

Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |

### DeliveryMethodConfigurationPricingCallback.rate_table

Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_table).

### DeliveryMethodConfigurationPricingCallback.rate_table.rates[]

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_tablerates).

### DeliveryMethodConfigurationPricingCallback.tiered

Declared alternatives: [DeliveryMethodConfigurationPricingCalculated.tiered](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered).

