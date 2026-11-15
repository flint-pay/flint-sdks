[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyCreateRequestInput

Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of [DeliveryPricingRateCreateRequestInput](../models/DeliveryPricingRateCreateRequestInput.md#deliverypricingratecreaterequestinput) | One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: `1`. maxItems: `100`. |
| `unmatched_behavior` | Optional | string | What happens when no rate matches. Default: `"unavailable"`. Values: `"unavailable"`. |

