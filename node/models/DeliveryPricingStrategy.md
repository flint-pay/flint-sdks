[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategy

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategy.md#deliverypricingstrategycalculated-fields-1). |
| `callback` | Conditional | [DeliveryExternalPricingStrategy](../models/DeliveryExternalPricingStrategy.md#deliveryexternalpricingstrategy) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `caller_supplied` | Conditional | [DeliveryExternalPricingStrategy](../models/DeliveryExternalPricingStrategy.md#deliveryexternalpricingstrategy) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `fixed` | Conditional | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | A fixed delivery price, by currency. |
| `rate_table` | Conditional | [DeliveryRateTablePricingStrategy](../models/DeliveryRateTablePricingStrategy.md#deliveryratetablepricingstrategy) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. |
| `tiered` | Conditional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1). |
| `type` | Required | string | Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryPricingStrategy variant 1: `type` = `"calculated"`

oneOf variant 1: The `calculated` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategy variant 2: `type` = `"callback"`

oneOf variant 2: The `callback` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategy variant 3: `type` = `"caller_supplied"`

oneOf variant 3: The `caller_supplied` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategy variant 4: `type` = `"fixed"`

oneOf variant 4: The `fixed` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategy variant 5: `type` = `"rate_table"`

oneOf variant 5: The `rate_table` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategy variant 6: `type` = `"tiered"`

oneOf variant 6: The `tiered` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

### DeliveryPricingStrategy.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. `base_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `distance` | Optional | [DeliveryDistanceUnitPrice](../models/DeliveryDistanceUnitPrice.md#deliverydistanceunitprice) | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-1distance). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. `per_item_handling_fee_currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `weight` | Optional | [DeliveryWeightUnitPrice](../models/DeliveryWeightUnitPrice.md#deliveryweightunitprice) | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-1weight). |

### DeliveryPricingStrategy.calculated fields 1.base_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPricingStrategy.calculated fields 1.distance

Field definitions: [DeliveryCalculatedPricingStrategy variant 1.distance](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-1distance).

### DeliveryPricingStrategy.calculated fields 1.maximum_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPricingStrategy.calculated fields 1.minimum_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPricingStrategy.calculated fields 1.per_item_handling_fee_currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPricingStrategy.calculated fields 1.weight

Field definitions: [DeliveryCalculatedPricingStrategy variant 1.weight](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-1weight).

### DeliveryPricingStrategy.tiered fields 1

Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBand](../models/DeliveryPricingTierBand.md#deliverypricingtierband) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [7 declared values](#deliverypricingstrategytiered-fields-1-basis-values). |
| `unit` | Conditional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

#### DeliveryPricingStrategy.tiered fields 1 basis values

- `"choice_group.total_weight"`
- `"choice_group.fulfillment_quantity"`
- `"choice_group.merchandise_subtotal_before_discounts"`
- `"choice_group.merchandise_subtotal_after_line_item_discounts"`
- `"order.merchandise_subtotal_before_discounts"`
- `"order.merchandise_subtotal_after_line_item_discounts"`
- `"caller.tier_key"`

### DeliveryPricingStrategy.tiered fields 1 variant 1: `basis` = `"choice_group.total_weight"`

oneOf variant 1: The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryPricingStrategy.tiered fields 1 variant 2

oneOf variant 2: The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

