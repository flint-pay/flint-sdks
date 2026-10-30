[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeviceInput

A device registered to the merchant account by hardware fingerprint, optionally assigned to a location. Registering a device doesn't change how payments are accepted.

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
| `version` | Required | integer | Persisted device configuration version. Format: `uint64`. minimum: `1`. |

