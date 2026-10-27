[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Subscription

A customer's recurring purchase.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `awaiting_billing_schedule` | Optional | boolean | True while an active or trialing subscription on an external billing schedule has no next billing date. |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_interval` | Required | string | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | maxItems: `12`. uniqueItems: `true`. |
| `billing_schedule_owner` | Required | string | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. |
| `billing_schedule_waiting_started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all twelve every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. |
| `cancel_at_period_end` | Required | boolean | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `cancellation_details` | Optional | [SubscriptionCancellationDetails](../models/SubscriptionCancellationDetails.md#subscriptioncancellationdetails) | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation. |
| `cancellation_reason` | Optional | string | Why the subscription is canceled or scheduled to cancel. Uses cancellation_details.requested_by when recorded, payment_failed for a canceled subscription without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"payment_failed"`, `"other"`. |
| `completed_cycles` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `contract_end_at` | Optional | string | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. |
| `contract_start_at` | Optional | string | When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null |  |
| `customer_id` | Required | string |  |
| `delivery` | Optional | [SubscriptionDelivery](../models/SubscriptionDelivery.md#subscriptiondelivery) | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it. |
| `delivery_hold` | Optional | [SubscriptionDeliveryHold](../models/SubscriptionDeliveryHold.md#subscriptiondeliveryhold) | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_wait` | Optional | [SubscriptionInventoryWait](../models/SubscriptionInventoryWait.md#subscriptioninventorywait) | Renewal waiting for stock. Included only in merchant responses and omitted from buyer responses. Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `line_items` | Required | Array of [SubscriptionLineItem](../models/SubscriptionLineItem.md#subscriptionlineitem) | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `missed_billing_at` | Optional | string | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports awaiting_billing_schedule. Format: `date-time`. |
| `next_retry_at` | Required | string or null | Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. |
| `open_renewal_order_id` | Optional | string | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `pause_reason` | Optional | string | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. |
| `paused_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null |  |
| `payment_method_id` | Required | string | The saved payment method renewals charge. Change it with PATCH. |
| `promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Recurring promotions applying to the next charged cycle. Empty when none apply; signup-only and exhausted promotions are excluded. |
| `quantity` | Required | integer | How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: `int32`. |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. |
| `resume_requested_at` | Required | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: `date-time`. |
| `scheduled_cancel_at` | Required | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. |
| `scheduled_resume_at` | Required | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many billing intervals after paused_at. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. |
| `service_location` | Optional | [SubscriptionServiceLocation](../models/SubscriptionServiceLocation.md#subscriptionservicelocation) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The address where a subscription's service is delivered, with the saved customer address it came from. |
| `starts_at` | Optional | string | When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. |
| `status` | Required | string | Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string |  |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null |  |
| `subscription_plan_id` | Optional | string | Subscription plan ID. Omitted when terms_type is subscription_offer. |
| `supported_actions` | Required | Array of string | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"retry_payment"`, `"change_plan"`. |
| `terms_type` | Required | string | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `trial_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHold](../models/SubscriptionUpcomingDeliveryHold.md#subscriptionupcomingdeliveryhold) | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

