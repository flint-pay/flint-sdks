[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateRefundRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |

### UpdateRefundRequest variant 1

anyOf variant 1: Declared schema UpdateRefundRequest. The request body for: Update refund..

- Constraints for `expected_version`: Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`.

### UpdateRefundRequest variant 2

anyOf variant 2: Declared schema UpdateReturnRequest. The request body for: Update return..

- Constraints for `expected_version`: Optional version of the Return. A stale value returns VERSION_CONFLICT with the current Return version. Format: `int64`.

