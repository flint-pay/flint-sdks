[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyRequest

The pricing strategy you supply when updating a delivery method. Set `type` and the matching property.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated). |
| `callback` | Conditional | [DeliveryCallbackPricingStrategyRequest](../models/DeliveryCallbackPricingStrategyRequest.md#deliverycallbackpricingstrategyrequest) | Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Conditional | [DeliveryCallerSuppliedPricingStrategyRequest](../models/DeliveryCallerSuppliedPricingStrategyRequest.md#deliverycallersuppliedpricingstrategyrequest) | Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Conditional | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Conditional | [DeliveryRateTablePricingStrategyRequest](../models/DeliveryRateTablePricingStrategyRequest.md#deliveryratetablepricingstrategyrequest) | Rate table pricing strategy you supply when updating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Conditional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. `tiered`: [declared alternatives](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered). |
| `type` | Required | string | Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryPricingStrategyRequest variant 1: `type` = `"calculated"`

oneOf variant 1: The `calculated` variant of `DeliveryPricingStrategyInput`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategyRequest variant 2: `type` = `"callback"`

oneOf variant 2: The `callback` variant of `DeliveryPricingStrategyInput`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategyRequest variant 3: `type` = `"caller_supplied"`

oneOf variant 3: The `caller_supplied` variant of `DeliveryPricingStrategyInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategyRequest variant 4: `type` = `"fixed"`

oneOf variant 4: The `fixed` variant of `DeliveryPricingStrategyInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategyRequest variant 5: `type` = `"rate_table"`

oneOf variant 5: The `rate_table` variant of `DeliveryPricingStrategyInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategyRequest variant 6: `type` = `"tiered"`

oneOf variant 6: The `tiered` variant of `DeliveryPricingStrategyInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

### DeliveryPricingStrategyRequest.calculated

Field definitions: [DeliveryPricingStrategyCreateInputCalculated.calculated](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated).

### DeliveryPricingStrategyRequest.tiered

Declared alternatives: [DeliveryPricingStrategyCreateInputCalculated.tiered](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered).

