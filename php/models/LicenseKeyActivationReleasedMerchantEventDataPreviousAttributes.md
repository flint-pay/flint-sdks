[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the activation was created. `created_at`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributescreated_at). |
| `fingerprint` | Optional | string or null | The identifier supplied by the app. Null when absent or erased. `fingerprint`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesfingerprint). |
| `last_validated_at` | Optional | string or null | When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. `last_validated_at`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributeslast_validated_at). |
| `license_key_activation_id` | Optional | string or null | The activation ID. `license_key_activation_id`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributeslicense_key_activation_id). |
| `license_key_id` | Optional | string or null | The activated license key ID. `license_key_id`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributeslicense_key_id). |
| `name` | Optional | string or null | The name supplied by the app. Null when erased. `name`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesname). |
| `product_id` | Optional | string or null | The product this installation can use. `product_id`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesproduct_id). |
| `released_at` | Optional | string or null | When the activation was released. Null when it is active. `released_at`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesreleased_at). |
| `status` | Optional | string or null | The activation state. Values: `"active"`, `"released"`. `status`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions available for this activation. Items values: `"release"`. `supported_actions`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributessupported_actions). |
| `variant_id` | Optional | string or null | The variant this installation can use. `variant_id`: [declared alternatives](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesvariant_id). |

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.created_at

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the activation was created..

- Value shape: string. When the activation was created. When the activation was created. Format: `date-time`. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the activation was created. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.fingerprint

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.fingerprint variant 1

anyOf variant 1: The identifier supplied by the app. Null when absent or erased..

- Value shape: string. The identifier supplied by the app. Null when absent or erased. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.fingerprint variant 2

anyOf variant 2.

- Value shape: null. The identifier supplied by the app. Null when absent or erased. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.last_validated_at

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.last_validated_at variant 1

anyOf variant 1: When the activation was last checked, updated at most once an hour. Null when the activation has never been checked..

- Value shape: string. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: `date-time`. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.last_validated_at variant 2

anyOf variant 2.

- Value shape: null. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_activation_id

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_activation_id variant 1

anyOf variant 1: The activation ID..

- Value shape: string. The activation ID. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_activation_id variant 2

anyOf variant 2.

- Value shape: null. The activation ID. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_id

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_id variant 1

anyOf variant 1: The activated license key ID..

- Value shape: string. The activated license key ID. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_id variant 2

anyOf variant 2.

- Value shape: null. The activated license key ID. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.name

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: The name supplied by the app. Null when erased..

- Value shape: string. The name supplied by the app. Null when erased. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. The name supplied by the app. Null when erased. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.product_id

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.product_id variant 1

anyOf variant 1: The product this installation can use..

- Value shape: string. The product this installation can use. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. The product this installation can use. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.released_at

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.released_at variant 1

anyOf variant 1: When the activation was released. Null when it is active..

- Value shape: string. When the activation was released. Null when it is active. When the activation was released. Null when it is active. Format: `date-time`. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.released_at variant 2

anyOf variant 2.

- Value shape: null. When the activation was released. Null when it is active. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.status

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: The activation state..

- Value shape: string. The activation state. Values: `"active"`, `"released"`.

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. The activation state. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.supported_actions

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions available for this activation..

- Value shape: Array of string. Actions available for this activation. Items values: `"release"`.

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions available for this activation. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.variant_id

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.variant_id variant 1

anyOf variant 1: The variant this installation can use..

- Value shape: string. The variant this installation can use. 

### LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The variant this installation can use. 

