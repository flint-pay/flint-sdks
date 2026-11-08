[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionQuantityChangeResultResponse

A response containing `SubscriptionQuantityChangeResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionQuantityChangeResult](../models/SubscriptionQuantityChangeResult.md#subscriptionquantitychangeresult) | Resource, collection, or operation result returned by this request. The subscription and any immediate prorated billing outcome. A decline leaves the subscription unchanged. `data`: [field definitions](../models/SubscriptionQuantityChangeResultResponse.md#subscriptionquantitychangeresultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionQuantityChangeResultResponse.data

Resource, collection, or operation result returned by this request. The subscription and any immediate prorated billing outcome. A decline leaves the subscription unchanged.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The resolved billing timing for this quantity change. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `order` | Required | [Order](../models/Order.md#order) or null | The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. `order`: [declared alternatives](../models/SubscriptionQuantityChangeResultResponse.md#subscriptionquantitychangeresultresponsedataorder). |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. `order_payment_attempt`: [declared alternatives](../models/SubscriptionQuantityChangeResultResponse.md#subscriptionquantitychangeresultresponsedataorder_payment_attempt). |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionQuantityChangeResultResponse.md#subscriptionquantitychangeresultresponsedatasubscription). |

### SubscriptionQuantityChangeResultResponse.data.order

The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero.

Field definitions: [shared fields](SubscriptionPlanChangeResultResponse.md#subscriptionplanchangeresultresponsedataorder).

### SubscriptionQuantityChangeResultResponse.data.order variant 1

anyOf Order: A customer's purchase and its payment and fulfillment progress..

- Required: `charges`, `checkout_session_ids`, `client_reference`, `created_at`, `custom_field_answers`, `deferred_promotions`, `discounts`, `fulfillments`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `line_items`, `merchant_id`, `order_id`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `settlement_amounts`, `status`, `supported_actions`, `tax`, `tips`, `updated_at`, `version`.
- Optional: `active_payment_attempt`, `authorization_amounts`, `buyer_contact`, `buyer_note`, `closed_at`, `closed_reason`, `closed_reason_message`, `customer`, `customer_id`, `delivery_destination`, `external_reference_id`, `fulfillment_status`, `gift_card_estimate`, `internal_note`, `inventory_exception_reason`, `inventory_exception_resolution_message`, `inventory_exception_status`, `inventory_reservation_id`, `inventory_routing_source`, `metadata`, `order_number`, `origin`, `payment_collection`, `payment_intents`, `payment_link_id`, `return_resolution_id`, `setup_collection`, `subscription`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan`, `subscription_plan_id`, `ticketed_event`.

### SubscriptionQuantityChangeResultResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `active_payment_attempt`, `authorization_amounts`, `buyer_contact`, `buyer_note`, `charges`, `checkout_session_ids`, `client_reference`, `closed_at`, `closed_reason`, `closed_reason_message`, `created_at`, `custom_field_answers`, `customer`, `customer_id`, `deferred_promotions`, `delivery_destination`, `discounts`, `external_reference_id`, `fulfillment_status`, `fulfillments`, `gift_card_estimate`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `internal_note`, `inventory_exception_reason`, `inventory_exception_resolution_message`, `inventory_exception_status`, `inventory_reservation_id`, `inventory_routing_source`, `line_items`, `merchant_id`, `metadata`, `order_id`, `order_number`, `origin`, `paid_at`, `payment_collection`, `payment_intent_ids`, `payment_intents`, `payment_link_id`, `payment_status`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `return_resolution_id`, `settlement_amounts`, `setup_collection`, `status`, `subscription`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan`, `subscription_plan_id`, `supported_actions`, `tax`, `ticketed_event`, `tips`, `updated_at`, `version`.
- Value shape: null. The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. 

### SubscriptionQuantityChangeResultResponse.data.order variant 1.active_payment_attempt

Field definitions: [OrderResponse.data.active_payment_attempt](../models/OrderResponse.md#orderresponsedataactive_payment_attempt).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.customer

Declared alternatives: [OrderResponse.data.customer](../models/OrderResponse.md#orderresponsedatacustomer).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.fulfillments[]

Field definitions: [OrderResponse.data.fulfillments[]](../models/OrderResponse.md#orderresponsedatafulfillments).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.inventory_routing_source

Field definitions: [OrderResponse.data.inventory_routing_source](../models/OrderResponse.md#orderresponsedatainventory_routing_source).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.line_items[]

Field definitions: [OrderResponse.data.line_items[]](../models/OrderResponse.md#orderresponsedataline_items).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.subscription

Declared alternatives: [OrderResponse.data.subscription](../models/OrderResponse.md#orderresponsedatasubscription).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### SubscriptionQuantityChangeResultResponse.data.order variant 1.tips[]

Field definitions: [OrderResponse.data.tips[]](../models/OrderResponse.md#orderresponsedatatips).

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt

The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Conditional | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Conditional | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Conditional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error). |
| `mode` | Conditional | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Conditional | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Conditional | Array of [PaymentAttemptPaymentIntent](../models/PaymentAttemptPaymentIntent.md#paymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents). |
| `payment_method_save` | Conditional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Conditional | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Values: [10 declared values](#subscriptionquantitychangeresultresponsedataorder_payment_attempt-status-values). |
| `status_reason` | Conditional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [27 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt status values

- `"processing"`
- `"requires_action"`
- `"requires_capture"`
- `"partially_succeeded"`
- `"requires_retry"`
- `"finalizing"`
- `"succeeded"`
- `"failed"`
- `"expired"`
- `"canceled"`

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1

anyOf OrderPaymentAttempt: An attempt to pay an order..

- Required: `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `mode`, `order_payment_attempt_id`, `payment_intents`, `pending_actions`, `status`.
- Optional: `completed_at`, `last_payment_error`, `payment_method_save`, `started_at`, `status_reason`.

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `last_payment_error`, `mode`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`.
- Value shape: null. The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. 

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.last_payment_error

Field definitions: [OrderResponse.data.active_payment_attempt.last_payment_error](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error).

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.payment_intents[]

Field definitions: [OrderResponse.data.active_payment_attempt.payment_intents[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents).

### SubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### SubscriptionQuantityChangeResultResponse.data.subscription

The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedata).

### SubscriptionQuantityChangeResultResponse.data.subscription.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### SubscriptionQuantityChangeResultResponse.data.subscription.cancellation_details

Field definitions: [SubscriptionResponse.data.cancellation_details](../models/SubscriptionResponse.md#subscriptionresponsedatacancellation_details).

### SubscriptionQuantityChangeResultResponse.data.subscription.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### SubscriptionQuantityChangeResultResponse.data.subscription.delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### SubscriptionQuantityChangeResultResponse.data.subscription.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### SubscriptionQuantityChangeResultResponse.data.subscription.end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### SubscriptionQuantityChangeResultResponse.data.subscription.inventory_wait

Field definitions: [SubscriptionResponse.data.inventory_wait](../models/SubscriptionResponse.md#subscriptionresponsedatainventory_wait).

### SubscriptionQuantityChangeResultResponse.data.subscription.last_payment_error

Field definitions: [SubscriptionResponse.data.last_payment_error](../models/SubscriptionResponse.md#subscriptionresponsedatalast_payment_error).

### SubscriptionQuantityChangeResultResponse.data.subscription.line_items[]

Field definitions: [SubscriptionResponse.data.line_items[]](../models/SubscriptionResponse.md#subscriptionresponsedataline_items).

### SubscriptionQuantityChangeResultResponse.data.subscription.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionQuantityChangeResultResponse.data.subscription.payment_method

Declared alternatives: [SubscriptionResponse.data.payment_method](../models/SubscriptionResponse.md#subscriptionresponsedatapayment_method).

### SubscriptionQuantityChangeResultResponse.data.subscription.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionQuantityChangeResultResponse.data.subscription.scheduled_plan_change

Declared alternatives: [SubscriptionResponse.data.scheduled_plan_change](../models/SubscriptionResponse.md#subscriptionresponsedatascheduled_plan_change).

### SubscriptionQuantityChangeResultResponse.data.subscription.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionQuantityChangeResultResponse.data.subscription.service_location

Field definitions: [SubscriptionResponse.data.service_location](../models/SubscriptionResponse.md#subscriptionresponsedataservice_location).

### SubscriptionQuantityChangeResultResponse.data.subscription.subscription_plan

Declared alternatives: [SubscriptionResponse.data.subscription_plan](../models/SubscriptionResponse.md#subscriptionresponsedatasubscription_plan).

### SubscriptionQuantityChangeResultResponse.data.subscription.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

### SubscriptionQuantityChangeResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

