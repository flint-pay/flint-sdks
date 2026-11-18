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
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`, `customer_account_url`. `object`: [field definitions](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1previous_attributes). |

### CheckoutSessionClosedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`, `customer_account_url`.

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

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributes).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.active_payment_attempt

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.buyer_contact

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.buyer_contact](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesbuyer_contact).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.can_apply_promotion_code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.can_apply_promotion_code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescan_apply_promotion_code).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.checkout_session_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.checkout_session_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescheckout_session_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.client_reference

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.closed_reason_message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.closed_reason_message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclosed_reason_message).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.custom_field_answers

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.delivery

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.delivery_method_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_method_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_method_ids).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.delivery_selection_required

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_selection_required](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_selection_required).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.expires_in_seconds

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_in_seconds](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesexpires_in_seconds).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.gift_card_challenge

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.gift_card_challenge](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesgift_card_challenge).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.inventory_reservation_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinventory_reservation_ids).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.invoice

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.is_in_recovery

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.is_in_recovery](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesis_in_recovery).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.page_origin

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.page_origin](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespage_origin).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.payment_intent_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intent_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intent_ids).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.payment_intents

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.payment_link

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.payment_link_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.payment_return_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_return_url).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.problems

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesproblems).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.redirects

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.redirects](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesredirects).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.refunds

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesstatus).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.subscription_plan_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_plan_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.subscription_terms

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.superseding_checkout_session_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.superseding_checkout_session_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessuperseding_checkout_session_id).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.supported_actions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessupported_actions).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.surface

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.surface](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessurface).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.terminal_reason

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesterminal_reason).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.type](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestype).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionClosedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

