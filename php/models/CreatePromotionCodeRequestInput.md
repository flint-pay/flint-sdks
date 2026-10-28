[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePromotionCodeRequestInput

The request body for: Create promotion code.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code a buyer enters to redeem the promotion. minLength: `1`. maxLength: `100`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry. Format: `date-time`. minLength: `1`. |
| `max_uses` | Optional | integer string | Maximum number of times this code can be redeemed. Omit for no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a code that cannot be redeemed. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. minLength: `1`. maxLength: `255`. |

