[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateLicenseKeyPoolRequestInput

The request body for: Create a license key pool.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Optional | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | The name of the pool. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `public_validation_enabled` | Optional | boolean | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. Default: `false`. |

