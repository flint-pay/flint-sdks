[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionExpiredMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CheckoutSessionExpiredMerchantEventDataObject](../models/CheckoutSessionExpiredMerchantEventDataObject.md#checkoutsessionexpiredmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`. `object`: [field definitions](../models/CheckoutSessionExpiredMerchantEventData.md#checkoutsessionexpiredmerchanteventdataobject-fields-1). |
| `previous_attributes` | Optional | [CheckoutSessionExpiredMerchantEventDataPreviousAttributes](../models/CheckoutSessionExpiredMerchantEventDataPreviousAttributes.md#checkoutsessionexpiredmerchanteventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CheckoutSessionExpiredMerchantEventData.md#checkoutsessionexpiredmerchanteventdataprevious_attributes). |

### CheckoutSessionExpiredMerchantEventData.object fields 1

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`, `save_payment_method_types`, `save_payment_method_requires_verification`, `pay_to_new_address_requires_verification`, `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`, `platform_fee`.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventData.md#checkoutsessionclosedmerchanteventdataobject-fields-1).

### CheckoutSessionExpiredMerchantEventData.object fields 1.active_payment_attempt

Field definitions: [CheckoutSessionResponse.data.active_payment_attempt](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataactive_payment_attempt).

### CheckoutSessionExpiredMerchantEventData.object fields 1.buyer_contact

Field definitions: [CheckoutSessionResponse.data.buyer_contact](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact).

### CheckoutSessionExpiredMerchantEventData.object fields 1.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### CheckoutSessionExpiredMerchantEventData.object fields 1.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### CheckoutSessionExpiredMerchantEventData.object fields 1.delivery

Field definitions: [CheckoutSessionResponse.data.delivery](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadelivery).

### CheckoutSessionExpiredMerchantEventData.object fields 1.gift_card_challenge

Field definitions: [CheckoutSessionResponse.data.gift_card_challenge](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatagift_card_challenge).

### CheckoutSessionExpiredMerchantEventData.object fields 1.invoice

Declared alternatives: [CheckoutSessionResponse.data.invoice](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatainvoice).

### CheckoutSessionExpiredMerchantEventData.object fields 1.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CheckoutSessionExpiredMerchantEventData.object fields 1.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### CheckoutSessionExpiredMerchantEventData.object fields 1.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### CheckoutSessionExpiredMerchantEventData.object fields 1.payment_link

Declared alternatives: [CheckoutSessionResponse.data.payment_link](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_link).

### CheckoutSessionExpiredMerchantEventData.object fields 1.redirects

Field definitions: [CheckoutSessionResponse.data.redirects](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects).

### CheckoutSessionExpiredMerchantEventData.object fields 1.refunds[]

Field definitions: [CheckoutSessionResponse.data.refunds[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefunds).

### CheckoutSessionExpiredMerchantEventData.object fields 1.subscription_terms

Field definitions: [CheckoutSessionResponse.data.subscription_terms](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms).

### CheckoutSessionExpiredMerchantEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventData.md#checkoutsessionclosedmerchanteventdataprevious_attributes).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.can_apply_promotion_code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.can_apply_promotion_code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescan_apply_promotion_code).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.checkout_session_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.checkout_session_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescheckout_session_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.client_reference

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.closed_reason_message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.closed_reason_message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclosed_reason_message).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.custom_field_answers

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.customer_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.delivery_method_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_method_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_method_ids).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.delivery_selection_required

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery_selection_required](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery_selection_required).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.expires_in_seconds

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.expires_in_seconds](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesexpires_in_seconds).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.inventory_reservation_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.inventory_reservation_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinventory_reservation_ids).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.invoice_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.invoice_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesinvoice_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.is_in_recovery

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.is_in_recovery](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesis_in_recovery).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.order_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.page_origin

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.page_origin](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespage_origin).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.payment_intent_ids

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intent_ids](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intent_ids).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.payment_intents

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.payment_link_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_link_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_link_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.payment_return_url

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_return_url](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_return_url).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.problems

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.problems](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesproblems).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.refunds

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.status

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.status](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesstatus).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.subscription_plan_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_plan_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.subscription_terms

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.superseding_checkout_session_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.superseding_checkout_session_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessuperseding_checkout_session_id).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.supported_actions

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.supported_actions](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessupported_actions).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.surface

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.surface](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessurface).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.terminal_reason

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.terminal_reason](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesterminal_reason).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.type

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.type](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributestype).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutSessionExpiredMerchantEventData.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

