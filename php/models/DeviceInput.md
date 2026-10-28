[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeviceInput

A registered device used to accept payments.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `device_id` | Required | string |  |
| `hardware_fingerprint` | Optional | string |  |
| `location_id` | Optional | string |  |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted device configuration version. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

