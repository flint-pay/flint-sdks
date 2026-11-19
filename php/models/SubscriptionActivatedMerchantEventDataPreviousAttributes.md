[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer or null | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. `billing_anchor_day`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_anchor_day). |
| `billing_hold` | Optional | [SubscriptionBillingHoldPreviousAttributes](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributes) or null | Configuration issue or automatic retry delaying billing, with the first detection time. Flint retries automatically without starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or a card decline starts payment recovery. Included only in merchant responses. `billing_hold`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_hold). |
| `billing_interval` | Optional | string or null | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing_interval units between charges. Changes with billing_interval. `billing_interval_count`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. `billing_interval_options`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_options). |
| `billing_schedule_owner` | Optional | string or null | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. `billing_schedule_owner`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_schedule_owner). |
| `billing_schedule_waiting_started_at` | Optional | string or null | RFC3339 timestamp. `billing_schedule_waiting_started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `cancel_at_period_end` | Optional | boolean or null | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. `cancel_at_period_end`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancel_at_period_end). |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `cancellation_details` | Optional | [SubscriptionCancellationDetailsPreviousAttributes](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributes) or null | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. `cancellation_details`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details). |
| `cancellation_reason` | Optional | string or null | Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`. `cancellation_reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_reason). |
| `completed_cycles` | Optional | integer or null | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. `completed_cycles`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescompleted_cycles). |
| `contract_end_at` | Optional | string or null | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. `contract_end_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_end_at). |
| `contract_start_at` | Optional | string or null | When the recorded contract term started. Does not move when the subscription pauses or changes plan. `contract_start_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_start_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_end_at` | Optional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_start_at` | Optional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescustomer_id). |
| `deliveries_per_period` | Optional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdeliveries_per_period). |
| `delivery` | Optional | [SubscriptionDeliveryPreviousAttributes](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributes) or null | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. `delivery`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery). |
| `delivery_hold` | Optional | [SubscriptionDeliveryHoldPreviousAttributes](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributes) or null | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. `delivery_hold`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold). |
| `delivery_interval` | Optional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval). |
| `delivery_interval_count` | Optional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval_count). |
| `early_termination_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. |
| `end_after` | Optional | (Alternative shapes (see declared variants) or null) or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. `end_after`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after). |
| `expires_at` | Optional | string or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. `expires_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesexpires_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientPreviousAttributes](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributes) or null | Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. `gift_recipient`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesgift_recipient). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key). |
| `inventory_wait` | Optional | [SubscriptionInventoryWaitPreviousAttributes](../models/SubscriptionInventoryWaitPreviousAttributes.md#subscriptioninventorywaitpreviousattributes) or null | Renewal waiting for stock. Buyers receive only started_at. `inventory_wait`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesinventory_wait). |
| `is_awaiting_billing_schedule` | Optional | boolean or null | True while an active or trialing subscription on an external billing schedule has no next billing date. `is_awaiting_billing_schedule`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesis_awaiting_billing_schedule). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. `last_payment_error`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributeslast_payment_error). |
| `line_items` | Optional | Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes) or null | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `missed_billing_at` | Optional | string or null | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. `missed_billing_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesmissed_billing_at). |
| `next_billing_at` | Optional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesnext_billing_at). |
| `next_delivery_at` | Optional | string or null | When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. `next_delivery_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_delivery_at). |
| `next_retry_at` | Optional | string or null | Recorded automatic payment retry time. Null when no retry time is available. `next_retry_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_retry_at). |
| `open_renewal_order_id` | Optional | string or null | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. `open_renewal_order_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesopen_renewal_order_id). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. |
| `pause_reason` | Optional | string or null | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. `pause_reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespause_reason). |
| `paused_at` | Optional | string or null | RFC3339 timestamp. `paused_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `paused_delivery_hold` | Optional | [SubscriptionPausedDeliveryHoldPreviousAttributes](../models/SubscriptionPausedDeliveryHoldPreviousAttributes.md#subscriptionpauseddeliveryholdpreviousattributes) or null | The delivery hold that expired and paused the subscription. Null when no stored expiry reason exists, including a manual pause during an active hold, or the subscription is no longer paused for delivery action. |
| `payment_link_id` | Optional | string or null | The payment link that started this subscription, when there was one. `payment_link_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_method` | Optional | [ExpandedPaymentMethodSummaryPreviousAttributes](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributes) or null | Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. `payment_method`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method). |
| `payment_method_due_at` | Optional | string or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. `payment_method_due_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_due_at). |
| `payment_method_id` | Optional | string or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. `payment_method_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_id). |
| `promotions` | Optional | Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes) or null | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions). |
| `prorate_first_period` | Optional | boolean or null | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. `prorate_first_period`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesprorate_first_period). |
| `recurring_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as null. Retrieve the subscription again to get it. |
| `remaining_cycles` | Optional | integer or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. `remaining_cycles`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_cycles). |
| `remaining_prepaid_deliveries` | Optional | integer or null | Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. `remaining_prepaid_deliveries`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_prepaid_deliveries). |
| `resume_requested_at` | Optional | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. `resume_requested_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesresume_requested_at). |
| `scheduled_cancel_at` | Optional | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. `scheduled_cancel_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_cancel_at). |
| `scheduled_plan_change` | Optional | [SubscriptionScheduledPlanChangePreviousAttributes](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributes) or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. `scheduled_plan_change`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change). |
| `scheduled_promotions` | Optional | Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes) or null | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_promotions). |
| `scheduled_resume_at` | Optional | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. `scheduled_resume_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_resume_at). |
| `service_location` | Optional | [SubscriptionServiceLocationPreviousAttributes](../models/SubscriptionServiceLocationPreviousAttributes.md#subscriptionservicelocationpreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `service_location`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location). |
| `starts_at` | Optional | string or null | When a scheduled start's first billing period begins. Present only until that first payment succeeds. `starts_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesstarts_at). |
| `status` | Optional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesstatus). |
| `subscription_id` | Optional | string or null | Stable identifier of the subscription. `subscription_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryPreviousAttributes](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributes) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan). |
| `subscription_plan_id` | Optional | string or null | Subscription plan ID. Omitted when terms_type is subscription_offer. `subscription_plan_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessupported_actions). |
| `tax` | Optional | [SubscriptionTaxPreviousAttributes](../models/SubscriptionTaxPreviousAttributes.md#subscriptiontaxpreviousattributes) or null | The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. |
| `terms_type` | Optional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesterms_type). |
| `test_clock_id` | Optional | string or null | ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. `test_clock_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestest_clock_id). |
| `trial_end_at` | Optional | string or null | RFC3339 timestamp. `trial_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHoldPreviousAttributes](../models/SubscriptionUpcomingDeliveryHoldPreviousAttributes.md#subscriptionupcomingdeliveryholdpreviousattributes) or null | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. `upcoming_delivery_hold`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesupcoming_delivery_hold). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. `version`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesversion). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day variant 1

anyOf variant 1: UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules..

- Value shape: integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day variant 2

anyOf variant 2.

- Value shape: null. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold

Configuration issue or automatic retry delaying billing, with the first detection time. Flint retries automatically without starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or a card decline starts payment recovery. Included only in merchant responses.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Conditional | string or null | When Flint first detected this billing hold. `detected_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_hold-variant-1detected_at). |
| `reason` | Conditional | string or null | Why subscription billing cannot proceed. Treat unrecognized values as other. Values: `"configuration"`, `"retrying"`, `"platform_review"`, `"flint_restriction"`, `"other"`. `reason`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesreason). |
| `retry_at` | Conditional | string or null | When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. `retry_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_hold-variant-1retry_at). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1

anyOf SubscriptionBillingHoldPreviousAttributes.

- Optional: `detected_at`, `reason`, `retry_at`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 2

anyOf variant 2.

- Undeclared: `detected_at`, `reason`, `retry_at`.
- Value shape: null. Configuration issue or automatic retry delaying billing, with the first detection time. Flint retries automatically without starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or a card decline starts payment recovery. Included only in merchant responses. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.detected_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.detected_at variant 1

anyOf variant 1: When Flint first detected this billing hold..

- Value shape: string. When Flint first detected this billing hold. When Flint first detected this billing hold. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.detected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint first detected this billing hold. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.reason

Declared alternatives: [SubscriptionBillingHoldPreviousAttributes.reason](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesreason).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.retry_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.retry_at variant 1

anyOf variant 1: When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry..

- Value shape: string. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_hold variant 1.retry_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval variant 1

anyOf variant 1: How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move..

- Value shape: string. How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_count

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of billing_interval units between charges. Changes with billing_interval..

- Value shape: integer. Number of billing_interval units between charges. Changes with billing_interval. Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing_interval units between charges. Changes with billing_interval. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_options

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_options variant 1

anyOf variant 1: Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. maxItems: `12`. uniqueItems: `true`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_schedule_owner

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_schedule_owner variant 1

anyOf variant 1: Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}..

- Value shape: string. Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_schedule_owner variant 2

anyOf variant 2.

- Value shape: null. Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_schedule_waiting_started_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancel_at_period_end

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancel_at_period_end variant 1

anyOf variant 1: True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false..

- Value shape: boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancel_at_period_end variant 2

anyOf variant 2.

- Value shape: null. True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details

Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `comment` | Conditional | string or null | What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. `comment`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributescomment). |
| `reason_code` | Conditional | string or null | The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. `reason_code`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesreason_code). |
| `requested_at` | Conditional | string or null | When the cancellation was requested. `requested_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details-variant-1requested_at). |
| `requested_by` | Conditional | string or null | Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`. `requested_by`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesrequested_by). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1

anyOf SubscriptionCancellationDetailsPreviousAttributes.

- Optional: `comment`, `reason_code`, `requested_at`, `requested_by`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 2

anyOf variant 2.

- Undeclared: `comment`, `reason_code`, `requested_at`, `requested_by`.
- Value shape: null. Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.comment

Declared alternatives: [SubscriptionCancellationDetailsPreviousAttributes.comment](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributescomment).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.reason_code

Declared alternatives: [SubscriptionCancellationDetailsPreviousAttributes.reason_code](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesreason_code).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_at variant 1

anyOf variant 1: When the cancellation was requested..

- Value shape: string. When the cancellation was requested. When the cancellation was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_at variant 2

anyOf variant 2.

- Value shape: null. When the cancellation was requested. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_by

Declared alternatives: [SubscriptionCancellationDetailsPreviousAttributes.requested_by](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesrequested_by).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_reason

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise..

- Value shape: string. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.completed_cycles

### SubscriptionActivatedMerchantEventDataPreviousAttributes.completed_cycles variant 1

anyOf variant 1: Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one..

- Value shape: integer. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.completed_cycles variant 2

anyOf variant 2.

- Value shape: null. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_end_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_end_at variant 1

anyOf variant 1: When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier..

- Value shape: string. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_end_at variant 2

anyOf variant 2.

- Value shape: null. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_start_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_start_at variant 1

anyOf variant 1: When the recorded contract term started. Does not move when the subscription pauses or changes plan..

- Value shape: string. When the recorded contract term started. Does not move when the subscription pauses or changes plan. When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.contract_start_at variant 2

anyOf variant 2.

- Value shape: null. When the recorded contract term started. Does not move when the subscription pauses or changes plan. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.current_period_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.current_period_start_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer_id

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.customer_id](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescustomer_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.deliveries_per_period

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.deliveries_per_period](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdeliveries_per_period).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery

Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Conditional | [SubscriptionAddressVerificationPreviousAttributes](../models/SubscriptionAddressVerificationPreviousAttributes.md#subscriptionaddressverificationpreviousattributes) or null | Address verification result stored for the destination. Omitted when none is stored. |
| `delivery_method` | Conditional | [SubscriptionDeliveryMethodSummaryPreviousAttributes](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributes) or null | Summary of the saved delivery method. |
| `delivery_method_id` | Conditional | string or null | ID of the delivery method for future deliveries. Flint prices it again for each renewal. `delivery_method_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method_id). |
| `delivery_version` | Conditional | integer or null | Version of the subscription's saved delivery preference. `delivery_version`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdelivery_version). |
| `destination` | Conditional | [SubscriptionDeliveryDestinationPreviousAttributes](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributes) or null | Where future deliveries go. `destination`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination). |
| `recipient` | Conditional | [DeliveryRecipientResourcePreviousAttributes](../models/DeliveryRecipientResourcePreviousAttributes.md#deliveryrecipientresourcepreviousattributes) or null | Who receives the deliveries. Omitted when no recipient was saved. |
| `shipping_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. |
| `type` | Conditional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributestype). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `updated_by` | Conditional | string or null | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. `updated_by`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesupdated_by). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1

anyOf SubscriptionDeliveryPreviousAttributes.

- Optional: `address_verification`, `delivery_method`, `delivery_method_id`, `delivery_version`, `destination`, `recipient`, `shipping_money`, `type`, `updated_at`, `updated_by`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 2

anyOf variant 2.

- Undeclared: `address_verification`, `delivery_method`, `delivery_method_id`, `delivery_version`, `destination`, `recipient`, `shipping_money`, `type`, `updated_at`, `updated_by`.
- Value shape: null. Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method for future deliveries. Flint prices it again for each renewal..

- Value shape: string. ID of the delivery method for future deliveries. Flint prices it again for each renewal. ID of the delivery method for future deliveries. Flint prices it again for each renewal. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method for future deliveries. Flint prices it again for each renewal. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_version

Declared alternatives: [SubscriptionDeliveryPreviousAttributes.delivery_version](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdelivery_version).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination

Declared alternatives: [SubscriptionDeliveryPreviousAttributes.destination](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.type

Declared alternatives: [SubscriptionDeliveryMethodSummaryPreviousAttributes.type](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributestype).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.updated_by

Declared alternatives: [SubscriptionDeliveryPreviousAttributes.updated_by](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesupdated_by).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold

Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Conditional | string or null | When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. `ends_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1ends_at). |
| `fixable_by` | Conditional | string or null | Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Values: `"buyer"`, `"merchant"`. `fixable_by`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributesfixable_by). |
| `reason` | Conditional | string or null | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. `reason`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributesreason). |
| `started_at` | Conditional | string or null | When Flint held the renewal. `started_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1started_at). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1

anyOf SubscriptionDeliveryHoldPreviousAttributes.

- Optional: `ends_at`, `fixable_by`, `reason`, `started_at`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 2

anyOf variant 2.

- Undeclared: `ends_at`, `fixable_by`, `reason`, `started_at`.
- Value shape: null. Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.ends_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.ends_at variant 1

anyOf variant 1: When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`..

- Value shape: string. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.ends_at variant 2

anyOf variant 2.

- Value shape: null. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.fixable_by

Declared alternatives: [SubscriptionDeliveryHoldPreviousAttributes.fixable_by](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributesfixable_by).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.reason

Declared alternatives: [SubscriptionDeliveryHoldPreviousAttributes.reason](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributesreason).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.started_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.started_at variant 1

anyOf variant 1: When Flint held the renewal..

- Value shape: string. When Flint held the renewal. When Flint held the renewal. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.started_at variant 2

anyOf variant 2.

- Value shape: null. When Flint held the renewal. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_interval](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval_count

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.delivery_interval_count](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval_count).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after

Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer or null | Total charged billing cycles, including imported completed cycles. `cycle_count`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributescycle_count). |
| `type` | Conditional | string or null | How this automatic end is measured. `type`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributestype), [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after-variant-2type). |
| `end_date` | Conditional | string or null | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. `end_date`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after-variant-2end_date). |
| `timezone` | Conditional | string or null | IANA timezone saved with the end date. `timezone`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after-variant-2timezone). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1: `type` = `"cycles"`

anyOf variant 1: Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.; anyOf SubscriptionEndAfterPreviousAttributes; anyOf SubscriptionEndAfterCyclesPreviousAttributes.

- Optional: `cycle_count`, `type`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2: `type` = `"date"`

anyOf variant 1: Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.; anyOf SubscriptionEndAfterPreviousAttributes; anyOf SubscriptionEndAfterDatePreviousAttributes.

- Optional: `end_date`, `timezone`, `type`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 3, 4

anyOf variant 1: Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.; anyOf variant 2; anyOf variant 2.

- Undeclared: `cycle_count`, `type`, `end_date`, `timezone`.
- Value shape: null. Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.cycle_count

Declared alternatives: [SubscriptionEndAfterCyclesPreviousAttributes.cycle_count](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributescycle_count).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.type

Declared alternatives: [SubscriptionEndAfterCyclesPreviousAttributes.type](../models/SubscriptionEndAfterCyclesPreviousAttributes.md#subscriptionendaftercyclespreviousattributestype).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.end_date

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.end_date variant 1

anyOf variant 1: Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format..

- Value shape: string. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. Example: `"2026-08-02"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.end_date variant 2

anyOf variant 2.

- Value shape: null. Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.timezone

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.timezone variant 1

anyOf variant 1: IANA timezone saved with the end date..

- Value shape: string. IANA timezone saved with the end date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone saved with the end date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.type

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.type variant 1

anyOf variant 1: How this automatic end is measured..

- Value shape: string. How this automatic end is measured. Values: `"date"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2.type variant 2

anyOf variant 2.

- Value shape: null. How this automatic end is measured. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled..

- Value shape: string. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient

Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift.

Field definitions: [shared fields](CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgift_recipient).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1

anyOf SubscriptionGiftRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`, `sender_name`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`, `sender_name`.
- Value shape: null. Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.email

Declared alternatives: [CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1.email](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgift_recipient-variant-1email).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.message

Declared alternatives: [SubscriptionGiftRecipientPreviousAttributes.message](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesmessage).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.name

Declared alternatives: [SubscriptionGiftRecipientPreviousAttributes.name](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesname).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.sender_name

Declared alternatives: [SubscriptionGiftRecipientPreviousAttributes.sender_name](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributessender_name).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait

Renewal waiting for stock. Buyers receive only started_at.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Conditional | string or null | ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. `invoice_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesinventory_wait-variant-1invoice_id). |
| `order_id` | Conditional | string or null | ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. `order_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesinventory_wait-variant-1order_id). |
| `started_at` | Conditional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1

anyOf SubscriptionInventoryWaitPreviousAttributes.

- Optional: `invoice_id`, `order_id`, `started_at`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 2

anyOf variant 2.

- Undeclared: `invoice_id`, `order_id`, `started_at`.
- Value shape: null. Renewal waiting for stock. Buyers receive only started_at. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.invoice_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.invoice_id variant 1

anyOf variant 1: ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials..

- Value shape: string. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.order_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.order_id variant 1

anyOf variant 1: ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials..

- Value shape: string. ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.inventory_wait variant 1.started_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule

### SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule variant 1

anyOf variant 1: True while an active or trialing subscription on an external billing schedule has no next billing date..

- Value shape: boolean. True while an active or trialing subscription on an external billing schedule has no next billing date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule variant 2

anyOf variant 2.

- Value shape: null. True while an active or trialing subscription on an external billing schedule has no next billing date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error

Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals.

Field definitions: [shared fields](PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.code](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error-variant-1failed_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.message](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again..

- Value shape: Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes). What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.missed_billing_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.missed_billing_at variant 1

anyOf variant 1: The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due..

- Value shape: string. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.missed_billing_at variant 2

anyOf variant 2.

- Value shape: null. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_billing_at

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.next_billing_at](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesnext_billing_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at variant 1

anyOf variant 1: When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled..

- Value shape: string. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at variant 2

anyOf variant 2.

- Value shape: null. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_retry_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_retry_at variant 1

anyOf variant 1: Recorded automatic payment retry time. Null when no retry time is available..

- Value shape: string. Recorded automatic payment retry time. Null when no retry time is available. Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_retry_at variant 2

anyOf variant 2.

- Value shape: null. Recorded automatic payment retry time. Null when no retry time is available. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.open_renewal_order_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.open_renewal_order_id variant 1

anyOf variant 1: ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included..

- Value shape: string. ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.open_renewal_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.pause_reason

### SubscriptionActivatedMerchantEventDataPreviousAttributes.pause_reason variant 1

anyOf variant 1: Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused..

- Value shape: string. Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.pause_reason variant 2

anyOf variant 2.

- Value shape: null. Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.paused_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_link_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_link_id variant 1

anyOf variant 1: The payment link that started this subscription, when there was one..

- Value shape: string. The payment link that started this subscription, when there was one. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. The payment link that started this subscription, when there was one. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method

Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method.

Field definitions: [shared fields](CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1: `type` = `"card"`

anyOf ExpandedPaymentMethodSummaryPreviousAttributes.

- Optional: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 2

anyOf variant 2.

- Undeclared: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.
- Value shape: null. Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.customer_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.customer_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1customer_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.payment_method_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.payment_method_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1payment_method_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.status

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributes.status](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributesstatus).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.type

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributes.type](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributestype).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at variant 1

anyOf variant 1: First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary..

- Value shape: string. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at variant 2

anyOf variant 2.

- Value shape: null. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id variant 1

anyOf variant 1: Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it..

- Value shape: string. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1

anyOf variant 1: Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded..

- Value shape: Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes). Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 2

anyOf variant 2.

- Value shape: null. Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Optional | integer or null | First charged cycle eligible for this promotion. `first_cycle`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesfirst_cycle). |
| `name` | Optional | string or null | Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. `name`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesname). |
| `promotion_code_id` | Optional | string or null | ID of the promotion code used to attach the promotion. Null when no promotion code was used. `promotion_code_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions-variant-1-fields-1promotion_code_id). |
| `promotion_id` | Optional | string or null | ID of the promotion attached to the subscription. `promotion_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions-variant-1-fields-1promotion_id). |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) or null | How often the promotion's discount repeats, frozen when the promotion was attached. `recurrence`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesrecurrence). |
| `remaining_cycles` | Optional | integer or null | Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. `remaining_cycles`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesremaining_cycles). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.first_cycle

Declared alternatives: [SubscriptionPromotionPreviousAttributes.first_cycle](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesfirst_cycle).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.name

Declared alternatives: [SubscriptionPromotionPreviousAttributes.name](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesname).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_code_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_code_id variant 1

anyOf variant 1: ID of the promotion code used to attach the promotion. Null when no promotion code was used..

- Value shape: string. ID of the promotion code used to attach the promotion. Null when no promotion code was used. ID of the promotion code used to attach the promotion. Null when no promotion code was used. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_code_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion code used to attach the promotion. Null when no promotion code was used. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_id variant 1

anyOf variant 1: ID of the promotion attached to the subscription..

- Value shape: string. ID of the promotion attached to the subscription. ID of the promotion attached to the subscription. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion attached to the subscription. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.recurrence

Declared alternatives: [SubscriptionPromotionPreviousAttributes.recurrence](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesrecurrence).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.remaining_cycles

Declared alternatives: [SubscriptionPromotionPreviousAttributes.remaining_cycles](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesremaining_cycles).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.prorate_first_period

### SubscriptionActivatedMerchantEventDataPreviousAttributes.prorate_first_period variant 1

anyOf variant 1: Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period..

- Value shape: boolean. Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.prorate_first_period variant 2

anyOf variant 2.

- Value shape: null. Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_cycles

### SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_cycles variant 1

anyOf variant 1: Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled..

- Value shape: integer. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_cycles variant 2

anyOf variant 2.

- Value shape: null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_prepaid_deliveries

### SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_prepaid_deliveries variant 1

anyOf variant 1: Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds..

- Value shape: integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Format: `int32`. minimum: `0`. maximum: `23`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.remaining_prepaid_deliveries variant 2

anyOf variant 2.

- Value shape: null. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.resume_requested_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.resume_requested_at variant 1

anyOf variant 1: When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending..

- Value shape: string. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.resume_requested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at variant 1

anyOf variant 1: When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available..

- Value shape: string. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at variant 2

anyOf variant 2.

- Value shape: null. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change

Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string or null | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of target billing_interval units between charges. `billing_interval_count`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval_count). |
| `effective_at` | Conditional | string or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. `effective_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1effective_at). |
| `line_items` | Conditional | Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes) or null | Frozen target lines, including buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items). |
| `recurring_subtotal_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Frozen item subtotal per target billing period, before discounts, shipping, and tax. |
| `requested_by` | Conditional | string or null | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. `requested_by`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesrequested_by). |
| `scheduled_at` | Conditional | string or null | When the plan change was scheduled. `scheduled_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1scheduled_at). |
| `subscription_plan_id` | Conditional | string or null | The scheduled target subscription plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1subscription_plan_id). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1

anyOf SubscriptionScheduledPlanChangePreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan_id`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan_id`.
- Value shape: null. Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval

Declared alternatives: [SubscriptionScheduledPlanChangePreviousAttributes.billing_interval](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval_count

Declared alternatives: [SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval_count).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.effective_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.effective_at variant 1

anyOf variant 1: Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date..

- Value shape: string. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.effective_at variant 2

anyOf variant 2.

- Value shape: null. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.line_items

Declared alternatives: [SubscriptionScheduledPlanChangePreviousAttributes.line_items](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.requested_by

Declared alternatives: [SubscriptionScheduledPlanChangePreviousAttributes.requested_by](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesrequested_by).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.scheduled_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.scheduled_at variant 1

anyOf variant 1: When the plan change was scheduled..

- Value shape: string. When the plan change was scheduled. When the plan change was scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.scheduled_at variant 2

anyOf variant 2.

- Value shape: null. When the plan change was scheduled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.subscription_plan_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.subscription_plan_id variant 1

anyOf variant 1: The scheduled target subscription plan..

- Value shape: string. The scheduled target subscription plan. The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. The scheduled target subscription plan. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions variant 1

anyOf variant 1: Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled..

- Value shape: Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes). Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions variant 2

anyOf variant 2.

- Value shape: null. Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions variant 1.[] fields 1

Field definitions: [SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions-variant-1-fields-1).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at variant 1

anyOf variant 1: When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out..

- Value shape: string. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at variant 2

anyOf variant 2.

- Value shape: null. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location

Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it. `address`: [declared alternatives](../models/SubscriptionServiceLocationPreviousAttributes.md#subscriptionservicelocationpreviousattributesaddress). |
| `customer_address_id` | Conditional | string or null | ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. `customer_address_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location-variant-1customer_address_id). |
| `customer_id` | Conditional | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. `customer_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location-variant-1customer_id). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1

anyOf SubscriptionServiceLocationPreviousAttributes.

- Optional: `address`, `customer_address_id`, `customer_id`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 2

anyOf variant 2.

- Undeclared: `address`, `customer_address_id`, `customer_id`.
- Value shape: null. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address

Declared alternatives: [SubscriptionServiceLocationPreviousAttributes.address](../models/SubscriptionServiceLocationPreviousAttributes.md#subscriptionservicelocationpreviousattributesaddress).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.customer_address_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.customer_address_id variant 1

anyOf variant 1: ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address..

- Value shape: string. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.customer_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection..

- Value shape: string. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at variant 1

anyOf variant 1: When a scheduled start's first billing period begins. Present only until that first payment succeeds..

- Value shape: string. When a scheduled start's first billing period begins. Present only until that first payment succeeds. When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at variant 2

anyOf variant 2.

- Value shape: null. When a scheduled start's first billing period begins. Present only until that first payment succeeds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.status](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesstatus).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: Stable identifier of the subscription..

- Value shape: string. Stable identifier of the subscription. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the subscription. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_plan

Declared alternatives: [PaymentLinkUpdatedMerchantEventDataPreviousAttributes.subscription_plan](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_plan_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: Subscription plan ID. Omitted when terms_type is subscription_offer..

- Value shape: string. Subscription plan ID. Omitted when terms_type is subscription_offer. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Subscription plan ID. Omitted when terms_type is subscription_offer. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.supported_actions

### SubscriptionActivatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials..

- Value shape: Array of string. Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.terms_type

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.terms_type](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesterms_type).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id variant 1

anyOf variant 1: ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses..

- Value shape: string. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.trial_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold

Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Conditional | string or null | RFC3339 timestamp. `detected_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `fixable_by` | Conditional | string or null | Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Values: `"buyer"`, `"merchant"`. `fixable_by`: [declared alternatives](../models/SubscriptionUpcomingDeliveryHoldPreviousAttributes.md#subscriptionupcomingdeliveryholdpreviousattributesfixable_by). |
| `reason` | Conditional | string or null | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. `reason`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributesreason). |
| `renewal_at` | Conditional | string or null | Time of the next renewal affected by this delivery issue. `renewal_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesupcoming_delivery_hold-variant-1renewal_at). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1

anyOf SubscriptionUpcomingDeliveryHoldPreviousAttributes.

- Optional: `detected_at`, `fixable_by`, `reason`, `renewal_at`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 2

anyOf variant 2.

- Undeclared: `detected_at`, `fixable_by`, `reason`, `renewal_at`.
- Value shape: null. Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.detected_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.fixable_by

Declared alternatives: [SubscriptionUpcomingDeliveryHoldPreviousAttributes.fixable_by](../models/SubscriptionUpcomingDeliveryHoldPreviousAttributes.md#subscriptionupcomingdeliveryholdpreviousattributesfixable_by).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.reason

Declared alternatives: [SubscriptionDeliveryHoldPreviousAttributes.reason](../models/SubscriptionDeliveryHoldPreviousAttributes.md#subscriptiondeliveryholdpreviousattributesreason).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.renewal_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.renewal_at variant 1

anyOf variant 1: Time of the next renewal affected by this delivery issue..

- Value shape: string. Time of the next renewal affected by this delivery issue. Time of the next renewal affected by this delivery issue. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.renewal_at variant 2

anyOf variant 2.

- Value shape: null. Time of the next renewal affected by this delivery issue. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.version

### SubscriptionActivatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed..

- Value shape: integer. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. 

