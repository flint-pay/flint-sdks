[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefInputPromotionCode

The `Promotion code` variant of `PromotionRefInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Required | string | Human-entered promotion code to apply. minLength: `1`. |
| `promotion_id` | Optional | string | Promotion to apply by ID, including a code-gated promotion applied without a code. Counts only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: `1`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |

