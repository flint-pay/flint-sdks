[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedMerchantEvent

The `order.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [OrderClosedMerchantEventData](../models/OrderClosedMerchantEventData.md#orderclosedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"order.closed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [OrderClosedMerchantEventRequest](../models/OrderClosedMerchantEventRequest.md#orderclosedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### OrderClosedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_attempt`, `payment_collection`, `setup_collection`. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_attempt`, `payment_collection`, `setup_collection`. `object`: [field definitions](../models/OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### OrderClosedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.

Field definitions: [shared fields](Order.md#order).

### OrderClosedMerchantEvent.data fields 1.object.active_payment_attempt

Field definitions: [OrderResponse.data.active_payment_attempt](../models/OrderResponse.md#orderresponsedataactive_payment_attempt).

### OrderClosedMerchantEvent.data fields 1.object.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### OrderClosedMerchantEvent.data fields 1.object.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### OrderClosedMerchantEvent.data fields 1.object.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### OrderClosedMerchantEvent.data fields 1.object.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### OrderClosedMerchantEvent.data fields 1.object.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### OrderClosedMerchantEvent.data fields 1.object.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### OrderClosedMerchantEvent.data fields 1.object.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### OrderClosedMerchantEvent.data fields 1.object.fulfillments[]

Field definitions: [OrderResponse.data.fulfillments[]](../models/OrderResponse.md#orderresponsedatafulfillments).

### OrderClosedMerchantEvent.data fields 1.object.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### OrderClosedMerchantEvent.data fields 1.object.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### OrderClosedMerchantEvent.data fields 1.object.inventory_routing_source

Field definitions: [OrderResponse.data.inventory_routing_source](../models/OrderResponse.md#orderresponsedatainventory_routing_source).

### OrderClosedMerchantEvent.data fields 1.object.line_items[]

Field definitions: [OrderResponse.data.line_items[]](../models/OrderResponse.md#orderresponsedataline_items).

### OrderClosedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### OrderClosedMerchantEvent.data fields 1.object.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### OrderClosedMerchantEvent.data fields 1.object.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### OrderClosedMerchantEvent.data fields 1.object.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### OrderClosedMerchantEvent.data fields 1.object.tips[]

Field definitions: [OrderResponse.data.tips[]](../models/OrderResponse.md#orderresponsedatatips).

