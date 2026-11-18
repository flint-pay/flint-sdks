[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLicenseKeyPoolRequest

The request body for: Update a license key pool.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `low_stock_threshold` | Optional | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | The name of the pool. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `public_validation_enabled` | Optional | boolean | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. |

