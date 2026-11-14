[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLimitSettingsInput

Optional merchant limits that can lower Flint's payment-option and surface policy limits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `effective_max_amounts` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Enforced maximum USD amounts for every supported exact payment_option.surface selector. Only returned by GET /v1/settings/effective. Includes merchant limits and Flint support approvals; the approval map is private. |
| `effective_min_amounts` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Enforced minimum USD amounts for every supported exact payment_option.surface selector. Only returned by GET /v1/settings/effective. Includes merchant limits and Flint's payment-option floors. |
| `max_amounts` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. |
| `min_amounts` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. |

