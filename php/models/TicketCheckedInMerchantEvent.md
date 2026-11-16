[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketCheckedInMerchantEvent

The `ticket.checked_in` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [TicketCheckedInMerchantEventData](../models/TicketCheckedInMerchantEventData.md#ticketcheckedinmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TicketCheckedInMerchantEvent.md#ticketcheckedinmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"ticket.checked_in"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TicketCheckedInMerchantEventRequest](../models/TicketCheckedInMerchantEventRequest.md#ticketcheckedinmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### TicketCheckedInMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TicketCheckedInMerchantEvent.md#ticketcheckedinmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TicketCheckedInMerchantEvent.md#ticketcheckedinmerchanteventdata-fields-1previous_attributes). |

### TicketCheckedInMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](Ticket.md#ticket).

### TicketCheckedInMerchantEvent.data fields 1.object.check_in_method

Declared alternatives: [TicketResponse.data.check_in_method](../models/TicketResponse.md#ticketresponsedatacheck_in_method).

### TicketCheckedInMerchantEvent.data fields 1.object.order

Field definitions: [TicketResponse.data.order](../models/TicketResponse.md#ticketresponsedataorder).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributes).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.admission_code

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.admission_code](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesadmission_code).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.admission_code_last4

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.admission_code_last4](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesadmission_code_last4).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.attendee_name

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.attendee_name](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesattendee_name).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.check_in_method

Declared alternatives: [TicketResponse.data.check_in_method](../models/TicketResponse.md#ticketresponsedatacheck_in_method).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.checked_in_at

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.checked_in_at](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributeschecked_in_at).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.created_at](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributescreated_at).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.order](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesorder).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.order_id](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesorder_id).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.order_line_item_id

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.order_line_item_id](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesorder_line_item_id).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.payment_link_id

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.payment_link_id](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributespayment_link_id).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.status](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesstatus).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.supported_actions](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributessupported_actions).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.ticket_id

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.ticket_id](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesticket_id).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.ticket_number

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.ticket_number](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesticket_number).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.updated_at](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesupdated_at).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### TicketCheckedInMerchantEvent.data fields 1.previous_attributes.voided_at

Declared alternatives: [TicketCheckedInMerchantEventDataPreviousAttributes.voided_at](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesvoided_at).

