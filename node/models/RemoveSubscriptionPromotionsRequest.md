[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RemoveSubscriptionPromotionsRequest

The request body for: Remove subscription promotions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Remove only if this matches the subscription's current version. Format: `uint64`. minimum: `1`. |
| `promotion_ids` | Required | Array of string | Active or scheduled promotions to remove. Renewal orders created after removal omit them; paid orders and the unpaid past_due order keep their discounts. Consumed cycles are kept for reattachment. minItems: `1`. maxItems: `5`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |

