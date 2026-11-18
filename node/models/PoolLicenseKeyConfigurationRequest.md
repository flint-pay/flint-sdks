[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PoolLicenseKeyConfigurationRequest

Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Omit or send null for no limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `email_delivery_enabled` | Optional | boolean | Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. |
| `license_key_pool_id` | Required | string | Active pool in this merchant and environment. Required when source is pool. minLength: `1`. pattern: `^lkp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. |
| `source` | Required | string | Source of the license keys. Values: `"pool"`. |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Omit or send null for no expiry. Format: `int32`. minimum: `1`. maximum: `36500`. |

