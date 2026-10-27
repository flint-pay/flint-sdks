[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfigurationFaceValueMoney

Gift card value issued for one unit of this variant, in the same currency as its unit price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `200000`. |
| `currency` | Required | string | Three-letter ISO 4217 currency code. Values: `"USD"`. |

