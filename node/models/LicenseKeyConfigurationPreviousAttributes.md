[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesactivation_limit). |
| `email_delivery_enabled` | Optional | boolean or null | Whether Flint emails keys to the buyer. Defaults to true. `email_delivery_enabled`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesemail_delivery_enabled). |
| `key_prefix` | Optional | string or null | Prefix shown before each generated key. Null when no prefix is configured. `key_prefix`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributeskey_prefix). |
| `license_key_pool_id` | Optional | string or null | Active pool in this merchant and environment. Required when source is pool. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributes.md#licensekeyconfigurationpreviousattributeslicense_key_pool_id). |
| `source` | Optional | (string or null) | Source of the license keys. Values: `"generated"`, `"pool"`. `source`: [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributes.md#licensekeyconfigurationpreviousattributes-variant-1source), [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributes.md#licensekeyconfigurationpreviousattributes-variant-2source). |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Null when keys do not expire. `validity_period_days`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesvalidity_period_days). |

### LicenseKeyConfigurationPreviousAttributes variant 1: `source` = `"generated"`

anyOf GeneratedLicenseKeyConfigurationPreviousAttributes.

- Constraints for `source`: Values: `"generated"`.

### LicenseKeyConfigurationPreviousAttributes variant 2: `source` = `"pool"`

anyOf PoolLicenseKeyConfigurationPreviousAttributes.

- Constraints for `source`: Values: `"pool"`.

### LicenseKeyConfigurationPreviousAttributes.activation_limit

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.activation_limit](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesactivation_limit).

### LicenseKeyConfigurationPreviousAttributes.email_delivery_enabled

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.email_delivery_enabled](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesemail_delivery_enabled).

### LicenseKeyConfigurationPreviousAttributes.key_prefix

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.key_prefix](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributeskey_prefix).

### LicenseKeyConfigurationPreviousAttributes.license_key_pool_id

### LicenseKeyConfigurationPreviousAttributes.license_key_pool_id variant 1

anyOf variant 1: Active pool in this merchant and environment. Required when source is pool..

- Value shape: string. Active pool in this merchant and environment. Required when source is pool. Active pool in this merchant and environment. Required when source is pool. pattern: `^lkp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. 

### LicenseKeyConfigurationPreviousAttributes.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. Active pool in this merchant and environment. Required when source is pool. 

### LicenseKeyConfigurationPreviousAttributes variant 1.source

### LicenseKeyConfigurationPreviousAttributes variant 1.source variant 1

anyOf group 1 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`, `"pool"`.

### LicenseKeyConfigurationPreviousAttributes variant 1.source variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Source of the license keys. 

### LicenseKeyConfigurationPreviousAttributes variant 1.source variant 3

anyOf group 2 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`.

### LicenseKeyConfigurationPreviousAttributes.validity_period_days

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.validity_period_days](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesvalidity_period_days).

### LicenseKeyConfigurationPreviousAttributes variant 2.source

### LicenseKeyConfigurationPreviousAttributes variant 2.source variant 1

anyOf group 1 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`, `"pool"`.

### LicenseKeyConfigurationPreviousAttributes variant 2.source variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Source of the license keys. 

### LicenseKeyConfigurationPreviousAttributes variant 2.source variant 3

anyOf group 2 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"pool"`.

