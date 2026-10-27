[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLimitSettings

Optional merchant limits that can lower Flint's payment-option and surface policy limits.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_amounts` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Map replaced as a whole: the keys you send become the full map. Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. |
| `min_amounts` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Map replaced as a whole: the keys you send become the full map. Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. |

