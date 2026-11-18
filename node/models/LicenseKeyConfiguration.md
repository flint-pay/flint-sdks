[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyConfiguration

License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active devices per key. Null when activations are unlimited. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `email_delivery_enabled` | Required | boolean | Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. |
| `key_prefix` | Conditional | string or null | Prefix shown before each generated key. Null when no prefix is configured. minLength: `2`. maxLength: `8`. pattern: `^[A-Z0-9]{2,8}$`. |
| `license_key_pool_id` | Conditional | string | Active pool in this merchant and environment. Required when source is pool. pattern: `^lkp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. |
| `source` | Required | string | Source of the license keys. Values: `"generated"`, `"pool"`. |
| `validity_period_days` | Required | integer or null | Days from issuance until expiry. Null when keys do not expire. Format: `int32`. minimum: `1`. maximum: `36500`. |

### LicenseKeyConfiguration variant 1: `source` = `"generated"`

oneOf with source: "generated": License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix..

- Required: `key_prefix`.
- Optional: `license_key_pool_id`.
- Constraints for `source`: Values: `"generated"`.

### LicenseKeyConfiguration variant 2: `source` = `"pool"`

oneOf with source: "pool": License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix..

- Required: `license_key_pool_id`.
- Optional: `key_prefix`.
- Constraints for `source`: Values: `"pool"`.

