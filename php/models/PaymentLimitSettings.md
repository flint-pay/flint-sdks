[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLimitSettings

Optional merchant limits that can lower Flint's payment-option and surface policy limits.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_amounts` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. |
| `min_amounts` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. |

