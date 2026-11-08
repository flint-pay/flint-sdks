[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculated

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `calculated` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Required | [DeliveryMethodConfigurationPricingCalculatedCalculated](../models/DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1). |
| `callback` | Optional | [DeliveryMethodConfigurationPricingCalculatedCallback](../models/DeliveryMethodConfigurationPricingCalculatedCallback.md#deliverymethodconfigurationpricingcalculatedcallback) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingCalculatedCallerSupplied](../models/DeliveryMethodConfigurationPricingCalculatedCallerSupplied.md#deliverymethodconfigurationpricingcalculatedcallersupplied) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcaller_supplied). |
| `fixed` | Optional | [DeliveryMethodConfigurationPricingCalculatedFixed](../models/DeliveryMethodConfigurationPricingCalculatedFixed.md#deliverymethodconfigurationpricingcalculatedfixed) | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedfixed-fields-1). |
| `rate_table` | Optional | [DeliveryMethodConfigurationPricingCalculatedRateTable](../models/DeliveryMethodConfigurationPricingCalculatedRateTable.md#deliverymethodconfigurationpricingcalculatedratetable) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table). |
| `tiered` | Optional | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | Values: `"calculated"`. |

### DeliveryMethodConfigurationPricingCalculated.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculated).

### DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.calculated.distance](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculateddistance).

### DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.calculated.weight](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculatedweight).

### DeliveryMethodConfigurationPricingCalculated.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcallback).

### DeliveryMethodConfigurationPricingCalculated.caller_supplied

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcallback).

### DeliveryMethodConfigurationPricingCalculated.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfigurationPricingCalculated.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_table).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_tablerates).

### DeliveryMethodConfigurationPricingCalculated.tiered

Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingtiered).

### DeliveryMethodConfigurationPricingCalculated.tiered variant 1: `basis` = `"choice_group.total_weight"`

oneOf with basis: "choice_group.total_weight": The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryMethodConfigurationPricingCalculated.tiered variant 2

oneOf with basis: "choice_group.fulfillment_quantity" | "choice_group.merchandise_subtotal_after_line_item_discounts" | "choice_group.merchandise_subtotal_before_discounts" | "order.merchandise_subtotal_after_line_item_discounts" | "order.merchandise_subtotal_before_discounts": The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

### DeliveryMethodConfigurationPricingCalculated.tiered.bands[]

Field definitions: [DeliveryMethodResponse.data.configuration.pricing.tiered.bands[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingtieredbands).

