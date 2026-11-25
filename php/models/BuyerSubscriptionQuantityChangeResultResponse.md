[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionQuantityChangeResultResponse

A response containing `BuyerSubscriptionQuantityChangeResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionQuantityChangeResult](../models/BuyerSubscriptionQuantityChangeResult.md#buyersubscriptionquantitychangeresult) | Resource, collection, or operation result returned by this request. The subscription and any immediate prorated billing outcome. A decline leaves the subscription unchanged. `data`: [field definitions](../models/BuyerSubscriptionQuantityChangeResultResponse.md#buyersubscriptionquantitychangeresultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionQuantityChangeResultResponse.data

Resource, collection, or operation result returned by this request. The subscription and any immediate prorated billing outcome. A decline leaves the subscription unchanged.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The resolved billing timing for this quantity change. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) or null | The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. `order`: [declared alternatives](../models/BuyerSubscriptionQuantityChangeResultResponse.md#buyersubscriptionquantitychangeresultresponsedataorder). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) or null | The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. `order_payment_attempt`: [declared alternatives](../models/BuyerSubscriptionQuantityChangeResultResponse.md#buyersubscriptionquantitychangeresultresponsedataorder_payment_attempt). |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase. `subscription`: [field definitions](../models/BuyerSubscriptionQuantityChangeResultResponse.md#buyersubscriptionquantitychangeresultresponsedatasubscription). |

### BuyerSubscriptionQuantityChangeResultResponse.data.order

The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero.

Field definitions: [shared fields](BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1

anyOf BuyerOrder: A customer's purchase and its payment and fulfillment progress..

- Required: `buyer_actions`, `charges`, `checkout_session_ids`, `created_at`, `deferred_promotions`, `discounts`, `fulfillments`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `invoice_id`, `line_items`, `merchant_id`, `order_id`, `paid_at`, `payment_intent_ids`, `payment_status`, `prepayment_order_id`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `settlement_amounts`, `status`, `subscription_delivery_number`, `tax`, `tips`, `updated_at`, `version`.
- Optional: `active_payment_attempt`, `authorization_amounts`, `buyer_contact`, `buyer_note`, `closed_at`, `closed_reason`, `customer_id`, `delivery`, `delivery_destination`, `fulfillment_status`, `gift_card_estimate`, `order_number`, `origin`, `payment_collection`, `payment_link_id`, `return_resolution_id`, `setup_collection`, `shop_id`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan_id`, `ticketed_event`.

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `active_payment_attempt`, `authorization_amounts`, `buyer_actions`, `buyer_contact`, `buyer_note`, `charges`, `checkout_session_ids`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `delivery`, `delivery_destination`, `discounts`, `fulfillment_status`, `fulfillments`, `gift_card_estimate`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `invoice_id`, `line_items`, `merchant_id`, `order_id`, `order_number`, `origin`, `paid_at`, `payment_collection`, `payment_intent_ids`, `payment_link_id`, `payment_status`, `prepayment_order_id`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `return_resolution_id`, `settlement_amounts`, `setup_collection`, `shop_id`, `status`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_delivery_number`, `subscription_id`, `subscription_plan_id`, `tax`, `ticketed_event`, `tips`, `updated_at`, `version`.
- Value shape: null. The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. 

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.active_payment_attempt

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attempt).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.charges[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.charges[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1charges).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.delivery

Field definitions: [OrderResponse.data.delivery](../models/OrderResponse.md#orderresponsedatadelivery).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.fulfillments[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillments).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.line_items[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1line_items).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.tax

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tax](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tax).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### BuyerSubscriptionQuantityChangeResultResponse.data.order variant 1.tips[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tips[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tips).

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt

The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero.

Field definitions: [shared fields](BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder_payment_attempt).

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1

anyOf BuyerOrderPaymentAttempt: An attempt to pay an order..

- Required: `expected_outstanding_money`, `gift_card_redemptions`, `idempotency_key`, `is_resumable`, `mode`, `order_id`, `order_payment_attempt_id`, `payment_intents`, `pending_actions`, `status`.
- Optional: `completed_at`, `last_payment_error`, `payment_method_save`, `started_at`, `status_reason`.

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `idempotency_key`, `is_resumable`, `last_payment_error`, `mode`, `order_id`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`.
- Value shape: null. The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. 

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.last_payment_error

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.last_payment_error](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error).

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.payment_intents[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.payment_intents[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents).

### BuyerSubscriptionQuantityChangeResultResponse.data.order_payment_attempt variant 1.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription

The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase.

Field definitions: [shared fields](BuyerSubscriptionResponse.md#buyersubscriptionresponsedata).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.cancellation_details

Field definitions: [BuyerSubscriptionResponse.data.cancellation_details](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatacancellation_details).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.gift_recipient

Declared alternatives: [SubscriptionResponse.data.gift_recipient](../models/SubscriptionResponse.md#subscriptionresponsedatagift_recipient).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.inventory_wait

Field definitions: [BuyerSubscriptionResponse.data.inventory_wait](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatainventory_wait).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.last_payment_error

Field definitions: [BuyerSubscriptionResponse.data.last_payment_error](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatalast_payment_error).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.line_items[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.plan_change_options[]

Field definitions: [BuyerSubscriptionResponse.data.plan_change_options[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_options).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.scheduled_plan_change

Declared alternatives: [BuyerSubscriptionResponse.data.scheduled_plan_change](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatascheduled_plan_change).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.service_location

Field definitions: [BuyerSubscriptionResponse.data.service_location](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataservice_location).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.subscription_plan

Declared alternatives: [BuyerSubscriptionResponse.data.subscription_plan](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatasubscription_plan).

### BuyerSubscriptionQuantityChangeResultResponse.data.subscription.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

### BuyerSubscriptionQuantityChangeResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

