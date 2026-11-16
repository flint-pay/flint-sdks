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

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when every nested expression matches. `all`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any). |
| `country` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country). |
| `not` | Conditional | object and Alternative shapes (see declared variants) or null | Matches when the nested expression does not match. `not`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not). |
| `postal_code` | Conditional | Alternative shapes (see declared variants) | Matches when the address postal code matches one of the listed codes. `postal_code`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code). |
| `radius` | Conditional | Alternative shapes (see declared variants) | Matches when the address is within a set distance of an origin. `radius`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius). |
| `state` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state). |

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1, 2, 3, 4, 5, 6, 7

anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 1; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 2; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 3; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 4; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 5; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 6; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 7.

- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 8

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `not`, `postal_code`, `radius`, `state`.
- Value shape: null. Current geographic eligibility conditions. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1

anyOf variant 1: Matches when every nested expression matches..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Matches when every nested expression matches. Matches when every nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 2

anyOf variant 2.

- Value shape: null. Matches when every nested expression matches. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when every nested expression matches. `all`: [field definitions](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all). |
| `any` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any). |
| `country` | Optional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country). |
| `not` | Optional | object and Alternative shapes (see declared variants) or null | Matches when the nested expression does not match. `not`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not). |
| `postal_code` | Optional | Alternative shapes (see declared variants) | Matches when the address postal code matches one of the listed codes. `postal_code`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code). |
| `radius` | Optional | Alternative shapes (see declared variants) | Matches when the address is within a set distance of an origin. `radius`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius). |
| `state` | Optional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state). |

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1 variant 1, 2, 3, 4, 5, 6, 7

anyOf variant 1; anyOf variant 2; anyOf variant 3; anyOf variant 4; anyOf variant 5; anyOf variant 6; anyOf variant 7.

No additional constraints.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any variant 1

anyOf variant 1: Matches when at least one nested expression matches..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Matches when at least one nested expression matches. Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any variant 2

anyOf variant 2.

- Value shape: null. Matches when at least one nested expression matches. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any variant 1.[] fields 1

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not

Matches when the nested expression does not match.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when every nested expression matches. `all`: [field definitions](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any). |
| `country` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country). |
| `not` | Conditional | object and Alternative shapes (see declared variants) or null | Matches when the nested expression does not match. `not`: [field definitions](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not). |
| `postal_code` | Conditional | Alternative shapes (see declared variants) | Matches when the address postal code matches one of the listed codes. `postal_code`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code). |
| `radius` | Conditional | Alternative shapes (see declared variants) | Matches when the address is within a set distance of an origin. `radius`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius). |
| `state` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state). |

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1, 2, 3, 4, 5, 6, 7

anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 1; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 2; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 3; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 4; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 5; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 6; anyOf DeliveryZoneConfigurationPreviousAttributes; anyOf variant 7.

- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 8

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `not`, `postal_code`, `radius`, `state`.
- Value shape: null. Matches when the nested expression does not match. 

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 1.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 2.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 3.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 4.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 5.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 6.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.all

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.not

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not variant 7.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all fields 1

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all fields 2

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all fields 3

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all fields 4

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all fields 5

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.all fields 6

Field definitions: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.all

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 2.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.all

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 3.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.all

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 4.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.all

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 5.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.all

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 6.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.all

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.any

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.any](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1any).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.country

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1country).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.not

Declared alternatives: [DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 1.all variant 1.[] fields 1.not](../models/DeliveryZoneArchivedMerchantEventDataPreviousAttributes.md#deliveryzonearchivedmerchanteventdatapreviousattributesconfiguration-variant-1all-variant-1-fields-1not).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.postal_code

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.radius

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryZoneArchivedMerchantEventDataPreviousAttributes.configuration variant 7.state

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility-variant-1all-variant-1-fields-1not-variant-1state).

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

