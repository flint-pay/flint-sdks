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
| `metadata` | Optional | Map of string |  |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted device configuration version. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

