[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PoolLicenseKeyConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active devices per key. Null when activations are unlimited. `activation_limit`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputactivation_limit). |
| `email_delivery_enabled` | Optional | boolean or null | Whether Flint emails keys to the buyer. Defaults to true. `email_delivery_enabled`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputemail_delivery_enabled). |
| `license_key_pool_id` | Optional | string or null | Active pool in this merchant and environment. Required when source is pool. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyConfigurationPreviousAttributesInput.md#licensekeyconfigurationpreviousattributesinputlicense_key_pool_id). |
| `source` | Optional | string or null | Source of the license keys. Values: `"pool"`. `source`: [declared alternatives](../models/PoolLicenseKeyConfigurationPreviousAttributesInput.md#poollicensekeyconfigurationpreviousattributesinputsource). |
| `validity_period_days` | Optional | integer or null | Days from issuance until expiry. Null when keys do not expire. `validity_period_days`: [declared alternatives](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputvalidity_period_days). |

### PoolLicenseKeyConfigurationPreviousAttributesInput.activation_limit

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.activation_limit](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputactivation_limit).

### PoolLicenseKeyConfigurationPreviousAttributesInput.email_delivery_enabled

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.email_delivery_enabled](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputemail_delivery_enabled).

### PoolLicenseKeyConfigurationPreviousAttributesInput.license_key_pool_id

Declared alternatives: [LicenseKeyConfigurationPreviousAttributesInput.license_key_pool_id](../models/LicenseKeyConfigurationPreviousAttributesInput.md#licensekeyconfigurationpreviousattributesinputlicense_key_pool_id).

### PoolLicenseKeyConfigurationPreviousAttributesInput.source

### PoolLicenseKeyConfigurationPreviousAttributesInput.source variant 1

anyOf variant 1: Source of the license keys..

- Value shape: string. Source of the license keys. Values: `"pool"`.

### PoolLicenseKeyConfigurationPreviousAttributesInput.source variant 2

anyOf variant 2.

- Value shape: null. Source of the license keys. 

### PoolLicenseKeyConfigurationPreviousAttributesInput.validity_period_days

Declared alternatives: [GeneratedLicenseKeyConfigurationPreviousAttributesInput.validity_period_days](../models/GeneratedLicenseKeyConfigurationPreviousAttributesInput.md#generatedlicensekeyconfigurationpreviousattributesinputvalidity_period_days).

