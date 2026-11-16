[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | object and Alternative shapes (see declared variants) or null | Current geographic eligibility conditions. `configuration`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration). |
| `created_at` | Optional | string or null | Time the zone was created. `created_at`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributescreated_at). |
| `current_delivery_zone_revision_id` | Optional | string or null | Immutable revision used for new quotes. `current_delivery_zone_revision_id`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributescurrent_delivery_location_set_revision_id). |
| `delivery_zone_id` | Optional | string or null | Stable delivery zone ID. `delivery_zone_id`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesdelivery_zone_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Merchant-facing zone name. `name`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesname). |
| `status` | Optional | string or null | Current zone lifecycle status. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | Time the zone last changed. `updated_at`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for zone writes. `version`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesversion). |

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration

Current geographic eligibility conditions.

Field definitions: [shared fields](DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 8

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `not`, `postal_code`, `radius`, `state`.
- Value shape: null. Current geographic eligibility conditions. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.all[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.created_at

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: Time the zone was created..

- Value shape: string. Time the zone was created. Time the zone was created. Format: `date-time`. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the zone was created. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.current_delivery_zone_revision_id

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.current_delivery_location_set_revision_id](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributescurrent_delivery_location_set_revision_id).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.delivery_zone_id

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.delivery_zone_id variant 1

anyOf variant 1: Stable delivery zone ID..

- Value shape: string. Stable delivery zone ID. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.delivery_zone_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery zone ID. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.name

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Merchant-facing zone name..

- Value shape: string. Merchant-facing zone name. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing zone name. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.status

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current zone lifecycle status..

- Value shape: string. Current zone lifecycle status. Values: `"active"`, `"archived"`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current zone lifecycle status. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.updated_at

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: Time the zone last changed..

- Value shape: string. Time the zone last changed. Time the zone last changed. Format: `date-time`. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the zone last changed. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.version

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for zone writes..

- Value shape: integer. Optimistic-concurrency version for zone writes. Optimistic-concurrency version for zone writes. Format: `uint64`. minimum: `1`. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for zone writes. 

