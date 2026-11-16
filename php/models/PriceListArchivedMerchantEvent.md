[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListArchivedMerchantEvent

The `price_list.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PriceListArchivedMerchantEventData](../models/PriceListArchivedMerchantEventData.md#pricelistarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PriceListArchivedMerchantEvent.md#pricelistarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"price_list.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PriceListArchivedMerchantEventRequest](../models/PriceListArchivedMerchantEventRequest.md#pricelistarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PriceListArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PriceListArchivedMerchantEvent.md#pricelistarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PriceListArchivedMerchantEvent.md#pricelistarchivedmerchanteventdata-fields-1previous_attributes). |

### PriceListArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PriceList.md#pricelist).

### PriceListArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [PriceListResourceResponse.data.metadata](../models/PriceListResourceResponse.md#pricelistresourceresponsedatametadata).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributes).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.archived_at

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.archived_at](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesarchived_at).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.created_at](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributescreated_at).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.currency

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.currency](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributescurrency).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.customer_segments

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.customer_segments](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributescustomer_segments).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.external_reference_id](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesexternal_reference_id).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesmerchant_id).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.metadata](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesmetadata).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.name](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesname).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.price_count

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.price_count](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesprice_count).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.price_list_id

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.price_list_id](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesprice_list_id).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.status](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesstatus).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.updated_at](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesupdated_at).

### PriceListArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PriceListArchivedMerchantEventDataPreviousAttributes.version](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesversion).

