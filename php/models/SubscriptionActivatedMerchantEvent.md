[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedMerchantEvent

The `subscription.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [SubscriptionActivatedMerchantEventData](../models/SubscriptionActivatedMerchantEventData.md#subscriptionactivatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"subscription.activated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionActivatedMerchantEventRequest](../models/SubscriptionActivatedMerchantEventRequest.md#subscriptionactivatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### SubscriptionActivatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### SubscriptionActivatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](Subscription.md#subscription).

### SubscriptionActivatedMerchantEvent.data fields 1.object.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### SubscriptionActivatedMerchantEvent.data fields 1.object.cancellation_details

Field definitions: [SubscriptionResponse.data.cancellation_details](../models/SubscriptionResponse.md#subscriptionresponsedatacancellation_details).

### SubscriptionActivatedMerchantEvent.data fields 1.object.delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### SubscriptionActivatedMerchantEvent.data fields 1.object.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### SubscriptionActivatedMerchantEvent.data fields 1.object.end_after

Declared alternatives: [Subscription.end_after](../models/Subscription.md#subscriptionend_after).

### SubscriptionActivatedMerchantEvent.data fields 1.object.inventory_wait

Field definitions: [SubscriptionResponse.data.inventory_wait](../models/SubscriptionResponse.md#subscriptionresponsedatainventory_wait).

### SubscriptionActivatedMerchantEvent.data fields 1.object.last_payment_error

Field definitions: [SubscriptionResponse.data.last_payment_error](../models/SubscriptionResponse.md#subscriptionresponsedatalast_payment_error).

### SubscriptionActivatedMerchantEvent.data fields 1.object.line_items[]

Field definitions: [SubscriptionResponse.data.line_items[]](../models/SubscriptionResponse.md#subscriptionresponsedataline_items).

### SubscriptionActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionActivatedMerchantEvent.data fields 1.object.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionActivatedMerchantEvent.data fields 1.object.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionActivatedMerchantEvent.data fields 1.object.service_location

Field definitions: [SubscriptionResponse.data.service_location](../models/SubscriptionResponse.md#subscriptionresponsedataservice_location).

### SubscriptionActivatedMerchantEvent.data fields 1.object.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

