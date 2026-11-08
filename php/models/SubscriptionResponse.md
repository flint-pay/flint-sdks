[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionResponse

A response containing `Subscription` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Subscription](../models/Subscription.md#subscription) | Resource, collection, or operation result returned by this request. A customer's recurring purchase. `data`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionResponse.data

Resource, collection, or operation result returned by this request. A customer's recurring purchase.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_interval` | Required | string | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Billing interval and count pairs frozen from the plan or shared by the subscription offers. Every option bills the same recorded line prices once per period. Changing the interval does not scale those prices. maxItems: `12`. uniqueItems: `true`. |
| `billing_schedule_owner` | Required | string | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. |
| `billing_schedule_waiting_started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. Example: `[]`. `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
| `cancel_at_period_end` | Required | boolean | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_details` | Optional | [SubscriptionCancellationDetails](../models/SubscriptionCancellationDetails.md#subscriptioncancellationdetails) | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation. `cancellation_details`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatacancellation_details). |
| `cancellation_reason` | Optional | string | Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`. |
| `completed_cycles` | Required | integer | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: `uint64`. minimum: `0`. |
| `contract_end_at` | Optional | string | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `contract_start_at` | Optional | string | When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatacustomer). |
| `customer_id` | Required | string | The customer this subscription bills. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery` | Optional | [SubscriptionDelivery](../models/SubscriptionDelivery.md#subscriptiondelivery) | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it. `delivery`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery). |
| `delivery_hold` | Optional | [SubscriptionDeliveryHold](../models/SubscriptionDeliveryHold.md#subscriptiondeliveryhold) | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it. `delivery_hold`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold). |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `end_after` | Required | Alternative shapes (see declared variants) or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. `end_after`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedataend_after). |
| `expires_at` | Required | string or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_wait` | Optional | [SubscriptionInventoryWait](../models/SubscriptionInventoryWait.md#subscriptioninventorywait) | Renewal waiting for stock. Included only in merchant responses and omitted from buyer responses. Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started. `inventory_wait`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatainventory_wait). |
| `is_awaiting_billing_schedule` | Optional | boolean | True while an active or trialing subscription on an external billing schedule has no next billing date. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatalast_payment_error). |
| `line_items` | Required | Array of [SubscriptionLineItem](../models/SubscriptionLineItem.md#subscriptionlineitem) | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataline_items). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `missed_billing_at` | Optional | string | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `next_retry_at` | Required | string or null | Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `open_renewal_order_id` | Optional | string | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `pause_reason` | Optional | string | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. |
| `paused_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null | Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. `payment_method`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatapayment_method). |
| `payment_method_due_at` | Required | string or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), or an external schedule has no known boundary. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_method_id` | Required | string or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions). |
| `prorate_first_period` | Required | boolean | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. |
| `quantity` | Required | integer | How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: `int32`. |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. |
| `remaining_cycles` | Required | integer or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: `uint64`. minimum: `0`. |
| `resume_requested_at` | Required | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_cancel_at` | Required | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_plan_change` | Required | [SubscriptionScheduledPlanChange](../models/SubscriptionScheduledPlanChange.md#subscriptionscheduledplanchange) or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. `scheduled_plan_change`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatascheduled_plan_change). |
| `scheduled_promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions). |
| `scheduled_resume_at` | Required | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many billing intervals after paused_at. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_location` | Optional | [SubscriptionServiceLocation](../models/SubscriptionServiceLocation.md#subscriptionservicelocation) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The address where a subscription's service is delivered, with the saved customer address it came from. `service_location`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataservice_location). |
| `starts_at` | Optional | string | When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string | Stable identifier of the subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatasubscription_plan). |
| `subscription_plan_id` | Optional | string | Subscription plan ID. Omitted when terms_type is subscription_offer. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `supported_actions` | Required | Array of string | Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"retry_payment"`, `"change_plan"`, `"change_quantity"`. |
| `terms_type` | Required | string | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `test_clock_id` | Optional | string | ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. Example: `"tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ"`. |
| `trial_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHold](../models/SubscriptionUpcomingDeliveryHold.md#subscriptionupcomingdeliveryhold) | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it. `upcoming_delivery_hold`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `0`. |

### SubscriptionResponse.data.buyer_actions[]

One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel` | Optional | [BuyerCancelActionOptions](../models/BuyerCancelActionOptions.md#buyercancelactionoptions) | Present only on an available cancel action. The cancellation choices this subscription accepts from its buyer. |
| `due_at` | Optional | string | When the buyer needs to act by. Omitted when the action has no deadline, or when the resource's state or the store's policy doesn't allow it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `is_available` | Required | boolean | Whether this session can take the action now. |
| `is_required` | Required | boolean | Whether the store needs the buyer to take the action, such as paying a due invoice. It stays true when the only thing in the way is signing in. |
| `kind` | Required | string | What the action is. Each resource lists its own kinds in a fixed order. New kinds may be added; ignore kinds you don't recognize. Values: [20 declared values](BuyerActionInput.md#buyeractioninput-kind-values). |
| `pause` | Optional | [BuyerPauseActionOptions](../models/BuyerPauseActionOptions.md#buyerpauseactionoptions) | Present only on an available pause action. The pause lengths this subscription accepts from its buyer. |
| `pay_balance` | Optional | [BuyerPayBalanceActionOptions](../models/BuyerPayBalanceActionOptions.md#buyerpaybalanceactionoptions) | Present only on an available pay_balance action. The return resolutions the buyer can pay now. `pay_balance`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actionspay_balance). |
| `unavailable_reason` | Optional | string | Why the action can't be taken now. Present exactly when is_available is false. New reasons may be added; show a general message for a reason you don't recognize. Values: `"sign_in_required"`, `"store_policy"`, `"not_in_state"`, `"window_closed"`, `"nothing_to_return"`, `"collection_unavailable"`, `"limit_reached"`. |

### SubscriptionResponse.data.buyer_actions[].pay_balance

Present only on an available pay_balance action. The return resolutions the buyer can pay now.

Field definitions: [shared fields](BuyerPayBalanceActionOptionsInput.md#buyerpaybalanceactionoptionsinput).

### SubscriptionResponse.data.cancellation_details

Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation.

Field definitions: [shared fields](SubscriptionCancellationDetailsInput.md#subscriptioncancellationdetailsinput).

### SubscriptionResponse.data.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### SubscriptionResponse.data.delivery

Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummary](../models/SubscriptionDeliveryMethodSummary.md#subscriptiondeliverymethodsummary) | A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted. |
| `delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_version` | Required | integer | Version of the subscription's saved delivery preference. Format: `uint64`. minimum: `0`. |
| `destination` | Required | [SubscriptionDeliveryDestination](../models/SubscriptionDeliveryDestination.md#subscriptiondeliverydestination) | The delivery address for a subscription's future shipments, with the saved customer address it came from. `destination`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadeliverydestination). |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_by` | Optional | string | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. |

### SubscriptionResponse.data.delivery.destination

The delivery address for a subscription's future shipments, with the saved customer address it came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Resolved delivery address used by future shipments. `address`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress). |
| `customer_address_id` | Optional | string | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |

### SubscriptionResponse.data.delivery.destination.address

Resolved delivery address used by future shipments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Conditional | string | City or locality of the address. |
| `country` | Conditional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Conditional | string | Street address, including the building number. |
| `line2` | Conditional | string | Apartment, suite, floor, or other address details. |
| `postal_code` | Conditional | string | Postal or ZIP code of the address. |
| `state` | Conditional | string | State, province, or region of the address. |

### SubscriptionResponse.data.delivery.destination.address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### SubscriptionResponse.data.delivery.destination.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Resolved delivery address used by future shipments. 

### SubscriptionResponse.data.delivery_hold

Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it.

Field definitions: [shared fields](SubscriptionDeliveryHoldInput.md#subscriptiondeliveryholdinput).

### SubscriptionResponse.data.end_after

Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer | Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. |
| `type` | Conditional | string | How this automatic end is measured. |
| `end_date` | Conditional | string | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. Example: `"2026-08-02"`. |
| `timezone` | Conditional | string | IANA timezone saved with the end date. |

### SubscriptionResponse.data.end_after variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfter: The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.; oneOf with type: "cycles": A subscription automatic end measured by the total number of charged billing cycles..

- Required: `cycle_count`, `type`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### SubscriptionResponse.data.end_after variant 2: `type` = `"date"`

anyOf SubscriptionEndAfter: The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.; oneOf with type: "date": A subscription automatic end measured by a saved local calendar date..

- Required: `end_date`, `timezone`, `type`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

### SubscriptionResponse.data.end_after variant 3

anyOf variant 2.

- Undeclared: `cycle_count`, `type`, `end_date`, `timezone`.
- Value shape: null. Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. 

### SubscriptionResponse.data.inventory_wait

Renewal waiting for stock. Included only in merchant responses and omitted from buyer responses. Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started.

Field definitions: [shared fields](SubscriptionInventoryWaitInput.md#subscriptioninventorywaitinput).

### SubscriptionResponse.data.last_payment_error

Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.

Field definitions: [shared fields](OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error).

### SubscriptionResponse.data.line_items[]

An item included in a customer's recurring purchase.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the frozen terms allow the buyer to adjust this line quantity. |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string |  |
| `product_id` | Optional | string | Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string |  |
| `subscription_line_item_id` | Optional | string | Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `subscription_offer_id` | Optional | string | Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |
| `subscription_plan_line_item_id` | Optional | string | Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### SubscriptionResponse.data.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### SubscriptionResponse.data.line_items[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### SubscriptionResponse.data.line_items[].modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### SubscriptionResponse.data.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### SubscriptionResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionResponse.data.payment_method

Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Conditional | [CardDetails](../models/CardDetails.md#carddetails) | Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `payment_method_id` | Conditional | string | Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `status` | Conditional | string | Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. |
| `type` | Conditional | string | Values: `"card"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### SubscriptionResponse.data.payment_method variant 1: `type` = `"card"`

anyOf ExpandedPaymentMethodSummary: A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded..

- Required: `payment_method_id`, `status`, `type`.
- Optional: `card`, `created_at`, `customer_id`, `updated_at`.

### SubscriptionResponse.data.payment_method variant 2

anyOf variant 2.

- Undeclared: `card`, `created_at`, `customer_id`, `payment_method_id`, `status`, `type`, `updated_at`.
- Value shape: null. Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. 

### SubscriptionResponse.data.promotions[]

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Required | integer | First charged cycle eligible for this promotion. Format: `uint64`. minimum: `1`. |
| `name` | Required | string |  |
| `promotion_code_id` | Required | string or null | The attached promotion code ID; null when no promotion code was used. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. |
| `promotion_id` | Required | string | Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `recurrence` | Required | object and Alternative shapes (see declared variants) | How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatapromotionsrecurrence). |
| `remaining_cycles` | Required | integer or null | Discounted paid cycles remaining; null for a promotion that lasts forever unless a replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: `int64`. |

### SubscriptionResponse.data.promotions[].recurrence

How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.

Field definitions: [shared fields](PromotionRecurrenceInput.md#promotionrecurrenceinput).

### SubscriptionResponse.data.promotions[].recurrence variant 1: `type` = `"once"`

oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### SubscriptionResponse.data.promotions[].recurrence variant 2: `type` = `"repeating"`

oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### SubscriptionResponse.data.promotions[].recurrence variant 3: `type` = `"forever"`

oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

### SubscriptionResponse.data.scheduled_plan_change

Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Number of target billing_interval units between charges. Format: `int32`. |
| `effective_at` | Conditional | string or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Conditional | Array of [SubscriptionLineItem](../models/SubscriptionLineItem.md#subscriptionlineitem) | Frozen target lines, including buyer quantity permissions and bounds. `line_items[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataline_items). |
| `quantity` | Conditional | integer | The frozen target subscription quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Frozen item subtotal per target billing period, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requested_by` | Conditional | string | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. |
| `scheduled_at` | Conditional | string | When the plan change was scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_plan_id` | Conditional | string | The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

### SubscriptionResponse.data.scheduled_plan_change variant 1

anyOf SubscriptionScheduledPlanChange: Frozen target terms that apply at the next charged renewal..

- Required: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `quantity`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan_id`.

### SubscriptionResponse.data.scheduled_plan_change variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `quantity`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan_id`.
- Value shape: null. Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. 

### SubscriptionResponse.data.scheduled_plan_change variant 1.line_items[]

Field definitions: [SubscriptionResponse.data.line_items[]](../models/SubscriptionResponse.md#subscriptionresponsedataline_items).

### SubscriptionResponse.data.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionResponse.data.service_location

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The address where a subscription's service is delivered, with the saved customer address it came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress). |
| `customer_address_id` | Optional | string | Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |

### SubscriptionResponse.data.service_location.address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

### SubscriptionResponse.data.subscription_plan

Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan.

Field definitions: [shared fields](OrderResponse.md#orderresponsedatasubscription_plan).

### SubscriptionResponse.data.subscription_plan variant 1

anyOf ExpandedSubscriptionPlanSummary: A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded..

- Required: `billing_interval`, `billing_interval_count`, `currency`, `name`, `status`, `subscription_plan_id`.
- Optional: `billing_interval_options`, `created_at`, `description`, `line_items`, `quantity_options`, `setup_fee_money`, `trial_period_days`, `updated_at`.

### SubscriptionResponse.data.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `quantity_options`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. 

### SubscriptionResponse.data.subscription_plan variant 1.line_items[]

Declared alternatives: [OrderResponse.data.subscription_plan variant 1.line_items[]](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_items).

### SubscriptionResponse.data.upcoming_delivery_hold

Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it.

Field definitions: [shared fields](SubscriptionUpcomingDeliveryHoldInput.md#subscriptionupcomingdeliveryholdinput).

### SubscriptionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

