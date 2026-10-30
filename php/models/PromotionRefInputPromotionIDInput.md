[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefInputPromotionIDInput

The `Promotion ID` variant of `PromotionRefInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Optional | string | Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion amounts applied to orders must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: `1`. |
| `promotion_id` | Required | string | Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion amounts applied to orders must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: `1`. |

