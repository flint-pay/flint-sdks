[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingTierBandRequestInput

One band of a tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `from` | Required | integer | Format: `int64`. |
| `to` | Optional | integer | Format: `int64`. |

