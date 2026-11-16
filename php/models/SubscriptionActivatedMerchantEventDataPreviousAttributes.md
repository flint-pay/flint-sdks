[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer or null | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. `billing_anchor_day`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_anchor_day). |
| `billing_interval` | Optional | string or null | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing_interval units between charges. Changes with billing_interval. `billing_interval_count`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) or null | Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. `billing_interval_options`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_options). |
| `billing_schedule_owner` | Optional | string or null | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. `billing_schedule_owner`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_schedule_owner). |
| `billing_schedule_waiting_started_at` | Optional | string or null | RFC3339 timestamp. `billing_schedule_waiting_started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `cancel_at_period_end` | Optional | boolean or null | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. `cancel_at_period_end`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancel_at_period_end). |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `cancellation_details` | Optional | [SubscriptionCancellationDetails](../models/SubscriptionCancellationDetails.md#subscriptioncancellationdetails) or null | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. |
| `cancellation_reason` | Optional | string or null | Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`. `cancellation_reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_reason). |
| `completed_cycles` | Optional | integer or null | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. `completed_cycles`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescompleted_cycles). |
| `contract_end_at` | Optional | string or null | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. `contract_end_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_end_at). |
| `contract_start_at` | Optional | string or null | When the recorded contract term started. Does not move when the subscription pauses or changes plan. `contract_start_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_start_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_end_at` | Optional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_start_at` | Optional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescustomer_id). |
| `deliveries_per_period` | Optional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdeliveries_per_period). |
| `delivery` | Optional | [SubscriptionDelivery](../models/SubscriptionDelivery.md#subscriptiondelivery) or null | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. |
| `delivery_hold` | Optional | [SubscriptionDeliveryHold](../models/SubscriptionDeliveryHold.md#subscriptiondeliveryhold) or null | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. |
| `delivery_interval` | Optional | string or null or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_interval). |
| `delivery_interval_count` | Optional | integer or null or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_interval_count). |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. |
| `end_after` | Optional | Alternative shapes (see declared variants) or null or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. `end_after`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after). |
| `expires_at` | Optional | string or null or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. `expires_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesexpires_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_recipient` | Optional | [SubscriptionGiftRecipient](../models/SubscriptionGiftRecipient.md#subscriptiongiftrecipient) or null or null | Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. |
| `inventory_wait` | Optional | [SubscriptionInventoryWait](../models/SubscriptionInventoryWait.md#subscriptioninventorywait) or null | Renewal waiting for stock. Buyers receive only started_at. |
| `is_awaiting_billing_schedule` | Optional | boolean or null | True while an active or trialing subscription on an external billing schedule has no next billing date. `is_awaiting_billing_schedule`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesis_awaiting_billing_schedule). |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. |
| `line_items` | Optional | Array of [SubscriptionLineItem](../models/SubscriptionLineItem.md#subscriptionlineitem) or null | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `missed_billing_at` | Optional | string or null | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. `missed_billing_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesmissed_billing_at). |
| `next_billing_at` | Optional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_billing_at). |
| `next_delivery_at` | Optional | string or null or null | When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. `next_delivery_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_delivery_at). |
| `next_retry_at` | Optional | string or null or null | Recorded automatic payment retry time. Null when no retry time is available. `next_retry_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_retry_at). |
| `open_renewal_order_id` | Optional | string or null | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. `open_renewal_order_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesopen_renewal_order_id). |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. |
| `pause_reason` | Optional | string or null | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. `pause_reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespause_reason). |
| `paused_at` | Optional | string or null | RFC3339 timestamp. `paused_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null or null | Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. |
| `payment_method_due_at` | Optional | string or null or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. `payment_method_due_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_due_at). |
| `payment_method_id` | Optional | string or null or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. `payment_method_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_id). |
| `promotions` | Optional | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) or null | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions). |
| `prorate_first_period` | Optional | boolean or null | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. `prorate_first_period`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesprorate_first_period). |
| `recurring_subtotal_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as null. Retrieve the subscription again to get it. |
| `remaining_cycles` | Optional | integer or null or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. `remaining_cycles`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_cycles). |
| `remaining_prepaid_deliveries` | Optional | integer or null | Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. `remaining_prepaid_deliveries`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_prepaid_deliveries). |
| `resume_requested_at` | Optional | string or null or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. `resume_requested_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesresume_requested_at). |
| `scheduled_cancel_at` | Optional | string or null or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. `scheduled_cancel_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_cancel_at). |
| `scheduled_plan_change` | Optional | [SubscriptionScheduledPlanChange](../models/SubscriptionScheduledPlanChange.md#subscriptionscheduledplanchange) or null or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. |
| `scheduled_promotions` | Optional | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) or null | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_promotions). |
| `scheduled_resume_at` | Optional | string or null or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. `scheduled_resume_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_resume_at). |
| `service_location` | Optional | [SubscriptionServiceLocation](../models/SubscriptionServiceLocation.md#subscriptionservicelocation) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `starts_at` | Optional | string or null | When a scheduled start's first billing period begins. Present only until that first payment succeeds. `starts_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesstarts_at). |
| `status` | Optional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesstatus). |
| `subscription_id` | Optional | string or null | Stable identifier of the subscription. `subscription_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | Subscription plan ID. Omitted when terms_type is subscription_offer. `subscription_plan_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessupported_actions). |
| `tax` | Optional | [SubscriptionTax](../models/SubscriptionTax.md#subscriptiontax) or null or null | The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. |
| `terms_type` | Optional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesterms_type). |
| `test_clock_id` | Optional | string or null | ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. `test_clock_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestest_clock_id). |
| `trial_end_at` | Optional | string or null | RFC3339 timestamp. `trial_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHold](../models/SubscriptionUpcomingDeliveryHold.md#subscriptionupcomingdeliveryhold) or null | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. `version`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesversion). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day variant 1

anyOf variant 1: UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules..

- Value shape: integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.billing_anchor_day variant 2

anyOf variant 2.

- Value shape: null. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. 

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

- Value shape: Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption). Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. maxItems: `12`. uniqueItems: `true`. 

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer this subscription bills..

- Value shape: string. The customer this subscription bills. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer this subscription bills. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.deliveries_per_period

### SubscriptionActivatedMerchantEventDataPreviousAttributes.deliveries_per_period variant 1

anyOf variant 1: Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery..

- Value shape: integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.deliveries_per_period variant 2

anyOf variant 2.

- Value shape: null. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval variant 1

anyOf variant 1: Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period..

- Value shape: (string or null). Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval variant 2

anyOf variant 2.

- Value shape: null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval_count

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval_count variant 1

anyOf variant 1: Number of delivery intervals between deliveries. Null when no separate delivery cadence is set..

- Value shape: (integer or null). Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after

Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.

Field definitions: [shared fields](Subscription.md#subscriptionend_after).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1: `type` = `"cycles"`

anyOf variant 1: Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.; anyOf SubscriptionEndAfter: The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.; oneOf with type: "cycles": A subscription automatic end measured by the total number of charged billing cycles..

- Required: `cycle_count`, `type`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 2: `type` = `"date"`

anyOf variant 1: Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.; anyOf SubscriptionEndAfter: The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.; oneOf with type: "date": A subscription automatic end measured by a saved local calendar date..

- Required: `end_date`, `timezone`, `type`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 3, 4

anyOf variant 1: Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.; anyOf variant 2; anyOf variant 2.

- Undeclared: `cycle_count`, `type`, `end_date`, `timezone`.
- Value shape: null. Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled..

- Value shape: (string or null). Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule

### SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule variant 1

anyOf variant 1: True while an active or trialing subscription on an external billing schedule has no next billing date..

- Value shape: boolean. True while an active or trialing subscription on an external billing schedule has no next billing date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.is_awaiting_billing_schedule variant 2

anyOf variant 2.

- Value shape: null. True while an active or trialing subscription on an external billing schedule has no next billing date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again..

- Value shape: Array of [SubscriptionLineItem](../models/SubscriptionLineItem.md#subscriptionlineitem). What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [SubscriptionResponse.data.line_items[]](../models/SubscriptionResponse.md#subscriptionresponsedataline_items).

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_billing_at variant 1

anyOf variant 1: When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule..

- Value shape: string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_billing_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at variant 1

anyOf variant 1: When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled..

- Value shape: (string or null). When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_delivery_at variant 2

anyOf variant 2.

- Value shape: null. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_retry_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.next_retry_at variant 1

anyOf variant 1: Recorded automatic payment retry time. Null when no retry time is available..

- Value shape: (string or null). Recorded automatic payment retry time. Null when no retry time is available. Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. 

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at variant 1

anyOf variant 1: First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary..

- Value shape: (string or null). First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_due_at variant 2

anyOf variant 2.

- Value shape: null. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id variant 1

anyOf variant 1: Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it..

- Value shape: (string or null). Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1

anyOf variant 1: Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded..

- Value shape: Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion). Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 2

anyOf variant 2.

- Value shape: null. Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

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

- Value shape: (integer or null). Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: `uint64`. minimum: `0`. 

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

- Value shape: (string or null). When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.resume_requested_at variant 2

anyOf variant 2.

- Value shape: null. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at variant 1

anyOf variant 1: When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available..

- Value shape: (string or null). When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_cancel_at variant 2

anyOf variant 2.

- Value shape: null. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions variant 1

anyOf variant 1: Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled..

- Value shape: Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion). Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions variant 2

anyOf variant 2.

- Value shape: null. Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_promotions variant 1.[] fields 1

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at variant 1

anyOf variant 1: When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out..

- Value shape: (string or null). When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at variant 2

anyOf variant 2.

- Value shape: null. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at variant 1

anyOf variant 1: When a scheduled start's first billing period begins. Present only until that first payment succeeds..

- Value shape: string. When a scheduled start's first billing period begins. Present only until that first payment succeeds. When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.starts_at variant 2

anyOf variant 2.

- Value shape: null. When a scheduled start's first billing period begins. Present only until that first payment succeeds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.status

### SubscriptionActivatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the subscription is in its lifecycle. Each value says what it means..

- Value shape: string. Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the subscription is in its lifecycle. Each value says what it means. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: Stable identifier of the subscription..

- Value shape: string. Stable identifier of the subscription. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the subscription. 

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.terms_type variant 1

anyOf variant 1: Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id..

- Value shape: string. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.terms_type variant 2

anyOf variant 2.

- Value shape: null. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id variant 1

anyOf variant 1: ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses..

- Value shape: string. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.trial_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.version

### SubscriptionActivatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed..

- Value shape: integer. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. 

