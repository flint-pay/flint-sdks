[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCancelSubscriptionResponse200

A response containing `BuyerSubscription` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | A customer's recurring purchase. `data`: [field definitions](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeCancelSubscriptionResponse200.data

A customer's recurring purchase.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `awaiting_billing_schedule` | Optional | boolean | True while an active or trialing subscription on an external billing schedule has no next billing date. |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges. Changes with billing_interval. Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | maxItems: `12`. uniqueItems: `true`. |
| `billing_schedule_owner` | Required | string | Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Values: `"flint"`, `"external"`. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all twelve every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. Example: `[]`. |
| `cancel_at_period_end` | Required | boolean | True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `cancellation_details` | Optional | [BuyerSubscriptionCancellationDetails](../models/BuyerSubscriptionCancellationDetails.md#buyersubscriptioncancellationdetails) | Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation. |
| `cancellation_reason` | Optional | string | Why the subscription is canceled or scheduled to cancel. Uses cancellation_details.requested_by when recorded, payment_failed for a canceled subscription without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Values: `"buyer"`, `"merchant"`, `"payment_failed"`, `"other"`. |
| `completed_cycles` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `contract_end_at` | Optional | string | When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: `date-time`. |
| `contract_start_at` | Optional | string | When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: `date-time`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `delivery` | Optional | [SubscriptionDelivery](../models/SubscriptionDelivery.md#subscriptiondelivery) | Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it. |
| `delivery_hold` | Optional | [SubscriptionDeliveryHold](../models/SubscriptionDeliveryHold.md#subscriptiondeliveryhold) | Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | object | Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive decline signals. `last_payment_error`: [field definitions](../models/BuyerSubscriptionLastPaymentError.md#buyersubscriptionlastpaymenterror). |
| `line_items` | Required | Array of [BuyerSubscriptionLineItem](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitem) | What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. |
| `merchant_id` | Optional | string |  |
| `missed_billing_at` | Optional | string | The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: `date-time`. |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports awaiting_billing_schedule. Format: `date-time`. |
| `next_retry_at` | Required | string or null | Recorded automatic payment retry time. Null when no retry time is available. Format: `date-time`. |
| `open_renewal_order_id` | Optional | string | ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `pause_reason` | Optional | string | Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Values: `"buyer"`, `"delivery_action_required"`, `"merchant"`, `"payment_failed"`. |
| `paused_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `payment_method_id` | Required | string | The saved payment method renewals charge. Change it with PATCH. |
| `promotions` | Required | Array of [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | Recurring promotions applying to the next charged cycle. Empty when none apply; signup-only and exhausted promotions are excluded. |
| `quantity` | Required | integer | How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: `int32`. |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. |
| `resume_requested_at` | Required | string or null | When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: `date-time`. |
| `scheduled_cancel_at` | Required | string or null | When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Null when cancel_at_period_end is false or no cancellation time is available. Format: `date-time`. |
| `scheduled_resume_at` | Required | string or null | When a pause with a length (pause_duration_cycles) resumes on its own: that many billing intervals after paused_at. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: `date-time`. |
| `service_location` | Optional | [BuyerSubscriptionServiceLocation](../models/BuyerSubscriptionServiceLocation.md#buyersubscriptionservicelocation) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The customer address reference or address used as the buyer's subscription service location. |
| `starts_at` | Optional | string | When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: `date-time`. |
| `status` | Required | string | Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string |  |
| `subscription_plan` | Optional | [BuyerExpandedSubscriptionPlanSummary](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummary) or null | `subscription_plan`: [declared alternatives](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200datasubscription_plan). |
| `subscription_plan_id` | Optional | string | Subscription plan ID. Omitted when terms_type is subscription_offer. |
| `terms_type` | Required | string | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `trial_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `upcoming_delivery_hold` | Optional | [SubscriptionUpcomingDeliveryHold](../models/SubscriptionUpcomingDeliveryHold.md#subscriptionupcomingdeliveryhold) | Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

### MeCancelSubscriptionResponse200.data.last_payment_error

Field definitions: [BuyerSubscriptionLastPaymentError](../models/BuyerSubscriptionLastPaymentError.md#buyersubscriptionlastpaymenterror).

### MeCancelSubscriptionResponse200.data.subscription_plan

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Conditional | string |  |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200datasubscription_plan-variant-1line_items). |
| `name` | Conditional | string |  |
| `quantity_options` | Conditional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Conditional | string | Active plans accept new signups. Inactive plans refuse new signups with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Conditional | string |  |
| `trial_period_days` | Conditional | integer | Format: `int32`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1

anyOf variant 1: A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items..

- Required: `billing_interval`, `billing_interval_count`, `currency`, `name`, `status`, `subscription_plan_id`.
- Optional: `billing_interval_options`, `created_at`, `description`, `line_items`, `quantity_options`, `setup_fee_money`, `trial_period_days`, `updated_at`.

### MeCancelSubscriptionResponse200.data.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `quantity_options`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null.  

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1.line_items[]

A line item of a subscription plan as a buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string |  |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) |  |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `name` | Conditional | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string |  |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `swap_variants` | Optional | Array of object | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. `swap_variants[]`: [field definitions](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_itemsswap_variants). |
| `tax` | Optional | object | A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_itemstax). |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string |  |

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1.line_items[] variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1.line_items[] variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1.line_items[] variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1.line_items[].swap_variants[]

Field definitions: [OrdersApplyDiscountResponse200.data.subscription_plan variant 1.line_items[].swap_variants[]](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_itemsswap_variants).

### MeCancelSubscriptionResponse200.data.subscription_plan variant 1.line_items[].tax

Field definitions: [OrdersApplyDiscountResponse200.data.subscription_plan variant 1.line_items[].tax](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_itemstax).

