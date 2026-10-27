[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePromotionCodeRequest

The request body for: Create promotion code.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code a buyer enters to redeem the promotion. minLength: `1`. maxLength: `100`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry. Format: `date-time`. minLength: `1`. |
| `max_uses` | Optional | integer string | Maximum number of times this code can be redeemed. Omit for no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a code that cannot be redeemed. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. minLength: `1`. maxLength: `255`. |

