[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookPromotionCodeInput

The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Required | boolean | Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. |
| `code` | Required | string | Code a buyer enters to redeem the promotion. |
| `created_at` | Required | string | When the promotion code was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_uses` | Optional | integer | Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Format: `int64`. |
| `merchant_id` | Required | string | Identifier of the merchant that owns the promotion code. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Key-value data you attach to the promotion code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `promotion_code_id` | Required | string | Unique identifier for the promotion code. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. |
| `promotion_id` | Required | string | Identifier of the promotion this code redeems. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `status` | Required | string | Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. |
| `updated_at` | Required | string | When the promotion code was last updated, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `uses_count` | Required | integer | Number of times this code has been redeemed. Format: `int64`. |
| `version` | Required | integer | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. |

