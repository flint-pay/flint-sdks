[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneArchivedInstalledMerchantsEventInput

The `delivery_zone.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_zone.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DeliveryZoneArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributes). |

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliveryZoneInput.md#deliveryzoneinput).

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) or null | Current geographic eligibility conditions. `configuration`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributesconfiguration). |
| `created_at` | Optional | string or null | Time the zone was created. `created_at`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `current_delivery_zone_revision_id` | Optional | string or null | Immutable revision used for new quotes. `current_delivery_zone_revision_id`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributescurrent_delivery_zone_revision_id). |
| `delivery_zone_id` | Optional | string or null | Stable delivery zone ID. `delivery_zone_id`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributesdelivery_zone_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Caller-owned metadata. |
| `name` | Optional | string or null | Merchant-facing zone name. `name`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `status` | Optional | string or null | Current zone lifecycle status. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | Time the zone last changed. `updated_at`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for zone writes. `version`: [declared alternatives](../models/DeliveryZoneArchivedInstalledMerchantsEventInput.md#deliveryzonearchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration

Current geographic eligibility conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryCountryConditionInput](../models/DeliveryCountryConditionInput.md#deliverycountryconditioninput) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. |
| `not` | Conditional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionInput](../models/DeliveryPostalCodeConditionInput.md#deliverypostalcodeconditioninput) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateConditionInput](../models/DeliveryStateConditionInput.md#deliverystateconditioninput) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 1

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 2

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 3

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 4

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 5

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 6

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 7

anyOf DeliveryZoneConfiguration: Current geographic eligibility conditions.; oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.configuration variant 8

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `not`, `postal_code`, `radius`, `state`.
- Value shape: null. Current geographic eligibility conditions. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: Time the zone was created..

- Value shape: string. Time the zone was created. Time the zone was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the zone was created. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_zone_revision_id

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_zone_revision_id variant 1

anyOf variant 1: Immutable revision used for new quotes..

- Value shape: string. Immutable revision used for new quotes. Immutable revision used for new quotes. Example: `"dzoner_01KEZF7C00DF2H9VW29JN861K6"`. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_zone_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision used for new quotes. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_zone_id

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_zone_id variant 1

anyOf variant 1: Stable delivery zone ID..

- Value shape: string. Stable delivery zone ID. Stable delivery zone ID. Example: `"dzone_01KEZF7C005RY7KGCN4M2CH5WP"`. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_zone_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery zone ID. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Merchant-facing zone name..

- Value shape: string. Merchant-facing zone name. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing zone name. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Current zone lifecycle status..

- Value shape: string. Current zone lifecycle status. Values: `"active"`, `"archived"`.

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current zone lifecycle status. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: Time the zone last changed..

- Value shape: string. Time the zone last changed. Time the zone last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the zone last changed. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.version

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for zone writes..

- Value shape: integer. Optimistic-concurrency version for zone writes. Optimistic-concurrency version for zone writes. Format: `uint64`. minimum: `1`. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for zone writes. 

### DeliveryZoneArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

