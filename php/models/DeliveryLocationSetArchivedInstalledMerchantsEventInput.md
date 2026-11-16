[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetArchivedInstalledMerchantsEventInput

The `delivery_location_set.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_location_set.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributes). |

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliveryLocationSetInput.md#deliverylocationsetinput).

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfigurationInput.md#deliverylocationsetconfigurationinput) or null | Current member Locations. |
| `created_at` | Optional | string or null | Time the location set was created. `created_at`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `current_delivery_location_set_revision_id` | Optional | string or null | Immutable revision used for new quotes. `current_delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributescurrent_delivery_location_set_revision_id). |
| `delivery_location_set_id` | Optional | string or null | Stable delivery location set ID. `delivery_location_set_id`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_location_set_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Caller-owned metadata. |
| `name` | Optional | string or null | Merchant-facing location set name. `name`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `status` | Optional | string or null | Current location set lifecycle status. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | Time the location set last changed. `updated_at`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for location set writes. `version`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEventInput.md#deliverylocationsetarchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: Time the location set was created..

- Value shape: string. Time the location set was created. Time the location set was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the location set was created. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_location_set_revision_id

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_location_set_revision_id variant 1

anyOf variant 1: Immutable revision used for new quotes..

- Value shape: string. Immutable revision used for new quotes. Immutable revision used for new quotes. Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_location_set_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision used for new quotes. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_location_set_id

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_location_set_id variant 1

anyOf variant 1: Stable delivery location set ID..

- Value shape: string. Stable delivery location set ID. Stable delivery location set ID. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_location_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery location set ID. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Merchant-facing location set name..

- Value shape: string. Merchant-facing location set name. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing location set name. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Current location set lifecycle status..

- Value shape: string. Current location set lifecycle status. Values: `"active"`, `"archived"`.

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current location set lifecycle status. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: Time the location set last changed..

- Value shape: string. Time the location set last changed. Time the location set last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the location set last changed. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for location set writes..

- Value shape: integer. Optimistic-concurrency version for location set writes. Optimistic-concurrency version for location set writes. Format: `uint64`. minimum: `1`. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for location set writes. 

### DeliveryLocationSetArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

