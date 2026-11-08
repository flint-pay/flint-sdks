[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedMerchantEvent

The `payment_link.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PaymentLinkCreatedMerchantEventData](../models/PaymentLinkCreatedMerchantEventData.md#paymentlinkcreatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_link.created"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentLinkCreatedMerchantEventRequest](../models/PaymentLinkCreatedMerchantEventRequest.md#paymentlinkcreatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PaymentLinkCreatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### PaymentLinkCreatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentLink.md#paymentlink).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.custom_fields[]

Field definitions: [PaymentLinkResponse.data.custom_fields[]](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.event_config

Field definitions: [PaymentLinkResponse.data.event_config](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.image

Field definitions: [PaymentLinkResponse.data.image](../models/PaymentLinkResponse.md#paymentlinkresponsedataimage).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.inventory_routing_source

Field definitions: [PaymentLinkResponse.data.inventory_routing_source](../models/PaymentLinkResponse.md#paymentlinkresponsedatainventory_routing_source).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.redirects

Field definitions: [PaymentLinkResponse.data.redirects](../models/PaymentLinkResponse.md#paymentlinkresponsedataredirects).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.sales_summary

Field definitions: [PaymentLinkResponse.data.sales_summary](../models/PaymentLinkResponse.md#paymentlinkresponsedatasales_summary).

