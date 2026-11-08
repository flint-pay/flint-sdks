[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefInputPromotionIDInput

The `Promotion ID` variant of `PromotionRefInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Optional | string | Human-entered promotion code to apply. minLength: `1`. |
| `promotion_id` | Required | string | Promotion to apply by ID, including a code-gated promotion applied without a code. Counts only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: `1`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |

