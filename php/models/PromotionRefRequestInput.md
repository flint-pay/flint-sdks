[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefRequestInput

Identifies the promotion to apply, by promotion code or by promotion ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Conditional | string | Human-entered promotion code. Use this when redeeming a campaign code. minLength: `1`. |
| `promotion_id` | Conditional | string | Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: `1`. |

### PromotionRefRequestInput variant 1

oneOf variant 1.

- Condition: not (at least one(present(`promotion_code`))).
- Required: `promotion_id`.
- Optional: `promotion_code`.

### PromotionRefRequestInput variant 2

oneOf variant 2.

- Condition: not (at least one(present(`promotion_id`))).
- Required: `promotion_code`.
- Optional: `promotion_id`.

