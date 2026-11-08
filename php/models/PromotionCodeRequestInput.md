[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeRequestInput

A promotion code to create inline with its promotion. The promotion supplies its parent ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code a buyer enters to redeem the promotion. minLength: `1`. maxLength: `100`. |
| `customer_id` | Optional | string or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Omit or send null to create an unbound code. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_uses` | Optional | integer | Maximum number of times this code can be redeemed. Omit for no redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Key-value data you attach to the promotion code. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a code that cannot be redeemed. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. minLength: `1`. maxLength: `255`. |

