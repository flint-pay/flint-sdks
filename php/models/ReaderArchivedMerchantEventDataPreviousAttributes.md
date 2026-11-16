[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `connectivity` | Optional | Alternative shapes (see declared variants) | Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. `connectivity`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesconnectivity). |
| `created_at` | Optional | string or null | When the reader was registered. `created_at`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributescreated_at). |
| `device_id` | Optional | string or null | The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. `device_id`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesdevice_id). |
| `is_simulated` | Optional | boolean or null | `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. `is_simulated`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesis_simulated). |
| `location_id` | Optional | string or null | The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. `location_id`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributeslocation_id). |
| `metadata` | Optional | Map of string or null | Your key-value pairs for the reader. `metadata`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesmetadata). |
| `model` | Optional | string or null | The smart reader's model, read from the reader at registration. Smart readers only. Values: `"stripe_reader_s700"`, `"stripe_reader_s710"`, `"other"`. `model`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesmodel). |
| `name` | Optional | string or null | Your label for the reader. `name`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesname). |
| `reader_id` | Optional | string or null | Unique identifier for the reader. `reader_id`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesreader_id). |
| `serial_number` | Optional | string or null | The smart reader's serial number, read from the reader at registration. Smart readers only. `serial_number`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesserial_number). |
| `status` | Optional | string or null | Whether the reader can take payments. Values: `"active"`, `"archived"`. `status`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesstatus). |
| `type` | Optional | string or null | What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Values: `"smart_reader"`, `"tap_to_pay"`. `type`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the reader last changed. `updated_at`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity

Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_seen_at` | Conditional | string or null or null | When the reader last reached Stripe. Omitted when it never has. `last_seen_at`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesconnectivity-variant-1last_seen_at). |
| `observed_at` | Conditional | string or null | When Flint observed this. `observed_at`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesconnectivity-variant-1observed_at). |
| `status` | Conditional | string or null | Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`. `status`: [declared alternatives](../models/ReaderArchivedMerchantEventDataPreviousAttributes.md#readerarchivedmerchanteventdatapreviousattributesconnectivity-variant-1status). |

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1

anyOf ReaderConnectivityPreviousAttributes.

- Optional: `last_seen_at`, `observed_at`, `status`.

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 2

anyOf variant 2.

- Undeclared: `last_seen_at`, `observed_at`, `status`.
- Value shape: null. Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. 

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.last_seen_at

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.last_seen_at variant 1

anyOf variant 1: When the reader last reached Stripe. Omitted when it never has..

- Value shape: (string or null). When the reader last reached Stripe. Omitted when it never has. When the reader last reached Stripe. Omitted when it never has. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.last_seen_at variant 2

anyOf variant 2.

- Value shape: null. When the reader last reached Stripe. Omitted when it never has. 

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.observed_at

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.observed_at variant 1

anyOf variant 1: When Flint observed this..

- Value shape: string. When Flint observed this. When Flint observed this. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint observed this. 

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.status

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.status variant 1

anyOf variant 1: Whether the reader was reaching Stripe when Flint last observed it..

- Value shape: string. Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`.

### ReaderArchivedMerchantEventDataPreviousAttributes.connectivity variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reader was reaching Stripe when Flint last observed it. 

### ReaderArchivedMerchantEventDataPreviousAttributes.created_at

### ReaderArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the reader was registered..

- Value shape: string. When the reader was registered. When the reader was registered. Format: `date-time`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reader was registered. 

### ReaderArchivedMerchantEventDataPreviousAttributes.device_id

### ReaderArchivedMerchantEventDataPreviousAttributes.device_id variant 1

anyOf variant 1: The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set..

- Value shape: string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. 

### ReaderArchivedMerchantEventDataPreviousAttributes.device_id variant 2

anyOf variant 2.

- Value shape: null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. 

### ReaderArchivedMerchantEventDataPreviousAttributes.is_simulated

### ReaderArchivedMerchantEventDataPreviousAttributes.is_simulated variant 1

anyOf variant 1: `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`..

- Value shape: boolean. `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.is_simulated variant 2

anyOf variant 2.

- Value shape: null. `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.location_id

### ReaderArchivedMerchantEventDataPreviousAttributes.location_id variant 1

anyOf variant 1: The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again..

- Value shape: string. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. 

### ReaderArchivedMerchantEventDataPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. 

### ReaderArchivedMerchantEventDataPreviousAttributes.metadata

### ReaderArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Your key-value pairs for the reader. Map values: maxLength: `4096`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Your key-value pairs for the reader. 

### ReaderArchivedMerchantEventDataPreviousAttributes.model

### ReaderArchivedMerchantEventDataPreviousAttributes.model variant 1

anyOf variant 1: The smart reader's model, read from the reader at registration. Smart readers only..

- Value shape: string. The smart reader's model, read from the reader at registration. Smart readers only. Values: `"stripe_reader_s700"`, `"stripe_reader_s710"`, `"other"`.

### ReaderArchivedMerchantEventDataPreviousAttributes.model variant 2

anyOf variant 2.

- Value shape: null. The smart reader's model, read from the reader at registration. Smart readers only. 

### ReaderArchivedMerchantEventDataPreviousAttributes.name

### ReaderArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Your label for the reader..

- Value shape: string. Your label for the reader. Your label for the reader. minLength: `1`. maxLength: `255`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Your label for the reader. 

### ReaderArchivedMerchantEventDataPreviousAttributes.reader_id

### ReaderArchivedMerchantEventDataPreviousAttributes.reader_id variant 1

anyOf variant 1: Unique identifier for the reader..

- Value shape: string. Unique identifier for the reader. 

### ReaderArchivedMerchantEventDataPreviousAttributes.reader_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the reader. 

### ReaderArchivedMerchantEventDataPreviousAttributes.serial_number

### ReaderArchivedMerchantEventDataPreviousAttributes.serial_number variant 1

anyOf variant 1: The smart reader's serial number, read from the reader at registration. Smart readers only..

- Value shape: string. The smart reader's serial number, read from the reader at registration. Smart readers only. 

### ReaderArchivedMerchantEventDataPreviousAttributes.serial_number variant 2

anyOf variant 2.

- Value shape: null. The smart reader's serial number, read from the reader at registration. Smart readers only. 

### ReaderArchivedMerchantEventDataPreviousAttributes.status

### ReaderArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the reader can take payments..

- Value shape: string. Whether the reader can take payments. Values: `"active"`, `"archived"`.

### ReaderArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the reader can take payments. 

### ReaderArchivedMerchantEventDataPreviousAttributes.type

### ReaderArchivedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app..

- Value shape: string. What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Values: `"smart_reader"`, `"tap_to_pay"`.

### ReaderArchivedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. 

### ReaderArchivedMerchantEventDataPreviousAttributes.updated_at

### ReaderArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the reader last changed..

- Value shape: string. When the reader last changed. When the reader last changed. Format: `date-time`. 

### ReaderArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the reader last changed. 

### ReaderArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

