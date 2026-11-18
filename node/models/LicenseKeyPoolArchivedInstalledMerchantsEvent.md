[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolArchivedInstalledMerchantsEvent

The `license_key_pool.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key_pool.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributes). |

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](LicenseKeyPool.md#licensekeypool).

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [LicenseKey.metadata](../models/LicenseKey.md#licensekeymetadata).

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. `available_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesavailable_quantity). |
| `created_at` | Optional | string or null | When the pool was created. `created_at`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `held_quantity` | Optional | integer or null | Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesheld_quantity). |
| `issued_quantity` | Optional | integer or null | Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. `issued_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesissued_quantity). |
| `license_key_pool_id` | Optional | string or null | The license key pool ID. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributeslicense_key_pool_id). |
| `low_stock_threshold` | Optional | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. `low_stock_threshold`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributeslow_stock_threshold). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Merchant-defined key-value pairs. `metadata`: [declared alternatives](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | The name of the pool. `name`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesname). |
| `pending_quantity` | Optional | integer or null | Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. `pending_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributespending_quantity). |
| `public_validation_enabled` | Optional | boolean or null | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. `public_validation_enabled`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributespublic_validation_enabled). |
| `removed_quantity` | Optional | integer or null | Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. `removed_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesremoved_quantity). |
| `status` | Optional | string or null | Whether the pool is active or archived. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When the pool's version last changed. `updated_at`: [declared alternatives](../models/LicenseKeyPoolArchivedInstalledMerchantsEvent.md#licensekeypoolarchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.available_quantity

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.available_quantity variant 1

anyOf variant 1: Count of keys still for sale, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.available_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the pool was created..

- Value shape: string. When the pool was created. When the pool was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the pool was created. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.held_quantity

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.held_quantity variant 1

anyOf variant 1: Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.held_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.issued_quantity

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.issued_quantity variant 1

anyOf variant 1: Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.issued_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.license_key_pool_id

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.license_key_pool_id variant 1

anyOf variant 1: The license key pool ID..

- Value shape: string. The license key pool ID. The license key pool ID. pattern: `^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. The license key pool ID. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.low_stock_threshold

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.low_stock_threshold variant 1

anyOf variant 1: Available quantity at or below which the pool is low on stock. Null when no threshold is set..

- Value shape: integer. Available quantity at or below which the pool is low on stock. Null when no threshold is set. Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.low_stock_threshold variant 2

anyOf variant 2.

- Value shape: null. Available quantity at or below which the pool is low on stock. Null when no threshold is set. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [LicenseKeyDisabledInstalledMerchantsEvent.data.previous_attributes.metadata](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdataprevious_attributesmetadata).

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.name

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: The name of the pool..

- Value shape: string. The name of the pool. The name of the pool. minLength: `1`. maxLength: `255`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The name of the pool. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.pending_quantity

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.pending_quantity variant 1

anyOf variant 1: Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.pending_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.public_validation_enabled

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.public_validation_enabled variant 1

anyOf variant 1: Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters..

- Value shape: boolean. Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.public_validation_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.removed_quantity

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.removed_quantity variant 1

anyOf variant 1: Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.removed_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.status

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the pool is active or archived..

- Value shape: string. Whether the pool is active or archived. Values: `"active"`, `"archived"`.

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the pool is active or archived. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the pool's version last changed..

- Value shape: string. When the pool's version last changed. When the pool's version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the pool's version last changed. 

### LicenseKeyPoolArchivedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### LicenseKeyPoolArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

