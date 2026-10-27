[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyWeightInput

The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBandInput](../models/DeliveryPricingTierBandInput.md#deliverypricingtierbandinput) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: `"choice_group.total_weight"`. |
| `unit` | Required | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

