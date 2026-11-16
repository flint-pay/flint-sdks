[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationPreviousAttributes](../models/DeliveryLocationSetConfigurationPreviousAttributes.md#deliverylocationsetconfigurationpreviousattributes) or null | Current member Locations. `configuration`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesconfiguration). |
| `created_at` | Optional | string or null | Time the location set was created. `created_at`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributescreated_at). |
| `current_delivery_location_set_revision_id` | Optional | string or null | Immutable revision used for new quotes. `current_delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributescurrent_delivery_location_set_revision_id). |
| `delivery_location_set_id` | Optional | string or null | Stable delivery location set ID. `delivery_location_set_id`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesdelivery_location_set_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Merchant-facing location set name. `name`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesname). |
| `status` | Optional | string or null | Current location set lifecycle status. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | Time the location set last changed. `updated_at`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for location set writes. `version`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesversion). |

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.configuration

Current member Locations.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_ids` | Conditional | Array of string or null | IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. `location_ids`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesconfiguration-variant-1location_ids). |

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.configuration variant 1

anyOf DeliveryLocationSetConfigurationPreviousAttributes.

- Optional: `location_ids`.

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf variant 2.

- Undeclared: `location_ids`.
- Value shape: null. Current member Locations. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.configuration variant 1.location_ids

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.configuration variant 1.location_ids variant 1

anyOf variant 1: IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25..

- Value shape: Array of string. IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.configuration variant 1.location_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.created_at

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: Time the location set was created..

- Value shape: string. Time the location set was created. Time the location set was created. Format: `date-time`. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the location set was created. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.current_delivery_location_set_revision_id

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.current_delivery_location_set_revision_id variant 1

anyOf variant 1: Immutable revision used for new quotes..

- Value shape: string. Immutable revision used for new quotes. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.current_delivery_location_set_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision used for new quotes. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.delivery_location_set_id

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.delivery_location_set_id variant 1

anyOf variant 1: Stable delivery location set ID..

- Value shape: string. Stable delivery location set ID. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.delivery_location_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery location set ID. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned metadata. Map values: maxLength: `4096`. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.name

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Merchant-facing location set name..

- Value shape: string. Merchant-facing location set name. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing location set name. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.status

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current location set lifecycle status..

- Value shape: string. Current location set lifecycle status. Values: `"active"`, `"archived"`.

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current location set lifecycle status. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.updated_at

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: Time the location set last changed..

- Value shape: string. Time the location set last changed. Time the location set last changed. Format: `date-time`. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the location set last changed. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.version

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for location set writes..

- Value shape: integer. Optimistic-concurrency version for location set writes. Optimistic-concurrency version for location set writes. Format: `uint64`. minimum: `1`. 

### DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for location set writes. 

