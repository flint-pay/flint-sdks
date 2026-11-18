[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GeneratedLicenseKeyConfiguration

License key terms. Null limits mean unlimited activations or no expiry. A null generated key prefix means no prefix.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active devices per key. Null when activations are unlimited. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `email_delivery_enabled` | Required | boolean | Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. |
| `key_prefix` | Required | string or null | Prefix shown before each generated key. Null when no prefix is configured. minLength: `2`. maxLength: `8`. pattern: `^[A-Z0-9]{2,8}$`. |
| `source` | Required | string | Source of the license keys. Values: `"generated"`. |
| `validity_period_days` | Required | integer or null | Days from issuance until expiry. Null when keys do not expire. Format: `int32`. minimum: `1`. maximum: `36500`. |

