[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodesSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_count` | Optional | integer or null | Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. `active_count`: [declared alternatives](../models/PromotionCodesSummaryPreviousAttributes.md#promotioncodessummarypreviousattributesactive_count). |
| `newest_active_code` | Optional | string or null | Most recently created redeemable code. Omitted when active_count is zero. `newest_active_code`: [declared alternatives](../models/PromotionCodesSummaryPreviousAttributes.md#promotioncodessummarypreviousattributesnewest_active_code). |
| `total_count` | Optional | integer or null | Number of codes on the promotion, excluding archived codes. `total_count`: [declared alternatives](../models/PromotionCodesSummaryPreviousAttributes.md#promotioncodessummarypreviousattributestotal_count). |

### PromotionCodesSummaryPreviousAttributes.active_count

### PromotionCodesSummaryPreviousAttributes.active_count variant 1

anyOf variant 1: Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes..

- Value shape: integer. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Format: `int32`. 

### PromotionCodesSummaryPreviousAttributes.active_count variant 2

anyOf variant 2.

- Value shape: null. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. 

### PromotionCodesSummaryPreviousAttributes.newest_active_code

### PromotionCodesSummaryPreviousAttributes.newest_active_code variant 1

anyOf variant 1: Most recently created redeemable code. Omitted when active_count is zero..

- Value shape: string. Most recently created redeemable code. Omitted when active_count is zero. 

### PromotionCodesSummaryPreviousAttributes.newest_active_code variant 2

anyOf variant 2.

- Value shape: null. Most recently created redeemable code. Omitted when active_count is zero. 

### PromotionCodesSummaryPreviousAttributes.total_count

### PromotionCodesSummaryPreviousAttributes.total_count variant 1

anyOf variant 1: Number of codes on the promotion, excluding archived codes..

- Value shape: integer. Number of codes on the promotion, excluding archived codes. Number of codes on the promotion, excluding archived codes. Format: `int32`. 

### PromotionCodesSummaryPreviousAttributes.total_count variant 2

anyOf variant 2.

- Value shape: null. Number of codes on the promotion, excluding archived codes. 

