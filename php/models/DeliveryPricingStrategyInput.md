[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyInput

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | [DeliveryCalculatedPricingStrategyInput](../models/DeliveryCalculatedPricingStrategyInput.md#deliverycalculatedpricingstrategyinput) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. |
| `callback` | Conditional | [DeliveryExternalPricingStrategyInput](../models/DeliveryExternalPricingStrategyInput.md#deliveryexternalpricingstrategyinput) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `caller_supplied` | Conditional | [DeliveryExternalPricingStrategyInput](../models/DeliveryExternalPricingStrategyInput.md#deliveryexternalpricingstrategyinput) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. |
| `fixed` | Conditional | [DeliveryFixedPricingStrategyInput](../models/DeliveryFixedPricingStrategyInput.md#deliveryfixedpricingstrategyinput) | A fixed delivery price, by currency. |
| `rate_table` | Conditional | [DeliveryRateTablePricingStrategyInput](../models/DeliveryRateTablePricingStrategyInput.md#deliveryratetablepricingstrategyinput) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. |
| `tiered` | Conditional | [DeliveryTieredPricingStrategyInput](../models/DeliveryTieredPricingStrategyInput.md#deliverytieredpricingstrategyinput) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. |
| `type` | Required | string | Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryPricingStrategyInput variant 1: `type` = `"calculated"`

oneOf with type: "calculated": The `calculated` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategyInput variant 2: `type` = `"callback"`

oneOf with type: "callback": The `callback` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategyInput variant 3: `type` = `"caller_supplied"`

oneOf with type: "caller_supplied": The `caller_supplied` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategyInput variant 4: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategyInput variant 5: `type` = `"rate_table"`

oneOf with type: "rate_table": The `rate_table` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategyInput variant 6: `type` = `"tiered"`

oneOf with type: "tiered": The `tiered` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

