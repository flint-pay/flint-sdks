[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCreateRequest

The pricing strategy you supply when creating a delivery method. Set `type` and the matching property.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated). |
| `callback` | Conditional | [DeliveryCallbackPricingStrategyRequest](../models/DeliveryCallbackPricingStrategyRequest.md#deliverycallbackpricingstrategyrequest) | Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Conditional | [DeliveryCallerSuppliedPricingStrategyRequest](../models/DeliveryCallerSuppliedPricingStrategyRequest.md#deliverycallersuppliedpricingstrategyrequest) | Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Conditional | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Conditional | [DeliveryRateTablePricingStrategyCreateRequest](../models/DeliveryRateTablePricingStrategyCreateRequest.md#deliveryratetablepricingstrategycreaterequest) | Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Conditional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. `tiered`: [declared alternatives](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered). |
| `type` | Required | string | Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryPricingStrategyCreateRequest variant 1: `type` = `"calculated"`

oneOf with type: "calculated": The `calculated` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategyCreateRequest variant 2: `type` = `"callback"`

oneOf with type: "callback": The `callback` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategyCreateRequest variant 3: `type` = `"caller_supplied"`

oneOf with type: "caller_supplied": The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategyCreateRequest variant 4: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategyCreateRequest variant 5: `type` = `"rate_table"`

oneOf with type: "rate_table": The `rate_table` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategyCreateRequest variant 6: `type` = `"tiered"`

oneOf with type: "tiered": The `tiered` variant of `DeliveryPricingStrategyCreateInput`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

### DeliveryPricingStrategyCreateRequest.calculated

Field definitions: [DeliveryPricingStrategyCreateInputCalculated.calculated](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated).

### DeliveryPricingStrategyCreateRequest.tiered

Declared alternatives: [DeliveryPricingStrategyCreateInputCalculated.tiered](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered).

