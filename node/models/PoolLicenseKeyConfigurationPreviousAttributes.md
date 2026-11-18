[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PoolLicenseKeyConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesactivation_limit). |
| `email_delivery_enabled` | Optional | boolean or null | Whether Flint emails keys to the buyer. Defaults to true. `email_delivery_enabled`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesemail_delivery_enabled). |
| `license_key_pool_id` | Optional | string or null | Active pool in this merchant and environment. Required when source is pool. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributes.md#licensekeyconfigurationpreviousattributeslicense_key_pool_id). |
| `source` | Optional | string or null | Source of the license keys. Values: `"pool"`. `source`: [declared alternatives](../models/PoolLicenseKeyConfigurationPreviousAttributes.md#poollicensekeyconfigurationpreviousattributessource). |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Null when keys do not expire. `validity_period_days`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesvalidity_period_days). |

### PoolLicenseKeyConfigurationPreviousAttributes.activation_limit

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.activation_limit](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesactivation_limit).

### PoolLicenseKeyConfigurationPreviousAttributes.email_delivery_enabled

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.email_delivery_enabled](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesemail_delivery_enabled).

### PoolLicenseKeyConfigurationPreviousAttributes.license_key_pool_id

Declared alternatives: [LicenseKeyConfigurationPreviousAttributes.license_key_pool_id](../models/LicenseKeyConfigurationPreviousAttributes.md#licensekeyconfigurationpreviousattributeslicense_key_pool_id).

### PoolLicenseKeyConfigurationPreviousAttributes.source

### PoolLicenseKeyConfigurationPreviousAttributes.source variant 1

anyOf variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"pool"`.

### PoolLicenseKeyConfigurationPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Source of the license keys. 

### PoolLicenseKeyConfigurationPreviousAttributes.validity_period_days

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributes.validity_period_days](../models/GeneratedLicenseKeyConfigurationPreviousAttributes.md#generatedlicensekeyconfigurationpreviousattributesvalidity_period_days).

