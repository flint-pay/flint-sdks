[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderAuthorizationAmountsInput

The amounts authorized and still capturable on an order's payments, with the authorization expiry.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount authorized on the order's payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capturable_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of the authorized amount that can still be captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Optional | string | Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

