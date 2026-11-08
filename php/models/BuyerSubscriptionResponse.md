[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionResponse

A response containing `BuyerSubscription` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | Resource, collection, or operation result returned by this request. A customer's recurring purchase. `data`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionResponse.data

Resource, collection, or operation result returned by this request. A customer's recurring purchase.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_interval` | Required | string | How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Billing interval and count pairs frozen from the plan or shared by the subscription offers. Every option bills the same recorded line prices once per period. Changing the interval does not scale those prices. maxItems: `12`. uniqueItems: `true`. |
| `billing_schedule_owner` | Required | string | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates the merchant supplies. Read-only for buyers. Values: `"flint"`, `"external"`. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. Example: `[]`. `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
| `cancel_at_period_end` | Required | boolean | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_details` | Optional | [BuyerSubscriptionCancellationDetails](../models/BuyerSubscriptionCancellationDetails.md#buyersubscriptioncancellationdetails) | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation. `cancellation_details`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatacancellation_details). |
| `cancellation_reason` | Optional | string | Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"integration"`, `"payment_failed"`, `"other"`, `"end_after_reached"`. |
| `completed_cycles` | Required | integer | Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: `uint64`. minimum: `0`. |
| `contract_end_at` | Optional | string | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `contract_start_at` | Optional | string | When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | The customer this subscription bills. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery` | Optional | [SubscriptionDelivery](../models/SubscriptionDelivery.md#subscriptiondelivery) | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it. `delivery`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery). |
| `delivery_hold` | Optional | [SubscriptionDeliveryHold](../models/SubscriptionDeliveryHold.md#subscriptiondeliveryhold) | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it. `delivery_hold`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold). |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `end_after` | Required | Alternative shapes (see declared variants) or null | Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. `end_after`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedataend_after). |
| `expires_at` | Required | string or null | Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Null when the end cannot be determined or the subscription is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `is_awaiting_billing_schedule` | Optional | boolean | True while an active or trialing subscription on an external billing schedule has no next billing date. |
| `last_payment_error` | Optional | object | Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive decline signals. `last_payment_error`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatalast_payment_error). |
| `line_items` | Required | Array of [BuyerSubscriptionLineItem](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitem) | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. `line_items[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `missed_billing_at` | Optional | string | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `next_retry_at` | Required | string or null | Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `open_renewal_order_id` | Optional | string | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `pause_reason` | Optional | string | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. |
| `paused_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_method_due_at` | Required | string or null | First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), or an external schedule has no known boundary. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_method_id` | Required | string or null | Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `plan_change_options` | Required | Array of [BuyerSubscriptionPlanChangeOption](../models/BuyerSubscriptionPlanChangeOption.md#buyersubscriptionplanchangeoption) | Plans this subscription may choose, in the store's display order. Includes only active plans with the same currency and delivery requirement whose billing timing is allowed in this subscription's current state. Empty when no plan change is available. maxItems: `25`. `plan_change_options[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_options). |
| `promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. `promotions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions). |
| `prorate_first_period` | Required | boolean | Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. |
| `quantity` | Required | integer | How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: `int32`. |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. |
| `remaining_cycles` | Required | integer or null | Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: `uint64`. minimum: `0`. |
| `resume_requested_at` | Required | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_cancel_at` | Required | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_plan_change` | Required | [BuyerSubscriptionScheduledPlanChange](../models/BuyerSubscriptionScheduledPlanChange.md#buyersubscriptionscheduledplanchange) or null | Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. `scheduled_plan_change`: [declared alternatives](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatascheduled_plan_change). |
| `scheduled_promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. `scheduled_promotions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions). |
| `scheduled_resume_at` | Required | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many billing intervals after paused_at. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_location` | Optional | [BuyerSubscriptionServiceLocation](../models/BuyerSubscriptionServiceLocation.md#buyersubscriptionservicelocation) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The customer address reference or address used as the buyer's subscription service location. |
| `starts_at` | Optional | string | When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string | Stable identifier of the subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan` | Optional | [BuyerExpandedSubscriptionPlanSummary](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummary) or null | `subscription_plan`: [declared alternatives](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatasubscription_plan). |
| `subscription_plan_id` | Optional | string | Subscription plan ID. Omitted when terms_type is subscription_offer. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `terms_type` | Required | string | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `trial_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHold](../models/SubscriptionUpcomingDeliveryHold.md#subscriptionupcomingdeliveryhold) | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it. `upcoming_delivery_hold`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `0`. |

### BuyerSubscriptionResponse.data.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerSubscriptionResponse.data.cancellation_details

Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation.

Field definitions: [shared fields](BuyerSubscriptionCancellationDetailsInput.md#buyersubscriptioncancellationdetailsinput).

### BuyerSubscriptionResponse.data.delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### BuyerSubscriptionResponse.data.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### BuyerSubscriptionResponse.data.end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### BuyerSubscriptionResponse.data.last_payment_error

Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive decline signals.

Field definitions: [shared fields](BuyerSubscriptionInput.md#buyersubscriptioninputlast_payment_error).

### BuyerSubscriptionResponse.data.line_items[]

An item included in a customer's recurring purchase.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the frozen terms allow the buyer to adjust this line quantity. |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_id` | Optional | string | Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [BuyerOrderLineItemModifier](../models/BuyerOrderLineItemModifier.md#buyerorderlineitemmodifier) | `modifiers[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers). |
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

### BuyerSubscriptionResponse.data.line_items[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BuyerSubscriptionResponse.data.line_items[].modifiers[]

A modifier selected on an order line item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_name` | Required | string | Name of the modifier group recorded when this selection was added to the order line item. |
| `modifier_id` | Optional | string | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `name` | Required | string | Name of the selected modifier recorded on the order line item. |
| `order_line_item_modifier_id` | Required | string | Stable identifier of the selected modifier on this order line item. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean | Whether this selection appears in fulfillment details, recorded when selected. |
| `show_on_receipt` | Required | boolean | Whether this selection appears on buyer receipts, recorded when selected. |
| `source_type` | Required | string | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. |
| `text` | Optional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. Text a buyer entered for a text modifier group on an order line item. `text`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifierstext). |
| `text_value` | Optional | string | Buyer-entered text recorded for a text modifier selection. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount added to the item's unit price for each unit of this selection, recorded when selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerSubscriptionResponse.data.line_items[].modifiers[].text

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].text](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifierstext).

### BuyerSubscriptionResponse.data.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### BuyerSubscriptionResponse.data.plan_change_options[]

A subscription plan this buyer may choose, with the store's billing timing and the target plan's summary.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The store's billing timing for this target: now collects a new period with unused-time credit; next_renewal changes the plan now and keeps the current paid period and next billing date; period_end keeps the current plan until the next charged renewal; prorated_now charges the difference for the rest of the current period and keeps the period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `subscription_plan` | Required | [BuyerExpandedSubscriptionPlanSummary](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummary) | The target plan's current summary. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items. `subscription_plan`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_plan). |
| `subscription_plan_id` | Required | string | The target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan

The target plan's current summary. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Every option bills the same line prices once per period. Use separate plans for different prices per interval. maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_planline_items). |
| `name` | Required | string |  |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Required | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[]

A line item on a subscription plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. |
| `bundle_id` | Conditional | string | Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `name` | Conditional | string |  |
| `product_id` | Optional | string | Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string | Unique identifier for this subscription plan line item, prefixed `spli_`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `swap_variants` | Optional | Array of object | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. `swap_variants[]`: [field definitions](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_itemsswap_variants). |
| `tax` | Optional | object | A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_itemstax). |
| `type` | Required | string | Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[] variant 1: `type` = `"variant"`

oneOf with type: "variant": A line item on a subscription plan..

- Condition: not (at least one(present(`bundle_id`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[] variant 2: `type` = `"bundle"`

oneOf with type: "bundle": A line item on a subscription plan..

- Condition: not (at least one(present(`variant_id`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[] variant 3: `type` = `"custom"`

oneOf with type: "custom": A line item on a subscription plan..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[].swap_variants[]

Field definitions: [OrderResponse.data.subscription_plan variant 1.line_items[].swap_variants[]](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_itemsswap_variants).

### BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[].tax

Field definitions: [OrderResponse.data.subscription_plan variant 1.line_items[].tax](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_itemstax).

### BuyerSubscriptionResponse.data.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionResponse.data.scheduled_plan_change

Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Number of target billing_interval units between charges. Format: `int32`. |
| `effective_at` | Conditional | string or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Conditional | Array of [BuyerSubscriptionLineItem](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitem) | Frozen target lines, including buyer quantity permissions and bounds. `line_items[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items). |
| `quantity` | Conditional | integer | The frozen target subscription quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Frozen item subtotal per target billing period, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requested_by` | Conditional | string | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. |
| `scheduled_at` | Conditional | string | When the plan change was scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_plan` | Conditional | [BuyerExpandedSubscriptionPlanSummary](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummary) | The scheduled target plan summary, including archived plans. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items. `subscription_plan`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatascheduled_plan_change-variant-1subscription_plan). |
| `subscription_plan_id` | Conditional | string | The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

### BuyerSubscriptionResponse.data.scheduled_plan_change variant 1

anyOf BuyerSubscriptionScheduledPlanChange: Frozen target terms that apply at the next charged renewal..

- Required: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `quantity`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan`, `subscription_plan_id`.

### BuyerSubscriptionResponse.data.scheduled_plan_change variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `effective_at`, `line_items`, `quantity`, `recurring_subtotal_money`, `requested_by`, `scheduled_at`, `subscription_plan`, `subscription_plan_id`.
- Value shape: null. Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. 

### BuyerSubscriptionResponse.data.scheduled_plan_change variant 1.line_items[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items).

### BuyerSubscriptionResponse.data.scheduled_plan_change variant 1.subscription_plan

The scheduled target plan summary, including archived plans. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.

Field definitions: [shared fields](#buyersubscriptionresponsedataplan_change_optionssubscription_plan).

### BuyerSubscriptionResponse.data.scheduled_plan_change variant 1.subscription_plan.line_items[]

Declared alternatives: [BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_planline_items).

### BuyerSubscriptionResponse.data.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionResponse.data.subscription_plan

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Every option bills the same line prices once per period. Use separate plans for different prices per interval. maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Conditional | string |  |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_planline_items). |
| `name` | Conditional | string |  |
| `quantity_options` | Conditional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Conditional | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Conditional | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Conditional | integer | Format: `int32`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerSubscriptionResponse.data.subscription_plan variant 1

anyOf BuyerExpandedSubscriptionPlanSummary: A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items..

- Required: `billing_interval`, `billing_interval_count`, `currency`, `name`, `status`, `subscription_plan_id`.
- Optional: `billing_interval_options`, `created_at`, `description`, `line_items`, `quantity_options`, `setup_fee_money`, `trial_period_days`, `updated_at`.

### BuyerSubscriptionResponse.data.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `quantity_options`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null.  

### BuyerSubscriptionResponse.data.subscription_plan variant 1.line_items[]

Declared alternatives: [BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_planline_items).

### BuyerSubscriptionResponse.data.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

### BuyerSubscriptionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

