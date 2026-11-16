[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderArchivedInstalledMerchantsEventInput

The `reader.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"reader.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReaderArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookReaderInput](../models/WebhookReaderInput.md#webhookreaderinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`. `object`: [field definitions](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributes). |

### ReaderArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`.

Field definitions: [shared fields](WebhookReaderInput.md#webhookreaderinput).

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `connectivity` | Optional | [ReaderConnectivityInput](../models/ReaderConnectivityInput.md#readerconnectivityinput) or null | Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. |
| `created_at` | Optional | string or null | When the reader was registered. `created_at`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `device_id` | Optional | string or null | The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. `device_id`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesdevice_id). |
| `is_simulated` | Optional | boolean or null | `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. `is_simulated`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesis_simulated). |
| `location_id` | Optional | string or null | The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. `location_id`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributeslocation_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Your key-value pairs for the reader. |
| `model` | Optional | string or null | The smart reader's model, read from the reader at registration. Smart readers only. Values: `"stripe_reader_s700"`, `"stripe_reader_s710"`, `"other"`. `model`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesmodel). |
| `name` | Optional | string or null | Your label for the reader. `name`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `reader_id` | Optional | string or null | Unique identifier for the reader. `reader_id`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesreader_id). |
| `serial_number` | Optional | string or null | The smart reader's serial number, read from the reader at registration. Smart readers only. `serial_number`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesserial_number). |
| `status` | Optional | string or null | Whether the reader can take payments. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `type` | Optional | string or null | What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Values: `"smart_reader"`, `"tap_to_pay"`. `type`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributestype). |
| `updated_at` | Optional | string or null | When the reader last changed. `updated_at`: [declared alternatives](../models/ReaderArchivedInstalledMerchantsEventInput.md#readerarchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesversion). |

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the reader was registered..

- Value shape: string. When the reader was registered. When the reader was registered. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reader was registered. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.device_id

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.device_id variant 1

anyOf variant 1: The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set..

- Value shape: string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.device_id variant 2

anyOf variant 2.

- Value shape: null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.is_simulated

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.is_simulated variant 1

anyOf variant 1: `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`..

- Value shape: boolean. `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.is_simulated variant 2

anyOf variant 2.

- Value shape: null. `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.location_id

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.location_id variant 1

anyOf variant 1: The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again..

- Value shape: string. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.location_id variant 2

anyOf variant 2.

- Value shape: null. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.model

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.model variant 1

anyOf variant 1: The smart reader's model, read from the reader at registration. Smart readers only..

- Value shape: string. The smart reader's model, read from the reader at registration. Smart readers only. Values: `"stripe_reader_s700"`, `"stripe_reader_s710"`, `"other"`.

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.model variant 2

anyOf variant 2.

- Value shape: null. The smart reader's model, read from the reader at registration. Smart readers only. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Your label for the reader..

- Value shape: string. Your label for the reader. Your label for the reader. minLength: `1`. maxLength: `255`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Your label for the reader. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.reader_id

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.reader_id variant 1

anyOf variant 1: Unique identifier for the reader..

- Value shape: string. Unique identifier for the reader. Unique identifier for the reader. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.reader_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the reader. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.serial_number

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.serial_number variant 1

anyOf variant 1: The smart reader's serial number, read from the reader at registration. Smart readers only..

- Value shape: string. The smart reader's serial number, read from the reader at registration. Smart readers only. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.serial_number variant 2

anyOf variant 2.

- Value shape: null. The smart reader's serial number, read from the reader at registration. Smart readers only. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether the reader can take payments..

- Value shape: string. Whether the reader can take payments. Values: `"active"`, `"archived"`.

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reader can take payments. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.type

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.type variant 1

anyOf variant 1: What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app..

- Value shape: string. What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Values: `"smart_reader"`, `"tap_to_pay"`.

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.type variant 2

anyOf variant 2.

- Value shape: null. What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the reader last changed..

- Value shape: string. When the reader last changed. When the reader last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the reader last changed. 

### ReaderArchivedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEventInput.data.previous_attributes.version](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesversion).

### ReaderArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

