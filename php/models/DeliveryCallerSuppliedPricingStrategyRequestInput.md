[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCallerSuppliedPricingStrategyRequestInput

Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_fee_currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |

