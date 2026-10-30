[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePromotionCodeRequest

The request body for: Update promotion code.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Promotion code version last read by the caller. Optional for updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format: `date-time`. minLength: `1`. |
| `max_uses` | Optional | integer or null | Maximum number of times this code can be redeemed. Send null to remove the redemption limit. Format: `int64`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `status` | Optional | string | Lifecycle status: active or inactive. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string or null | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. Send null to clear it. minLength: `1`. maxLength: `255`. |

