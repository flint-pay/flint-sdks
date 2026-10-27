[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingTierBandRequestInput

Request input. Response: [DeliveryPricingTierBand](../models/DeliveryPricingTierBand.md#deliverypricingtierband).

One band of a tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `from` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `to` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

