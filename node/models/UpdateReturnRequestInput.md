[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnRequestInput

Request input. Response: [UpdateRefundRequest](../models/UpdateRefundRequest.md#updaterefundrequest).

The request body for: Update return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional version of the Return. A stale value returns RETURN_VERSION_CONFLICT with the current Return version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |

