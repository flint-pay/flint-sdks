[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney

Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

