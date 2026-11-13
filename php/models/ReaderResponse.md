[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderResponse

A response containing `Reader` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Reader](../models/Reader.md#reader) | Resource, collection, or operation result returned by this request. A card reader or Tap to Pay phone that takes in-person payments at a location. `data`: [field definitions](../models/ReaderResponse.md#readerresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReaderResponse.data

Resource, collection, or operation result returned by this request. A card reader or Tap to Pay phone that takes in-person payments at a location.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_intent_id` | Optional | string | The payment intent presented on the reader now. Omitted while the reader is idle. It follows the payment, so it doesn't advance the reader's `version` or send a reader event. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `connectivity` | Optional | [ReaderConnectivity](../models/ReaderConnectivity.md#readerconnectivity) | Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers. `connectivity`: [field definitions](../models/ReaderResponse.md#readerresponsedataconnectivity). |
| `created_at` | Required | string | When the reader was registered. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `device_id` | Optional | string | The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `is_simulated` | Required | boolean | `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. |
| `location_id` | Required | string | The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Required | Map of string | Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/ReaderResponse.md#readerresponsedatametadata). |
| `model` | Optional | string | The smart reader's model, read from the reader at registration. Smart readers only. Values: `"stripe_reader_s700"`, `"stripe_reader_s710"`, `"other"`. |
| `name` | Required | string | Your label for the reader. minLength: `1`. maxLength: `255`. |
| `reader_id` | Required | string | Unique identifier for the reader. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `serial_number` | Optional | string | The smart reader's serial number, read from the reader at registration. Smart readers only. |
| `status` | Required | string | Whether the reader can take payments. Values: `"active"`, `"archived"`. |
| `type` | Required | string | What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Values: `"smart_reader"`, `"tap_to_pay"`. |
| `updated_at` | Required | string | When the reader last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### ReaderResponse.data.connectivity

Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers.

Field definitions: [shared fields](ReaderConnectivityInput.md#readerconnectivityinput).

### ReaderResponse.data.metadata

Value shape: Map of string. Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### ReaderResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

