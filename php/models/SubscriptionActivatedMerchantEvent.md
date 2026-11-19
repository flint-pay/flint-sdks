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
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/SubscriptionActivatedMerchantEvent.md#subscriptionactivatedmerchanteventdata-fields-1previous_attributes). |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdataactor). |

### SubscriptionActivatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](Subscription.md#subscription).

### SubscriptionActivatedMerchantEvent.data fields 1.object.billing_hold

Field definitions: [SubscriptionResponse.data.billing_hold](../models/SubscriptionResponse.md#subscriptionresponsedatabilling_hold).

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

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributes).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_anchor_day

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_anchor_day).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_hold

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_hold).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_interval

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_interval_count

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_count](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_count).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_interval_options

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_options](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_options).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_schedule_owner

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_schedule_owner](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_schedule_owner).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.billing_schedule_waiting_started_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.cancel_at_period_end

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.cancel_at_period_end](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancel_at_period_end).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.cancellation_details

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_reason](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_reason).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.completed_cycles

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.completed_cycles](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescompleted_cycles).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.contract_end_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_end_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_end_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.contract_start_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_start_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_start_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.current_period_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.current_period_start_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.customer_id](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescustomer_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.deliveries_per_period

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.deliveries_per_period](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdeliveries_per_period).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.delivery

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.delivery_hold

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.delivery_interval

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_interval](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.delivery_interval_count

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_interval_count](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval_count).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.end_after

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesexpires_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.gift_recipient

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesgift_recipient).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.idempotency_key](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesidempotency_key).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.inventory_wait

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesinventory_wait).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.is_awaiting_billing_schedule

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesis_awaiting_billing_schedule).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.last_payment_error

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributeslast_payment_error).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.missed_billing_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.missed_billing_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesmissed_billing_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.next_billing_at

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.next_billing_at](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesnext_billing_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.next_delivery_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_delivery_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.next_retry_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.next_retry_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_retry_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.open_renewal_order_id

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.open_renewal_order_id](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesopen_renewal_order_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.pause_reason

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.pause_reason](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespause_reason).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.paused_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.payment_method

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.payment_method_due_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_due_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.payment_method_id

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.promotions

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.prorate_first_period

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.prorate_first_period](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesprorate_first_period).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.remaining_cycles

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_cycles](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_cycles).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.remaining_prepaid_deliveries

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_prepaid_deliveries](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_prepaid_deliveries).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.resume_requested_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.resume_requested_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesresume_requested_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.scheduled_cancel_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_cancel_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.scheduled_plan_change

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.scheduled_promotions

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_promotions).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.scheduled_resume_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_resume_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.service_location

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.starts_at

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesstarts_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.status](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesstatus).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.subscription_id

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.subscription_plan

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.subscription_plan_id

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_plan_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.supported_actions](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessupported_actions).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.terms_type

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.terms_type](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesterms_type).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.test_clock_id

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestest_clock_id).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.trial_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.upcoming_delivery_hold

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesupcoming_delivery_hold).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.version](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesversion).

### SubscriptionActivatedMerchantEvent.data fields 1.actor

Field definitions: [ReturnCanceledMerchantEventData.actor](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdataactor).

