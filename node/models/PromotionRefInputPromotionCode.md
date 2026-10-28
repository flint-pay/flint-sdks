[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefInputPromotionCode

The `Promotion code` variant of `PromotionRefInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Required | string | Human-entered promotion code. Use this when redeeming a campaign code. minLength: `1`. |
| `promotion_id` | Optional | string | Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: `1`. |

