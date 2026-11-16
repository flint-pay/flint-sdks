[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileArchivedInstalledMerchantsEvent

The `delivery_profile.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_profile.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DeliveryProfileArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookDeliveryProfile](../models/WebhookDeliveryProfile.md#webhookdeliveryprofile) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`. `object`: [field definitions](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributes). |

### DeliveryProfileArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.

Field definitions: [shared fields](WebhookDeliveryProfile.md#webhookdeliveryprofile).

### DeliveryProfileArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryProfileConfigurationPreviousAttributes](../models/DeliveryProfileConfigurationPreviousAttributes.md#deliveryprofileconfigurationpreviousattributes) or null | Current delivery requirement and grouping policy. |
| `created_at` | Optional | string or null | Time the profile was created. `created_at`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `current_delivery_profile_revision_id` | Optional | string or null | Immutable revision used for new line-item snapshots. `current_delivery_profile_revision_id`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributescurrent_delivery_profile_revision_id). |
| `delivery_profile_id` | Optional | string or null | Stable delivery profile ID. `delivery_profile_id`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributesdelivery_profile_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `is_default` | Optional | boolean or null | True only when this profile is the current physical catalog default. `is_default`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributesis_default). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEvent.md#deliverylocationsetarchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Merchant-facing profile name. `name`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributesname). |
| `status` | Optional | string or null | Current profile lifecycle status. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | Time the profile last changed. `updated_at`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for profile writes. `version`: [declared alternatives](../models/DeliveryProfileArchivedInstalledMerchantsEvent.md#deliveryprofilearchivedinstalledmerchantseventdataprevious_attributesversion). |

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: Time the profile was created..

- Value shape: string. Time the profile was created. Time the profile was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the profile was created. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.current_delivery_profile_revision_id

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.current_delivery_profile_revision_id variant 1

anyOf variant 1: Immutable revision used for new line-item snapshots..

- Value shape: string. Immutable revision used for new line-item snapshots. Immutable revision used for new line-item snapshots. Example: `"dprofr_01KEZF7C00K1P3FXGHCF46YQ1F"`. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.current_delivery_profile_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision used for new line-item snapshots. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id variant 1

anyOf variant 1: Stable delivery profile ID..

- Value shape: string. Stable delivery profile ID. Stable delivery profile ID. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery profile ID. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.is_default

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.is_default variant 1

anyOf variant 1: True only when this profile is the current physical catalog default..

- Value shape: boolean. True only when this profile is the current physical catalog default. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.is_default variant 2

anyOf variant 2.

- Value shape: null. True only when this profile is the current physical catalog default. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/DeliveryLocationSetArchivedInstalledMerchantsEvent.md#deliverylocationsetarchivedinstalledmerchantseventdataprevious_attributesmetadata).

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.name

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Merchant-facing profile name..

- Value shape: string. Merchant-facing profile name. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing profile name. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.status

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Current profile lifecycle status..

- Value shape: string. Current profile lifecycle status. Values: `"active"`, `"archived"`.

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current profile lifecycle status. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: Time the profile last changed..

- Value shape: string. Time the profile last changed. Time the profile last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the profile last changed. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.version

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for profile writes..

- Value shape: integer. Optimistic-concurrency version for profile writes. Optimistic-concurrency version for profile writes. Format: `uint64`. minimum: `1`. 

### DeliveryProfileArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for profile writes. 

### DeliveryProfileArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

