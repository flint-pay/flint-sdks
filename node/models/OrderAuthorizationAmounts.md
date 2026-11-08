[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderAuthorizationAmounts

The amounts authorized and still capturable on an order's payments, with the authorization expiry.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount authorized on the order's payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `authorized_money`: [field definitions](../models/OrderAuthorizationAmounts.md#orderauthorizationamountsauthorized_money). |
| `capturable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorized amount that can still be captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `capturable_money`: [field definitions](../models/OrderAuthorizationAmounts.md#orderauthorizationamountscapturable_money). |
| `expires_at` | Optional | string | Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### OrderAuthorizationAmounts.authorized_money

The amount authorized on the order's payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderAuthorizationAmounts.capturable_money

The part of the authorized amount that can still be captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

