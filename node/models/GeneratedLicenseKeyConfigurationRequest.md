[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GeneratedLicenseKeyConfigurationRequest

Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Omit or send null for no limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `email_delivery_enabled` | Optional | boolean | Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. |
| `key_prefix` | Optional | string | Prefix shown before each generated key. Omit for no prefix. minLength: `2`. maxLength: `8`. pattern: `^[A-Z0-9]{2,8}$`. |
| `source` | Required | string | Source of the license keys. Values: `"generated"`. |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Omit or send null for no expiry. Format: `int32`. minimum: `1`. maximum: `36500`. |

