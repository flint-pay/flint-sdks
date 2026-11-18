[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputactivation_limit). |
| `email_delivery_enabled` | Optional | boolean or null | Whether Flint emails keys to the buyer. Defaults to true. `email_delivery_enabled`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputemail_delivery_enabled). |
| `key_prefix` | Optional | string or null | Prefix shown before each generated key. Null when no prefix is configured. `key_prefix`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputkey_prefix). |
| `license_key_pool_id` | Optional | string or null | Active pool in this merchant and environment. Required when source is pool. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributesInput.md#licensekeyconfigurationpreviousattributesinputlicense_key_pool_id). |
| `source` | Optional | (string or null) | Source of the license keys. Values: `"generated"`, `"pool"`. `source`: [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributesInput.md#licensekeyconfigurationpreviousattributesinput-variant-1source), [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributesInput.md#licensekeyconfigurationpreviousattributesinput-variant-2source). |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Null when keys do not expire. `validity_period_days`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputvalidity_period_days). |

### LicenseKeyConfigurationPreviousAttributesInput variant 1: `source` = `"generated"`

anyOf GeneratedLicenseKeyConfigurationPreviousAttributes.

- Constraints for `source`: Values: `"generated"`.

### LicenseKeyConfigurationPreviousAttributesInput variant 2: `source` = `"pool"`

anyOf PoolLicenseKeyConfigurationPreviousAttributes.

- Constraints for `source`: Values: `"pool"`.

### LicenseKeyConfigurationPreviousAttributesInput.activation_limit

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.activation_limit](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputactivation_limit).

### LicenseKeyConfigurationPreviousAttributesInput.email_delivery_enabled

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.email_delivery_enabled](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputemail_delivery_enabled).

### LicenseKeyConfigurationPreviousAttributesInput.key_prefix

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.key_prefix](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputkey_prefix).

### LicenseKeyConfigurationPreviousAttributesInput.license_key_pool_id

### LicenseKeyConfigurationPreviousAttributesInput.license_key_pool_id variant 1

anyOf variant 1: Active pool in this merchant and environment. Required when source is pool..

- Value shape: string. Active pool in this merchant and environment. Required when source is pool. Active pool in this merchant and environment. Required when source is pool. pattern: `^lkp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. 

### LicenseKeyConfigurationPreviousAttributesInput.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. Active pool in this merchant and environment. Required when source is pool. 

### LicenseKeyConfigurationPreviousAttributesInput variant 1.source

### LicenseKeyConfigurationPreviousAttributesInput variant 1.source variant 1

anyOf group 1 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`, `"pool"`.

### LicenseKeyConfigurationPreviousAttributesInput variant 1.source variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Source of the license keys. 

### LicenseKeyConfigurationPreviousAttributesInput variant 1.source variant 3

anyOf group 2 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`.

### LicenseKeyConfigurationPreviousAttributesInput.validity_period_days

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.validity_period_days](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputvalidity_period_days).

### LicenseKeyConfigurationPreviousAttributesInput variant 2.source

### LicenseKeyConfigurationPreviousAttributesInput variant 2.source variant 1

anyOf group 1 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"generated"`, `"pool"`.

### LicenseKeyConfigurationPreviousAttributesInput variant 2.source variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Source of the license keys. 

### LicenseKeyConfigurationPreviousAttributesInput variant 2.source variant 3

anyOf group 2 variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"pool"`.

