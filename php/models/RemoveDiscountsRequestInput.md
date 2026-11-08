[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RemoveDiscountsRequestInput

Removes pending order discounts or promotions deferred to subscription billing. Send at least one ID across order_discount_ids and deferred_promotion_ids.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `deferred_promotion_ids` | Conditional | Array of string | IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. Items: minLength: `1`. Example: `"dp_01KEZF7C00KR2DPPXEHRHG12N7"`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `order_discount_ids` | Conditional | Array of string | IDs from the order's discounts to remove. May be omitted or empty when deferred_promotion_ids contains an ID. Items: minLength: `1`. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. |

### RemoveDiscountsRequestInput variant 1

anyOf variant 1.

- Required: `order_discount_ids`.
- Optional: `deferred_promotion_ids`.
- Constraints for `order_discount_ids`: IDs of the order discounts to remove. minItems: `1`.

### RemoveDiscountsRequestInput variant 2

anyOf variant 2.

- Required: `deferred_promotion_ids`.
- Optional: `order_discount_ids`.
- Constraints for `deferred_promotion_ids`: minItems: `1`.

