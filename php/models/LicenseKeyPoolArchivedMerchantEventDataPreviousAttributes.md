[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. `available_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesavailable_quantity). |
| `created_at` | Optional | string or null | When the pool was created. `created_at`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributescreated_at). |
| `held_quantity` | Optional | integer or null | Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesheld_quantity). |
| `issued_quantity` | Optional | integer or null | Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. `issued_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesissued_quantity). |
| `license_key_pool_id` | Optional | string or null | The license key pool ID. `license_key_pool_id`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributeslicense_key_pool_id). |
| `low_stock_threshold` | Optional | integer or null | Available quantity at or below which the pool is low on stock. Null when no threshold is set. `low_stock_threshold`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributeslow_stock_threshold). |
| `metadata` | Optional | Map of string or null | Merchant-defined key-value pairs. `metadata`: [declared alternatives](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | The name of the pool. `name`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesname). |
| `pending_quantity` | Optional | integer or null | Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. `pending_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributespending_quantity). |
| `public_validation_enabled` | Optional | boolean or null | Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. `public_validation_enabled`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributespublic_validation_enabled). |
| `removed_quantity` | Optional | integer or null | Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. `removed_quantity`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesremoved_quantity). |
| `status` | Optional | string or null | Whether the pool is active or archived. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | When the pool's version last changed. `updated_at`: [declared alternatives](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.available_quantity

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.available_quantity variant 1

anyOf variant 1: Count of keys still for sale, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.available_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.created_at

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the pool was created..

- Value shape: string. When the pool was created. When the pool was created. Format: `date-time`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the pool was created. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.held_quantity

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.held_quantity variant 1

anyOf variant 1: Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.held_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.issued_quantity

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.issued_quantity variant 1

anyOf variant 1: Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.issued_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.license_key_pool_id

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.license_key_pool_id variant 1

anyOf variant 1: The license key pool ID..

- Value shape: string. The license key pool ID. The license key pool ID. pattern: `^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.license_key_pool_id variant 2

anyOf variant 2.

- Value shape: null. The license key pool ID. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.low_stock_threshold

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.low_stock_threshold variant 1

anyOf variant 1: Available quantity at or below which the pool is low on stock. Null when no threshold is set..

- Value shape: integer. Available quantity at or below which the pool is low on stock. Null when no threshold is set. Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.low_stock_threshold variant 2

anyOf variant 2.

- Value shape: null. Available quantity at or below which the pool is low on stock. Null when no threshold is set. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.metadata](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesmetadata).

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.name

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: The name of the pool..

- Value shape: string. The name of the pool. The name of the pool. minLength: `1`. maxLength: `255`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. The name of the pool. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.pending_quantity

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.pending_quantity variant 1

anyOf variant 1: Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.pending_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.public_validation_enabled

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.public_validation_enabled variant 1

anyOf variant 1: Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters..

- Value shape: boolean. Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.public_validation_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.removed_quantity

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.removed_quantity variant 1

anyOf variant 1: Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported..

- Value shape: integer. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Format: `int64`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.removed_quantity variant 2

anyOf variant 2.

- Value shape: null. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.status

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the pool is active or archived..

- Value shape: string. Whether the pool is active or archived. Values: `"active"`, `"archived"`.

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the pool is active or archived. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.updated_at

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the pool's version last changed..

- Value shape: string. When the pool's version last changed. When the pool's version last changed. Format: `date-time`. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the pool's version last changed. 

### LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

