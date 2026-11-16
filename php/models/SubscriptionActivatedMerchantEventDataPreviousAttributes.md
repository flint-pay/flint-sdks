[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer or null | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. `billing_anchor_day`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_anchor_day). |
| `billing_interval` | Optional | string or null | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing_interval units between charges. Changes with billing_interval. `billing_interval_count`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. `billing_interval_options`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_interval_options). |
| `billing_schedule_owner` | Optional | string or null | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. `billing_schedule_owner`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesbilling_schedule_owner). |
| `billing_schedule_waiting_started_at` | Optional | string or null | RFC3339 timestamp. `billing_schedule_waiting_started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `cancel_at_period_end` | Optional | boolean or null | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. `cancel_at_period_end`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancel_at_period_end). |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `cancellation_details` | Optional | Alternative shapes (see declared variants) | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. `cancellation_details`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details). |
| `cancellation_reason` | Optional | string or null | Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`. `cancellation_reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_reason). |
| `completed_cycles` | Optional | integer or null | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. `completed_cycles`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescompleted_cycles). |
| `contract_end_at` | Optional | string or null | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. `contract_end_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_end_at). |
| `contract_start_at` | Optional | string or null | When the recorded contract term started. Does not move when the subscription pauses or changes plan. `contract_start_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescontract_start_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_end_at` | Optional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_start_at` | Optional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescustomer_id). |
| `deliveries_per_period` | Optional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1deliveries_per_period). |
| `delivery` | Optional | Alternative shapes (see declared variants) | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. `delivery`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery). |
| `delivery_hold` | Optional | Alternative shapes (see declared variants) | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. `delivery_hold`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold). |
| `delivery_interval` | Optional | string or null or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_interval). |
| `delivery_interval_count` | Optional | integer or null or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_interval_count). |
| `early_termination_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. |
| `end_after` | Optional | (Alternative shapes (see declared variants) or null) or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. `end_after`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after). |
| `expires_at` | Optional | string or null or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. `expires_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesexpires_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `gift_recipient` | Optional | Alternative shapes (see declared variants) or null | Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. `gift_recipient`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesgift_recipient). |
| `inventory_wait` | Optional | Alternative shapes (see declared variants) | Renewal waiting for stock. Buyers receive only started_at. `inventory_wait`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesinventory_wait). |
| `is_awaiting_billing_schedule` | Optional | boolean or null | True while an active or trialing subscription on an external billing schedule has no next billing date. `is_awaiting_billing_schedule`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesis_awaiting_billing_schedule). |
| `last_payment_error` | Optional | Alternative shapes (see declared variants) | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. `last_payment_error`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributeslast_payment_error). |
| `line_items` | Optional | Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes) or null | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `missed_billing_at` | Optional | string or null | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. `missed_billing_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesmissed_billing_at). |
| `next_billing_at` | Optional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_billing_at). |
| `next_delivery_at` | Optional | string or null or null | When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. `next_delivery_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_delivery_at). |
| `next_retry_at` | Optional | string or null or null | Recorded automatic payment retry time. Null when no retry time is available. `next_retry_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesnext_retry_at). |
| `open_renewal_order_id` | Optional | string or null | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. `open_renewal_order_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesopen_renewal_order_id). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. |
| `pause_reason` | Optional | string or null | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. `pause_reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespause_reason). |
| `paused_at` | Optional | string or null | RFC3339 timestamp. `paused_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `payment_method` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. `payment_method`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method). |
| `payment_method_due_at` | Optional | string or null or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. `payment_method_due_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_due_at). |
| `payment_method_id` | Optional | string or null or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. `payment_method_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespayment_method_id). |
| `promotions` | Optional | Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes) or null | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions). |
| `prorate_first_period` | Optional | boolean or null | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. `prorate_first_period`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesprorate_first_period). |
| `recurring_subtotal_money` | Optional | ([MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as null. Retrieve the subscription again to get it. |
| `remaining_cycles` | Optional | integer or null or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. `remaining_cycles`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_cycles). |
| `remaining_prepaid_deliveries` | Optional | integer or null | Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. `remaining_prepaid_deliveries`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesremaining_prepaid_deliveries). |
| `resume_requested_at` | Optional | string or null or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. `resume_requested_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesresume_requested_at). |
| `scheduled_cancel_at` | Optional | string or null or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. `scheduled_cancel_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_cancel_at). |
| `scheduled_plan_change` | Optional | Alternative shapes (see declared variants) or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. `scheduled_plan_change`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change). |
| `scheduled_promotions` | Optional | Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes) or null | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_promotions). |
| `scheduled_resume_at` | Optional | string or null or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. `scheduled_resume_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_resume_at). |
| `service_location` | Optional | Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `service_location`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location). |
| `starts_at` | Optional | string or null | When a scheduled start's first billing period begins. Present only until that first payment succeeds. `starts_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesstarts_at). |
| `status` | Optional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1status). |
| `subscription_id` | Optional | string or null | Stable identifier of the subscription. `subscription_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_plan` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/PaymentLinkUpdatedMerchantEventDataPreviousAttributes.md#paymentlinkupdatedmerchanteventdatapreviousattributessubscription_plan). |
| `subscription_plan_id` | Optional | string or null | Subscription plan ID. Omitted when terms_type is subscription_offer. `subscription_plan_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributessupported_actions). |
| `tax` | Optional | Alternative shapes (see declared variants) or null | The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `tax`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestax). |
| `terms_type` | Optional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1terms_type). |
| `test_clock_id` | Optional | string or null | ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. `test_clock_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestest_clock_id). |
| `trial_end_at` | Optional | string or null | RFC3339 timestamp. `trial_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `upcoming_delivery_hold` | Optional | Alternative shapes (see declared variants) | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. `upcoming_delivery_hold`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesupcoming_delivery_hold). |
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
| `comment` | Conditional | string or null | What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. `comment`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details-variant-1comment). |
| `reason_code` | Conditional | string or null | The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. `reason_code`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details-variant-1reason_code). |
| `requested_at` | Conditional | string or null | When the cancellation was requested. `requested_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details-variant-1requested_at). |
| `requested_by` | Conditional | string or null | Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`. `requested_by`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributescancellation_details-variant-1requested_by). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1

anyOf SubscriptionCancellationDetailsPreviousAttributes.

- Optional: `comment`, `reason_code`, `requested_at`, `requested_by`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 2

anyOf variant 2.

- Undeclared: `comment`, `reason_code`, `requested_at`, `requested_by`.
- Value shape: null. Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.comment

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.comment variant 1

anyOf variant 1: What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted..

- Value shape: string. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: `500`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.comment variant 2

anyOf variant 2.

- Value shape: null. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.reason_code

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.reason_code variant 1

anyOf variant 1: The reason the requester chose. Omitted when none was given..

- Value shape: string. The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.reason_code variant 2

anyOf variant 2.

- Value shape: null. The reason the requester chose. Omitted when none was given. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_at variant 1

anyOf variant 1: When the cancellation was requested..

- Value shape: string. When the cancellation was requested. When the cancellation was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_at variant 2

anyOf variant 2.

- Value shape: null. When the cancellation was requested. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_by

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_by variant 1

anyOf variant 1: Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer..

- Value shape: string. Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.cancellation_details variant 1.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. 

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer this subscription bills..

- Value shape: string. The customer this subscription bills. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer this subscription bills. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.deliveries_per_period

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.deliveries_per_period](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1deliveries_per_period).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery

Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Conditional | Alternative shapes (see declared variants) | Address verification result stored for the destination. Omitted when none is stored. `address_verification`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1address_verification). |
| `delivery_method` | Conditional | Alternative shapes (see declared variants) | Summary of the saved delivery method. `delivery_method`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method). |
| `delivery_method_id` | Conditional | string or null | ID of the delivery method for future deliveries. Flint prices it again for each renewal. `delivery_method_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method_id). |
| `delivery_version` | Conditional | integer or null | Version of the subscription's saved delivery preference. `delivery_version`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_version). |
| `destination` | Conditional | Alternative shapes (see declared variants) | Where future deliveries go. `destination`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1destination). |
| `recipient` | Conditional | Alternative shapes (see declared variants) | Who receives the deliveries. Omitted when no recipient was saved. `recipient`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1recipient). |
| `shipping_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. |
| `type` | Conditional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method-variant-1type). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `updated_by` | Conditional | string or null | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. `updated_by`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1updated_by). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1

anyOf SubscriptionDeliveryPreviousAttributes.

- Optional: `address_verification`, `delivery_method`, `delivery_method_id`, `delivery_version`, `destination`, `recipient`, `shipping_money`, `type`, `updated_at`, `updated_by`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 2

anyOf variant 2.

- Undeclared: `address_verification`, `delivery_method`, `delivery_method_id`, `delivery_version`, `destination`, `recipient`, `shipping_money`, `type`, `updated_at`, `updated_by`.
- Value shape: null. Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.address_verification

Address verification result stored for the destination. Omitted when none is stored.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `state` | Conditional | string or null | How far verification of the address got. Each value says what it means. Values: `"verified"`, `"unverified"`, `"needs_review"`, `"unverifiable"`. `state`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1address_verification-variant-1state). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.address_verification variant 1

anyOf SubscriptionAddressVerificationPreviousAttributes.

- Optional: `state`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.address_verification variant 2

anyOf variant 2.

- Undeclared: `state`.
- Value shape: null. Address verification result stored for the destination. Omitted when none is stored. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.address_verification variant 1.state

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.address_verification variant 1.state variant 1

anyOf variant 1: How far verification of the address got. Each value says what it means..

- Value shape: string. How far verification of the address got. Each value says what it means. Values: `"verified"`, `"unverified"`, `"needs_review"`, `"unverifiable"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.address_verification variant 1.state variant 2

anyOf variant 2.

- Value shape: null. How far verification of the address got. Each value says what it means. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method

Summary of the saved delivery method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Conditional | string or null | Buyer-facing description of the delivery method. Omitted when the method has none. `description`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method-variant-1description). |
| `name` | Conditional | string or null | Buyer-facing name of the delivery method. `name`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method-variant-1name). |
| `price_type` | Conditional | string or null | Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`. `price_type`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method-variant-1price_type). |
| `type` | Conditional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method-variant-1type). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1

anyOf SubscriptionDeliveryMethodSummaryPreviousAttributes.

- Optional: `description`, `name`, `price_type`, `type`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 2

anyOf variant 2.

- Undeclared: `description`, `name`, `price_type`, `type`.
- Value shape: null. Summary of the saved delivery method. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.description

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.description variant 1

anyOf variant 1: Buyer-facing description of the delivery method. Omitted when the method has none..

- Value shape: string. Buyer-facing description of the delivery method. Omitted when the method has none. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing description of the delivery method. Omitted when the method has none. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.name

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.name variant 1

anyOf variant 1: Buyer-facing name of the delivery method..

- Value shape: string. Buyer-facing name of the delivery method. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing name of the delivery method. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.price_type

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.price_type variant 1

anyOf variant 1: Whether the method charges a flat price or Flint works the price out for each delivery..

- Value shape: string. Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.price_type variant 2

anyOf variant 2.

- Value shape: null. Whether the method charges a flat price or Flint works the price out for each delivery. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.type

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.type variant 1

anyOf variant 1: How the method delivers the items..

- Value shape: string. How the method delivers the items. Values: `"shipment"`, `"local_delivery"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.type variant 2

anyOf variant 2.

- Value shape: null. How the method delivers the items. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method for future deliveries. Flint prices it again for each renewal..

- Value shape: string. ID of the delivery method for future deliveries. Flint prices it again for each renewal. ID of the delivery method for future deliveries. Flint prices it again for each renewal. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method for future deliveries. Flint prices it again for each renewal. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_version

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_version variant 1

anyOf variant 1: Version of the subscription's saved delivery preference..

- Value shape: integer. Version of the subscription's saved delivery preference. Version of the subscription's saved delivery preference. Format: `uint64`. minimum: `0`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_version variant 2

anyOf variant 2.

- Value shape: null. Version of the subscription's saved delivery preference. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination

Where future deliveries go.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) or null | Resolved delivery address used by future shipments. `null` when the saved destination has no address. `address`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1destination-variant-1address). |
| `customer_address_id` | Conditional | string or null | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. `customer_address_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1destination-variant-1customer_address_id). |
| `customer_id` | Conditional | string or null or null | Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. `customer_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1destination-variant-1customer_id). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1

anyOf SubscriptionDeliveryDestinationPreviousAttributes.

- Optional: `address`, `customer_address_id`, `customer_id`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 2

anyOf variant 2.

- Undeclared: `address`, `customer_address_id`, `customer_id`.
- Value shape: null. Where future deliveries go. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address

Resolved delivery address used by future shipments. `null` when the saved destination has no address.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1

anyOf variant 1: Resolved delivery address used by future shipments. `null` when the saved destination has no address.; anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 2, 3

anyOf variant 1: Resolved delivery address used by future shipments. `null` when the saved destination has no address.; anyOf variant 2; anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Resolved delivery address used by future shipments. `null` when the saved destination has no address. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.customer_address_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.customer_address_id variant 1

anyOf variant 1: Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination..

- Value shape: string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.customer_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address..

- Value shape: (string or null). Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.destination variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.recipient

Who receives the deliveries. Omitted when no recipient was saved.

Field definitions: [shared fields](DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1

anyOf DeliveryRecipientResourcePreviousAttributes.

- Optional: `email`, `name`, `phone`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `name`, `phone`.
- Value shape: null. Who receives the deliveries. Omitted when no recipient was saved. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1.email

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.email](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1email).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1.name

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.name](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1name).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1.phone

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.phone](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1phone).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.type

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method variant 1.type](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method-variant-1type).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.updated_by

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.updated_by variant 1

anyOf variant 1: Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at..

- Value shape: string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery variant 1.updated_by variant 2

anyOf variant 2.

- Value shape: null. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold

Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Conditional | string or null | When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. `ends_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1ends_at). |
| `fixable_by` | Conditional | string or null | Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Values: `"buyer"`, `"merchant"`. `fixable_by`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1fixable_by). |
| `reason` | Conditional | string or null | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. `reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1reason). |
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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.fixable_by variant 1

anyOf variant 1: Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false..

- Value shape: string. Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Values: `"buyer"`, `"merchant"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.fixable_by variant 2

anyOf variant 2.

- Value shape: null. Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.reason

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.reason variant 1

anyOf variant 1: Why the subscription's delivery needs attention..

- Value shape: string. Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.reason variant 2

anyOf variant 2.

- Value shape: null. Why the subscription's delivery needs attention. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.started_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.started_at variant 1

anyOf variant 1: When Flint held the renewal..

- Value shape: string. When Flint held the renewal. When Flint held the renewal. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.started_at variant 2

anyOf variant 2.

- Value shape: null. When Flint held the renewal. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_interval).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_interval_count

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.delivery_interval_count](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1delivery_interval_count).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after

Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer or null | Total charged billing cycles, including imported completed cycles. `cycle_count`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after-variant-1cycle_count). |
| `type` | Conditional | string or null | How this automatic end is measured. `type`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after-variant-1type), [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesend_after-variant-2type). |
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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.cycle_count variant 1

anyOf variant 1: Total charged billing cycles, including imported completed cycles..

- Value shape: integer. Total charged billing cycles, including imported completed cycles. Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.cycle_count variant 2

anyOf variant 2.

- Value shape: null. Total charged billing cycles, including imported completed cycles. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.type

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.type variant 1

anyOf variant 1: How this automatic end is measured..

- Value shape: string. How this automatic end is measured. Values: `"cycles"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.end_after variant 1.type variant 2

anyOf variant 2.

- Value shape: null. How this automatic end is measured. 

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

- Value shape: (string or null). Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient

Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1

anyOf variant 1: Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift.; anyOf SubscriptionGiftRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 2, 3

anyOf variant 1: Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift.; anyOf variant 2; anyOf variant 2.

- Undeclared: `email`, `message`, `name`.
- Value shape: null. Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.email

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.email](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient-variant-1email).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient-variant-1message).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.gift_recipient variant 1.name

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.subscription_terms variant 1.gift_recipient variant 1.name](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributessubscription_terms-variant-1gift_recipient-variant-1name).

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

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1code).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1failed_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1message).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.last_payment_error variant 1.remediation

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1remediation).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again..

- Value shape: Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes). What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the frozen terms allow the buyer to adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesallow_quantity_adjustment). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of a bundle line, recorded when the line joined the subscription. `bundle_components`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line bills. Present on `bundle` lines. `bundle_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item, recorded when the line joined the subscription. `categories`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributescategories). |
| `description` | Optional | string or null | Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. `description`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesdescription). |
| `image` | Optional | Alternative shapes (see declared variants) | Image of the item, recorded when the line joined the subscription. `image`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesimage). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmin_quantity). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. `name`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesname). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. `sku`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessku). |
| `subscription_id` | Optional | string or null | Subscription that owns this line, including frozen lines in a scheduled plan change. `subscription_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1subscription_id). |
| `subscription_line_item_id` | Optional | string or null | Unique identifier for this subscription line item, prefixed `sli_`. `subscription_line_item_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1subscription_line_item_id). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. `subscription_offer_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1subscription_offer_id). |
| `subscription_plan_line_item_id` | Optional | string or null | ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1subscription_plan_line_item_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. `variant_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment

Declared alternatives: [SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesallow_quantity_adjustment).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_components

Declared alternatives: [SubscriptionLineItemPreviousAttributes.bundle_components](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_components).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the bundle the line bills. Present on `bundle` lines..

- Value shape: string. ID of the bundle the line bills. Present on `bundle` lines. ID of the bundle the line bills. Present on `bundle` lines. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line bills. Present on `bundle` lines. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.categories

Declared alternatives: [SubscriptionLineItemPreviousAttributes.categories](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributescategories).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.description

Declared alternatives: [SubscriptionLineItemPreviousAttributes.description](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesdescription).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.image

Declared alternatives: [SubscriptionLineItemPreviousAttributes.image](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesimage).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.max_quantity

Declared alternatives: [SubscriptionLineItemPreviousAttributes.max_quantity](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmax_quantity).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.min_quantity

Declared alternatives: [SubscriptionLineItemPreviousAttributes.min_quantity](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmin_quantity).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [OrderLineItemPreviousAttributes.modifiers](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [SubscriptionLineItemPreviousAttributes.name](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesname).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.sku

Declared alternatives: [SubscriptionLineItemPreviousAttributes.sku](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessku).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_id variant 1

anyOf variant 1: Subscription that owns this line, including frozen lines in a scheduled plan change..

- Value shape: string. Subscription that owns this line, including frozen lines in a scheduled plan change. Subscription that owns this line, including frozen lines in a scheduled plan change. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription that owns this line, including frozen lines in a scheduled plan change. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_line_item_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription line item, prefixed `sli_`..

- Value shape: string. Unique identifier for this subscription line item, prefixed `sli_`. Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription line item, prefixed `sli_`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_offer_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.type

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it..

- Value shape: string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. 

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method

Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method.

Field definitions: [shared fields](CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1: `type` = `"card"`

anyOf variant 1: Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method.; anyOf ExpandedPaymentMethodSummaryPreviousAttributes.

- Optional: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 2, 3

anyOf variant 1: Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method.; anyOf variant 2; anyOf variant 2.

- Undeclared: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.
- Value shape: null. Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.card

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.customer_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.customer_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1customer_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.payment_method_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.payment_method_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1payment_method_id).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.status

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.status](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1status).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.type

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.type](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1type).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.payment_method variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

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

- Value shape: Array of [SubscriptionPromotionPreviousAttributes](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributes). Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 2

anyOf variant 2.

- Value shape: null. Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Optional | integer or null | First charged cycle eligible for this promotion. `first_cycle`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesfirst_cycle). |
| `name` | Optional | string or null | Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. `name`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesname). |
| `promotion_code_id` | Optional | string or null or null | ID of the promotion code used to attach the promotion. Null when no promotion code was used. `promotion_code_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions-variant-1-fields-1promotion_code_id). |
| `promotion_id` | Optional | string or null | ID of the promotion attached to the subscription. `promotion_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributespromotions-variant-1-fields-1promotion_id). |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) or null | How often the promotion's discount repeats, frozen when the promotion was attached. `recurrence`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesrecurrence). |
| `remaining_cycles` | Optional | integer or null or null | Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. `remaining_cycles`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesremaining_cycles). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.first_cycle

Declared alternatives: [SubscriptionPromotionPreviousAttributes.first_cycle](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesfirst_cycle).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.name

Declared alternatives: [SubscriptionPromotionPreviousAttributes.name](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesname).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_code_id

### SubscriptionActivatedMerchantEventDataPreviousAttributes.promotions variant 1.[] fields 1.promotion_code_id variant 1

anyOf variant 1: ID of the promotion code used to attach the promotion. Null when no promotion code was used..

- Value shape: (string or null). ID of the promotion code used to attach the promotion. Null when no promotion code was used. ID of the promotion code used to attach the promotion. Null when no promotion code was used. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. 

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change

Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string or null | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1billing_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of target billing_interval units between charges. `billing_interval_count`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1billing_interval_count). |
| `effective_at` | Conditional | string or null or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. `effective_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1effective_at). |
| `line_items` | Conditional | Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes) or null | Frozen target lines, including buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1line_items). |
| `recurring_subtotal_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Frozen item subtotal per target billing period, before discounts, shipping, and tax. |
| `requested_by` | Conditional | string or null | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. `requested_by`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1requested_by). |
| `scheduled_at` | Conditional | string or null | When the plan change was scheduled. `scheduled_at`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1scheduled_at). |
| `subscription_plan_id` | Conditional | string or null | The scheduled target subscription plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesscheduled_plan_change-variant-1subscription_plan_id). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1

anyOf variant 1: Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.; anyOf SubscriptionScheduledPlanChangePreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan_id`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 2, 3

anyOf variant 1: Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.; anyOf variant 2; anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan_id`.
- Value shape: null. Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval variant 1

anyOf variant 1: The frozen target billing interval..

- Value shape: string. The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval variant 2

anyOf variant 2.

- Value shape: null. The frozen target billing interval. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval_count

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval_count variant 1

anyOf variant 1: Number of target billing_interval units between charges..

- Value shape: integer. Number of target billing_interval units between charges. Number of target billing_interval units between charges. Format: `int32`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of target billing_interval units between charges. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.effective_at

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.effective_at variant 1

anyOf variant 1: Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date..

- Value shape: (string or null). Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.effective_at variant 2

anyOf variant 2.

- Value shape: null. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.line_items

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.line_items variant 1

anyOf variant 1: Frozen target lines, including buyer quantity permissions and bounds..

- Value shape: Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes). Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.line_items variant 2

anyOf variant 2.

- Value shape: null. Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.line_items variant 1.[] fields 1

Field definitions: [SubscriptionActivatedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesline_items-variant-1-fields-1).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.requested_by

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.requested_by variant 1

anyOf variant 1: Who scheduled the plan change..

- Value shape: string. Who scheduled the plan change. Values: `"buyer"`, `"merchant"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_plan_change variant 1.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who scheduled the plan change. 

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

- Value shape: (string or null). When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.scheduled_resume_at variant 2

anyOf variant 2.

- Value shape: null. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location

Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) | The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it. `address`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location-variant-1address). |
| `customer_address_id` | Conditional | string or null | ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. `customer_address_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location-variant-1customer_address_id). |
| `customer_id` | Conditional | string or null or null | Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. `customer_id`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesservice_location-variant-1customer_id). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1

anyOf SubscriptionServiceLocationPreviousAttributes.

- Optional: `address`, `customer_address_id`, `customer_id`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 2

anyOf variant 2.

- Undeclared: `address`, `customer_address_id`, `customer_id`.
- Value shape: null. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address

The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### SubscriptionActivatedMerchantEventDataPreviousAttributes.service_location variant 1.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

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

- Value shape: (string or null). Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

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

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1status).

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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax

The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | Alternative shapes (see declared variants) or null | How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. `calculation`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestax-variant-1calculation). |
| `enabled` | Conditional | boolean or null | Whether the subscription's orders calculate tax. `enabled`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestax-variant-1enabled). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1

anyOf variant 1: The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials.; anyOf SubscriptionTaxPreviousAttributes.

- Optional: `calculation`, `enabled`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 2, 3

anyOf variant 1: The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials.; anyOf variant 2; anyOf variant 2.

- Undeclared: `calculation`, `enabled`.
- Value shape: null. The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation

How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Conditional | string or null | Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. `components_source`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestax-variant-1calculation-variant-1components_source). |
| `mode` | Conditional | string or null | How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributestax-variant-1calculation-variant-1mode). |

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1: `components_source` = `"callback"`

anyOf variant 1: How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.; anyOf SubscriptionTaxCalculationPreviousAttributes.

- Optional: `components_source`, `mode`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 2, 3

anyOf variant 1: How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.; anyOf variant 2; anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.components_source

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.components_source variant 1

anyOf variant 1: Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`..

- Value shape: string. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.components_source variant 2

anyOf variant 2.

- Value shape: null. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.mode

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.mode variant 1

anyOf variant 1: How the subscription's orders calculate tax..

- Value shape: string. How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.calculation variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. How the subscription's orders calculate tax. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.enabled

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.enabled variant 1

anyOf variant 1: Whether the subscription's orders calculate tax..

- Value shape: boolean. Whether the subscription's orders calculate tax. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.tax variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the subscription's orders calculate tax. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.terms_type

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.terms_type](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1terms_type).

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
| `fixable_by` | Conditional | string or null | Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Values: `"buyer"`, `"merchant"`. `fixable_by`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesupcoming_delivery_hold-variant-1fixable_by). |
| `reason` | Conditional | string or null | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. `reason`: [declared alternatives](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1reason). |
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

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.fixable_by variant 1

anyOf variant 1: Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription..

- Value shape: string. Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Values: `"buyer"`, `"merchant"`.

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.fixable_by variant 2

anyOf variant 2.

- Value shape: null. Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. 

### SubscriptionActivatedMerchantEventDataPreviousAttributes.upcoming_delivery_hold variant 1.reason

Declared alternatives: [SubscriptionActivatedMerchantEventDataPreviousAttributes.delivery_hold variant 1.reason](../models/SubscriptionActivatedMerchantEventDataPreviousAttributes.md#subscriptionactivatedmerchanteventdatapreviousattributesdelivery_hold-variant-1reason).

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

