[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney

Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `200000`. |
| `currency` | Required | string | Three-letter ISO 4217 currency code. Values: `"USD"`. |

