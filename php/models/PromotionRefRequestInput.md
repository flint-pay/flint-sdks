[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRefRequestInput

Identifies the promotion to apply, by promotion code or by promotion ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_code` | Conditional | string | Human-entered promotion code to apply. minLength: `1`. |
| `promotion_id` | Conditional | string | Promotion to apply by ID, including a code-gated promotion applied without a code. Counts only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: `1`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |

### PromotionRefRequestInput variant 1

oneOf PromotionRefInputPromotionID: The `Promotion ID` variant of `PromotionRefInput`..

- Condition: not (at least one(present(`promotion_code`))).
- Required: `promotion_id`.
- Optional: `promotion_code`.

### PromotionRefRequestInput variant 2

oneOf PromotionRefInputPromotionCode: The `Promotion code` variant of `PromotionRefInput`..

- Condition: not (at least one(present(`promotion_id`))).
- Required: `promotion_code`.
- Optional: `promotion_id`.

