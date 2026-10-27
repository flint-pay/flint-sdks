[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCreateRequestInput

The pricing strategy you supply when creating a delivery method. Set `type` and the matching property.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | [DeliveryCalculatedPricingStrategyRequestInput](../models/DeliveryCalculatedPricingStrategyRequestInput.md#deliverycalculatedpricingstrategyrequestinput) | Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. |
| `callback` | Conditional | [DeliveryCallbackPricingStrategyRequestInput](../models/DeliveryCallbackPricingStrategyRequestInput.md#deliverycallbackpricingstrategyrequestinput) | Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Conditional | [DeliveryCallerSuppliedPricingStrategyRequestInput](../models/DeliveryCallerSuppliedPricingStrategyRequestInput.md#deliverycallersuppliedpricingstrategyrequestinput) | Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Conditional | [DeliveryFixedPricingStrategyRequestInput](../models/DeliveryFixedPricingStrategyRequestInput.md#deliveryfixedpricingstrategyrequestinput) | A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Conditional | [DeliveryRateTablePricingStrategyCreateRequestInput](../models/DeliveryRateTablePricingStrategyCreateRequestInput.md#deliveryratetablepricingstrategycreaterequestinput) | Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Conditional | [DeliveryTieredPricingStrategyRequestInput](../models/DeliveryTieredPricingStrategyRequestInput.md#deliverytieredpricingstrategyrequestinput) | Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. |
| `type` | Required | string | Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryPricingStrategyCreateRequestInput variant 1: `type` = `"calculated"`

oneOf variant 1: The `calculated` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategyCreateRequestInput variant 2: `type` = `"callback"`

oneOf variant 2: The `callback` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategyCreateRequestInput variant 3: `type` = `"caller_supplied"`

oneOf variant 3: The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategyCreateRequestInput variant 4: `type` = `"fixed"`

oneOf variant 4: The `fixed` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategyCreateRequestInput variant 5: `type` = `"rate_table"`

oneOf variant 5: The `rate_table` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategyCreateRequestInput variant 6: `type` = `"tiered"`

oneOf variant 6: The `tiered` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

