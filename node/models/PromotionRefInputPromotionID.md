[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefInputPromotionID

The `Promotion ID` variant of `PromotionRefInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Optional | string | Human-entered promotion code. Use this when redeeming a campaign code. minLength: `1`. |
| `promotion_id` | Required | string | Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: `1`. |

