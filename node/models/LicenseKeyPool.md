[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPool

A merchant's pool of uploaded license keys.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Required | integer | Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | When the pool was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `held_quantity` | Required | integer | Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Format: `int64`. |
| `issued_quantity` | Required | integer | Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Format: `int64`. |
| `license_key_pool_id` | Required | string | The license key pool ID. pattern: `^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. |
| `low_stock_threshold` | Required | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LicenseKey.md#licensekeymetadata). |
| `name` | Required | string | The name of the pool. minLength: `1`. maxLength: `255`. |
| `pending_quantity` | Required | integer | Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Format: `int64`. |
| `public_validation_enabled` | Required | boolean | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. |
| `removed_quantity` | Required | integer | Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Format: `int64`. |
| `status` | Required | string | Whether the pool is active or archived. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | When the pool's version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### LicenseKeyPool.metadata

Field definitions: [LicenseKey.metadata](../models/LicenseKey.md#licensekeymetadata).

