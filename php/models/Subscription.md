[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Subscription

A customer's recurring purchase.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_interval` | Required | string | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. maxItems: `12`. uniqueItems: `true`. |
| `billing_schedule_owner` | Required | string | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. |
| `billing_schedule_waiting_started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
| `cancel_at_period_end` | Required | boolean | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `cancellation_details` | Optional | [SubscriptionCancellationDetails](../models/SubscriptionCancellationDetails.md#subscriptioncancellationdetails) | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation. `cancellation_details`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatacancellation_details). |
| `cancellation_reason` | Optional | string | Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`, `"signup_order_refunded"`. |
| `completed_cycles` | Required | integer | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: `uint64`. minimum: `0`. |
| `contract_end_at` | Optional | string | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. |
| `contract_start_at` | Optional | string | When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Required | string | The customer this subscription bills. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery` | Optional | [SubscriptionDelivery](../models/SubscriptionDelivery.md#subscriptiondelivery) | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it. `delivery`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery). |
| `delivery_hold` | Optional | [SubscriptionDeliveryHold](../models/SubscriptionDeliveryHold.md#subscriptiondeliveryhold) | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it. `delivery_hold`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold). |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `end_after` | Required | Alternative shapes (see declared variants) or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. `end_after`: [declared alternatives](../models/Subscription.md#subscriptionend_after). |
| `expires_at` | Required | string or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `gift_recipient` | Required | [SubscriptionGiftRecipient](../models/SubscriptionGiftRecipient.md#subscriptiongiftrecipient) or null | Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. |
| `inventory_wait` | Optional | [SubscriptionInventoryWait](../models/SubscriptionInventoryWait.md#subscriptioninventorywait) | Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started. `inventory_wait`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatainventory_wait). |
| `is_awaiting_billing_schedule` | Optional | boolean | True while an active or trialing subscription on an external billing schedule has no next billing date. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatalast_payment_error). |
| `line_items` | Required | Array of [SubscriptionLineItem](../models/SubscriptionLineItem.md#subscriptionlineitem) | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataline_items). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `missed_billing_at` | Optional | string | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. |
| `next_delivery_at` | Required | string or null | When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. Format: `date-time`. |
| `next_retry_at` | Required | string or null | Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. |
| `open_renewal_order_id` | Optional | string | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `pause_reason` | Optional | string | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. |
| `paused_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null | Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. |
| `payment_method_due_at` | Required | string or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. Format: `date-time`. |
| `payment_method_id` | Required | string or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. |
| `promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions). |
| `prorate_first_period` | Required | boolean | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. |
| `quantity` | Required | integer | How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: `int32`. |
| `quantity_options` | Optional | Array of integer | Quantities this subscription can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of these values, and the request is refused otherwise. A buyer can change quantity only when more than one is listed. For a subscription on a plan, the list follows the plan's current quantity_options. A subscription that came from an offer keeps the choices the offer had at signup. [1] when no other quantity is offered. maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. |
| `remaining_cycles` | Required | integer or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: `uint64`. minimum: `0`. |
| `remaining_prepaid_deliveries` | Required | integer | Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Format: `int32`. minimum: `0`. maximum: `23`. |
| `resume_requested_at` | Required | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: `date-time`. |
| `scheduled_cancel_at` | Required | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. |
| `scheduled_plan_change` | Required | [SubscriptionScheduledPlanChange](../models/SubscriptionScheduledPlanChange.md#subscriptionscheduledplanchange) or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. |
| `scheduled_promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions). |
| `scheduled_resume_at` | Required | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. |
| `service_location` | Optional | [SubscriptionServiceLocation](../models/SubscriptionServiceLocation.md#subscriptionservicelocation) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The address where a subscription's service is delivered, with the saved customer address it came from. `service_location`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataservice_location). |
| `starts_at` | Optional | string | When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. |
| `status` | Required | string | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string | Stable identifier of the subscription. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string | Subscription plan ID. Omitted when terms_type is subscription_offer. |
| `supported_actions` | Required | Array of string | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"retry_payment"`, `"change_plan"`, `"change_quantity"`. |
| `tax` | Required | [SubscriptionTax](../models/SubscriptionTax.md#subscriptiontax) or null | The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. |
| `terms_type` | Required | string | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `test_clock_id` | Optional | string | ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. |
| `trial_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHold](../models/SubscriptionUpcomingDeliveryHold.md#subscriptionupcomingdeliveryhold) | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it. `upcoming_delivery_hold`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `0`. |

### Subscription.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### Subscription.cancellation_details

Field definitions: [SubscriptionResponse.data.cancellation_details](../models/SubscriptionResponse.md#subscriptionresponsedatacancellation_details).

### Subscription.delivery fields 1

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### Subscription.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### Subscription.end_after

Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer | Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. |
| `type` | Conditional | string | How this automatic end is measured. |
| `end_date` | Conditional | string | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. |
| `timezone` | Conditional | string | IANA timezone saved with the end date. |

### Subscription.end_after variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfter: The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.; oneOf with type: "cycles": A subscription automatic end measured by the total number of charged billing cycles..

- Required: `cycle_count`, `type`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### Subscription.end_after variant 2: `type` = `"date"`

anyOf SubscriptionEndAfter: The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.; oneOf with type: "date": A subscription automatic end measured by a saved local calendar date..

- Required: `end_date`, `timezone`, `type`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

### Subscription.end_after variant 3

anyOf variant 2.

- Undeclared: `cycle_count`, `type`, `end_date`, `timezone`.
- Value shape: null. Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. 

### Subscription.inventory_wait

Field definitions: [SubscriptionResponse.data.inventory_wait](../models/SubscriptionResponse.md#subscriptionresponsedatainventory_wait).

### Subscription.last_payment_error

Field definitions: [SubscriptionResponse.data.last_payment_error](../models/SubscriptionResponse.md#subscriptionresponsedatalast_payment_error).

### Subscription.line_items[]

Field definitions: [SubscriptionResponse.data.line_items[]](../models/SubscriptionResponse.md#subscriptionresponsedataline_items).

### Subscription.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### Subscription.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### Subscription.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### Subscription.service_location

Field definitions: [SubscriptionResponse.data.service_location](../models/SubscriptionResponse.md#subscriptionresponsedataservice_location).

### Subscription.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

