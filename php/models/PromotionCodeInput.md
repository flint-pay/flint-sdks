[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeInput

A code a buyer enters to claim a promotion.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Required | boolean | Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. |
| `code` | Required | string | Code a buyer enters to redeem the promotion. |
| `created_at` | Optional | string | When the promotion code was created, as an RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: `date-time`. |
| `max_uses` | Optional | integer string | Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns the promotion code. |
| `metadata` | Optional | Map of string | Key-value data you attach to the promotion code. |
| `promotion` | Optional | [PromotionInput](../models/PromotionInput.md#promotioninput) | The promotion this code belongs to. Present only when the list request asked for expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. |
| `promotion_code_id` | Required | string | Unique identifier for the promotion code. |
| `promotion_id` | Required | string | Identifier of the promotion this code redeems. |
| `status` | Required | string | Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. |
| `updated_at` | Optional | string | When the promotion code was last updated, as an RFC3339 timestamp. Format: `date-time`. |
| `uses_count` | Required | integer string | Number of times this code has been redeemed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `version` | Required | integer string | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

