[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryFixedPricingStrategyRequestInput

A fixed delivery price by currency, supplied for a delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |

