[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodesSummaryInput

A count of a promotion's codes, including how many are redeemable now and the newest redeemable code.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_count` | Required | integer | Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Format: `int32`. |
| `newest_active_code` | Optional | string | Most recently created redeemable code. Omitted when active_count is zero. |
| `total_count` | Required | integer | Number of codes on the promotion, excluding archived codes. Format: `int32`. |

