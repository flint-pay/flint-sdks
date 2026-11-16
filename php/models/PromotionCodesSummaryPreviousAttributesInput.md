[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodesSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_count` | Optional | integer or null | Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. `active_count`: [declared alternatives](../models/PromotionCodesSummaryPreviousAttributesInput.md#promotioncodessummarypreviousattributesinputactive_count). |
| `newest_active_code` | Optional | string or null | Most recently created redeemable code. Omitted when active_count is zero. `newest_active_code`: [declared alternatives](../models/PromotionCodesSummaryPreviousAttributesInput.md#promotioncodessummarypreviousattributesinputnewest_active_code). |
| `total_count` | Optional | integer or null | Number of codes on the promotion, excluding archived codes. `total_count`: [declared alternatives](../models/PromotionCodesSummaryPreviousAttributesInput.md#promotioncodessummarypreviousattributesinputtotal_count). |

### PromotionCodesSummaryPreviousAttributesInput.active_count

### PromotionCodesSummaryPreviousAttributesInput.active_count variant 1

anyOf variant 1: Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes..

- Value shape: integer. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Format: `int32`. 

### PromotionCodesSummaryPreviousAttributesInput.active_count variant 2

anyOf variant 2.

- Value shape: null. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. 

### PromotionCodesSummaryPreviousAttributesInput.newest_active_code

### PromotionCodesSummaryPreviousAttributesInput.newest_active_code variant 1

anyOf variant 1: Most recently created redeemable code. Omitted when active_count is zero..

- Value shape: string. Most recently created redeemable code. Omitted when active_count is zero. 

### PromotionCodesSummaryPreviousAttributesInput.newest_active_code variant 2

anyOf variant 2.

- Value shape: null. Most recently created redeemable code. Omitted when active_count is zero. 

### PromotionCodesSummaryPreviousAttributesInput.total_count

### PromotionCodesSummaryPreviousAttributesInput.total_count variant 1

anyOf variant 1: Number of codes on the promotion, excluding archived codes..

- Value shape: integer. Number of codes on the promotion, excluding archived codes. Number of codes on the promotion, excluding archived codes. Format: `int32`. 

### PromotionCodesSummaryPreviousAttributesInput.total_count variant 2

anyOf variant 2.

- Value shape: null. Number of codes on the promotion, excluding archived codes. 

