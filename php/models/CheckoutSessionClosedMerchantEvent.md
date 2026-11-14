[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedMerchantEvent

The `checkout_session.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CheckoutSessionClosedMerchantEventData](../models/CheckoutSessionClosedMerchantEventData.md#checkoutsessionclosedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"checkout_session.closed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CheckoutSessionClosedMerchantEventRequest](../models/CheckoutSessionClosedMerchantEventRequest.md#checkoutsessionclosedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CheckoutSessionClosedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`. `object`: [field definitions](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### CheckoutSessionClosedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventData.md#checkoutsessionclosedmerchanteventdataobject-fields-1).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.active_payment_attempt

Field definitions: [CheckoutSessionResponse.data.active_payment_attempt](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataactive_payment_attempt).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.buyer_contact

Field definitions: [CheckoutSessionResponse.data.buyer_contact](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.delivery

Field definitions: [CheckoutSessionResponse.data.delivery](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadelivery).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.gift_card_challenge

Field definitions: [CheckoutSessionResponse.data.gift_card_challenge](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatagift_card_challenge).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.invoice

Declared alternatives: [CheckoutSessionResponse.data.invoice](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatainvoice).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.payment_link

Declared alternatives: [CheckoutSessionResponse.data.payment_link](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_link).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.redirects

Field definitions: [CheckoutSessionResponse.data.redirects](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.refunds[]

Field definitions: [CheckoutSessionResponse.data.refunds[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefunds).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.subscription_terms

Field definitions: [CheckoutSessionResponse.data.subscription_terms](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms).

