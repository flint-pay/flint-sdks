[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | Alternative shapes (see declared variants) | Current delivery requirement and grouping policy. `configuration`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration). |
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

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration

Current delivery requirement and grouping policy.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Conditional | Array of string or null | Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. `allowed_types`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1allowed_types). |
| `combination_policy` | Conditional | string or null | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. `combination_policy`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1combination_policy). |
| `origin_policy` | Conditional | Alternative shapes (see declared variants) | Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. `origin_policy`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1origin_policy). |
| `requirement` | Conditional | string or null | Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Values: `"none"`, `"required"`. `requirement`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1requirement). |
| `resolution_mode` | Conditional | string or null | Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Values: `"quote"`, `"manual"`. `resolution_mode`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1resolution_mode). |
| `splitting_policy` | Conditional | string or null | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Values: `"whole_line_item"`, `"quantity_split_allowed"`. `splitting_policy`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1splitting_policy). |

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1

anyOf DeliveryProfileConfigurationPreviousAttributes.

- Optional: `allowed_types`, `combination_policy`, `origin_policy`, `requirement`, `resolution_mode`, `splitting_policy`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf variant 2.

- Undeclared: `allowed_types`, `combination_policy`, `origin_policy`, `requirement`, `resolution_mode`, `splitting_policy`.
- Value shape: null. Current delivery requirement and grouping policy. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.allowed_types

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.allowed_types variant 1

anyOf variant 1: Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service..

- Value shape: Array of string. Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.combination_policy

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.combination_policy variant 1

anyOf variant 1: Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group..

- Value shape: string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.combination_policy variant 2

anyOf variant 2.

- Value shape: null. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy

Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string or null | ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1origin_policy-variant-1location_id). |
| `type` | Conditional | string or null | Where items under the profile leave from. Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. `type`: [declared alternatives](../models/DeliveryProfileArchivedMerchantEventDataPreviousAttributes.md#deliveryprofilearchivedmerchanteventdatapreviousattributesconfiguration-variant-1origin_policy-variant-1type). |

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1

anyOf DeliveryProfileOriginPolicyPreviousAttributes.

- Optional: `location_id`, `type`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 2

anyOf variant 2.

- Undeclared: `location_id`, `type`.
- Value shape: null. Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1.location_id

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1.location_id variant 1

anyOf variant 1: ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise..

- Value shape: string. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1.type

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1.type variant 1

anyOf variant 1: Where items under the profile leave from..

- Value shape: string. Where items under the profile leave from. Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.origin_policy variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Where items under the profile leave from. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.requirement

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.requirement variant 1

anyOf variant 1: Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode..

- Value shape: string. Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Values: `"none"`, `"required"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.requirement variant 2

anyOf variant 2.

- Value shape: null. Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.resolution_mode

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.resolution_mode variant 1

anyOf variant 1: Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields..

- Value shape: string. Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Values: `"quote"`, `"manual"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.resolution_mode variant 2

anyOf variant 2.

- Value shape: null. Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. 

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.splitting_policy

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.splitting_policy variant 1

anyOf variant 1: Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments..

- Value shape: string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Values: `"whole_line_item"`, `"quantity_split_allowed"`.

### DeliveryProfileArchivedMerchantEventDataPreviousAttributes.configuration variant 1.splitting_policy variant 2

anyOf variant 2.

- Value shape: null. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. 

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

