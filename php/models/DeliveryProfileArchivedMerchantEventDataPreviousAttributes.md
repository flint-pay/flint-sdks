[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfiguration](../models/DeliveryProfileConfiguration.md#deliveryprofileconfiguration) or null | Current delivery requirement and grouping policy. |
| `created_at` | Optional | string or null | Time the profile was created. `created_at`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributescreated_at). |
| `current_delivery_profile_revision_id` | Optional | string or null | Immutable revision used for new line-item snapshots. `current_delivery_profile_revision_id`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributescurrent_delivery_profile_revision_id). |
| `delivery_profile_id` | Optional | string or null | Stable delivery profile ID. `delivery_profile_id`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesdelivery_profile_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `is_default` | Optional | boolean or null | True only when this profile is the current physical catalog default. `is_default`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesis_default). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Merchant-facing profile name. `name`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesname). |
| `status` | Optional | string or null | Current profile lifecycle status. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | Time the profile last changed. `updated_at`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for profile writes. `version`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesversion). |

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.created_at

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: Time the profile was created..

- Value shape: string. Time the profile was created. Time the profile was created. Format: `date-time`. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the profile was created. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.current_delivery_profile_revision_id

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.current_delivery_profile_revision_id variant 1

anyOf variant 1: Immutable revision used for new line-item snapshots..

- Value shape: string. Immutable revision used for new line-item snapshots. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.current_delivery_profile_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision used for new line-item snapshots. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.delivery_profile_id

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.delivery_profile_id variant 1

anyOf variant 1: Stable delivery profile ID..

- Value shape: string. Stable delivery profile ID. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery profile ID. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.is_default

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.is_default variant 1

anyOf variant 1: True only when this profile is the current physical catalog default..

- Value shape: boolean. True only when this profile is the current physical catalog default. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.is_default variant 2

anyOf variant 2.

- Value shape: null. True only when this profile is the current physical catalog default. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.name

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Merchant-facing profile name..

- Value shape: string. Merchant-facing profile name. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing profile name. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.status

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current profile lifecycle status..

- Value shape: string. Current profile lifecycle status. Values: `"active"`, `"archived"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current profile lifecycle status. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.updated_at

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: Time the profile last changed..

- Value shape: string. Time the profile last changed. Time the profile last changed. Format: `date-time`. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the profile last changed. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.version

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for profile writes..

- Value shape: integer. Optimistic-concurrency version for profile writes. Optimistic-concurrency version for profile writes. Format: `uint64`. minimum: `1`. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for profile writes. 

