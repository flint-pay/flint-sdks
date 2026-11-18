[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GeneratedLicenseKeyConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesactivation_limit). |
| `email_delivery_enabled` | Optional | boolean or null | Whether Flint emails keys to the buyer. Defaults to true. `email_delivery_enabled`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesemail_delivery_enabled). |
| `key_prefix` | Optional | string or null | Prefix shown before each generated key. Null when no prefix is configured. `key_prefix`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributeskey_prefix). |
| `source` | Optional | string or null | Source of the license keys. Values: `"generated"`. `source`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributessource). |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Null when keys do not expire. `validity_period_days`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesvalidity_period_days). |

### GeneratedLicenseKeyConfigurationPreviousAttributes.activation_limit

### GeneratedLicenseKeyConfigurationPreviousAttributes.activation_limit variant 1

anyOf variant 1: Maximum active devices per key. Null when activations are unlimited..

- Value shape: integer. Maximum active devices per key. Null when activations are unlimited. Maximum active devices per key. Null when activations are unlimited. Format: `int32`. minimum: `1`. maximum: `10000`. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.activation_limit variant 2

anyOf variant 2.

- Value shape: null. Maximum active devices per key. Null when activations are unlimited. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.email_delivery_enabled

### GeneratedLicenseKeyConfigurationPreviousAttributes.email_delivery_enabled variant 1

anyOf variant 1: Whether Flint emails keys to the buyer. Defaults to true..

- Value shape: boolean. Whether Flint emails keys to the buyer. Defaults to true. Whether Flint emails keys to the buyer. Defaults to true. Default: `true`. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.email_delivery_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint emails keys to the buyer. Defaults to true. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.key_prefix

### GeneratedLicenseKeyConfigurationPreviousAttributes.key_prefix variant 1

anyOf variant 1: Prefix shown before each generated key. Null when no prefix is configured..

- Value shape: string. Prefix shown before each generated key. Null when no prefix is configured. Prefix shown before each generated key. Null when no prefix is configured. minLength: `2`. maxLength: `8`. pattern: `^[A-Z0-9]{2,8}$`. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.key_prefix variant 2

anyOf variant 2.

- Value shape: null. Prefix shown before each generated key. Null when no prefix is configured. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.source

### GeneratedLicenseKeyConfigurationPreviousAttributes.source variant 1

anyOf variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`.

### GeneratedLicenseKeyConfigurationPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Source of the license keys. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.validity_period_days

### GeneratedLicenseKeyConfigurationPreviousAttributes.validity_period_days variant 1

anyOf variant 1: Days from issuance until expiry. Null when keys do not expire..

- Value shape: integer. Days from issuance until expiry. Null when keys do not expire. Days from issuance until expiry. Null when keys do not expire. Format: `int32`. minimum: `1`. maximum: `36500`. 

### GeneratedLicenseKeyConfigurationPreviousAttributes.validity_period_days variant 2

anyOf variant 2.

- Value shape: null. Days from issuance until expiry. Null when keys do not expire. 

