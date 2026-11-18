[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationReleasedInstalledMerchantsEventInput

The `license_key_activation.released` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key_activation.released"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/LicenseKeyActivationCreatedInstalledMerchantsEventInput.md#licensekeyactivationcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributes). |

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.object

Field definitions: [LicenseKeyActivationCreatedInstalledMerchantsEventInput.data.object](../models/LicenseKeyActivationCreatedInstalledMerchantsEventInput.md#licensekeyactivationcreatedinstalledmerchantseventinputdataobject).

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the activation was created. `created_at`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `fingerprint` | Optional | string or null | The identifier supplied by the app. Null when absent or erased. `fingerprint`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributesfingerprint). |
| `last_validated_at` | Optional | string or null | When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. `last_validated_at`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributeslast_validated_at). |
| `license_key_activation_id` | Optional | string or null | The activation ID. `license_key_activation_id`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributeslicense_key_activation_id). |
| `license_key_id` | Optional | string or null | The activated license key ID. `license_key_id`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributeslicense_key_id). |
| `name` | Optional | string or null | The name supplied by the app. Null when erased. `name`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributesname). |
| `product_id` | Optional | string or null | The product this installation can use. `product_id`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributesproduct_id). |
| `released_at` | Optional | string or null | When the activation was released. Null when it is active. `released_at`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributesreleased_at). |
| `status` | Optional | string or null | The activation state. Values: `"active"`, `"released"`. `status`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions available for this activation. Items values: `"release"`. `supported_actions`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `variant_id` | Optional | string or null | The variant this installation can use. `variant_id`: [declared alternatives](../models/LicenseKeyActivationReleasedInstalledMerchantsEventInput.md#licensekeyactivationreleasedinstalledmerchantseventinputdataprevious_attributesvariant_id). |

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.created_at

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the activation was created..

- Value shape: string. When the activation was created. When the activation was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the activation was created. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.fingerprint

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.fingerprint variant 1

anyOf variant 1: The identifier supplied by the app. Null when absent or erased..

- Value shape: string. The identifier supplied by the app. Null when absent or erased. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.fingerprint variant 2

anyOf variant 2.

- Value shape: null. The identifier supplied by the app. Null when absent or erased. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.last_validated_at

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.last_validated_at variant 1

anyOf variant 1: When the activation was last checked, updated at most once an hour. Null when the activation has never been checked..

- Value shape: string. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.last_validated_at variant 2

anyOf variant 2.

- Value shape: null. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.license_key_activation_id

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.license_key_activation_id variant 1

anyOf variant 1: The activation ID..

- Value shape: string. The activation ID. The activation ID. Example: `"lka_01KEZF7C00NZEZVCZW3SRDMHTZ"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.license_key_activation_id variant 2

anyOf variant 2.

- Value shape: null. The activation ID. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.license_key_id

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.license_key_id variant 1

anyOf variant 1: The activated license key ID..

- Value shape: string. The activated license key ID. The activated license key ID. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.license_key_id variant 2

anyOf variant 2.

- Value shape: null. The activated license key ID. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.name

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: The name supplied by the app. Null when erased..

- Value shape: string. The name supplied by the app. Null when erased. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The name supplied by the app. Null when erased. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.product_id

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.product_id variant 1

anyOf variant 1: The product this installation can use..

- Value shape: string. The product this installation can use. The product this installation can use. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.product_id variant 2

anyOf variant 2.

- Value shape: null. The product this installation can use. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.released_at

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.released_at variant 1

anyOf variant 1: When the activation was released. Null when it is active..

- Value shape: string. When the activation was released. Null when it is active. When the activation was released. Null when it is active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.released_at variant 2

anyOf variant 2.

- Value shape: null. When the activation was released. Null when it is active. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.status

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: The activation state..

- Value shape: string. The activation state. Values: `"active"`, `"released"`.

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The activation state. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions available for this activation..

- Value shape: Array of string. Actions available for this activation. Items values: `"release"`.

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions available for this activation. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.variant_id

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.variant_id variant 1

anyOf variant 1: The variant this installation can use..

- Value shape: string. The variant this installation can use. The variant this installation can use. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.data.previous_attributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. The variant this installation can use. 

### LicenseKeyActivationReleasedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

