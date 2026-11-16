[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResult

The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresultorder). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) | The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order. `order_payment_attempt`: [field definitions](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresultorder_payment_attempt). |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | The subscription after the renewal attempt. A customer's recurring purchase. `subscription`: [field definitions](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresultsubscription). |

### BuyerSubscriptionRenewalResult.order

The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress.

Field definitions: [shared fields](BuyerOrderResponse.md#buyerorderresponsedata).

### BuyerSubscriptionRenewalResult.order.active_payment_attempt

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attempt).

### BuyerSubscriptionRenewalResult.order.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### BuyerSubscriptionRenewalResult.order.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerSubscriptionRenewalResult.order.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### BuyerSubscriptionRenewalResult.order.charges[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.charges[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1charges).

### BuyerSubscriptionRenewalResult.order.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### BuyerSubscriptionRenewalResult.order.delivery

Field definitions: [OrderResponse.data.delivery](../models/OrderResponse.md#orderresponsedatadelivery).

### BuyerSubscriptionRenewalResult.order.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### BuyerSubscriptionRenewalResult.order.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### BuyerSubscriptionRenewalResult.order.fulfillments[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillments).

### BuyerSubscriptionRenewalResult.order.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### BuyerSubscriptionRenewalResult.order.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### BuyerSubscriptionRenewalResult.order.line_items[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1line_items).

### BuyerSubscriptionRenewalResult.order.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### BuyerSubscriptionRenewalResult.order.tax

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tax](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tax).

### BuyerSubscriptionRenewalResult.order.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### BuyerSubscriptionRenewalResult.order.tips[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tips[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tips).

### BuyerSubscriptionRenewalResult.order_payment_attempt

The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order.

Field definitions: [shared fields](BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attempt).

### BuyerSubscriptionRenewalResult.order_payment_attempt.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### BuyerSubscriptionRenewalResult.order_payment_attempt.last_payment_error

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.last_payment_error](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error).

### BuyerSubscriptionRenewalResult.order_payment_attempt.payment_intents[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.payment_intents[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents).

### BuyerSubscriptionRenewalResult.order_payment_attempt.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### BuyerSubscriptionRenewalResult.subscription

The subscription after the renewal attempt. A customer's recurring purchase.

Field definitions: [shared fields](BuyerSubscriptionResponse.md#buyersubscriptionresponsedata).

### BuyerSubscriptionRenewalResult.subscription.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerSubscriptionRenewalResult.subscription.cancellation_details

Field definitions: [BuyerSubscriptionResponse.data.cancellation_details](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatacancellation_details).

### BuyerSubscriptionRenewalResult.subscription.delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### BuyerSubscriptionRenewalResult.subscription.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### BuyerSubscriptionRenewalResult.subscription.end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### BuyerSubscriptionRenewalResult.subscription.gift_recipient

Declared alternatives: [SubscriptionResponse.data.gift_recipient](../models/SubscriptionResponse.md#subscriptionresponsedatagift_recipient).

### BuyerSubscriptionRenewalResult.subscription.inventory_wait

Field definitions: [BuyerSubscriptionResponse.data.inventory_wait](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatainventory_wait).

### BuyerSubscriptionRenewalResult.subscription.last_payment_error

Field definitions: [BuyerSubscriptionResponse.data.last_payment_error](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatalast_payment_error).

### BuyerSubscriptionRenewalResult.subscription.line_items[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items).

### BuyerSubscriptionRenewalResult.subscription.plan_change_options[]

Field definitions: [BuyerSubscriptionResponse.data.plan_change_options[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_options).

### BuyerSubscriptionRenewalResult.subscription.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionRenewalResult.subscription.scheduled_plan_change

Declared alternatives: [BuyerSubscriptionResponse.data.scheduled_plan_change](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatascheduled_plan_change).

### BuyerSubscriptionRenewalResult.subscription.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionRenewalResult.subscription.service_location

Field definitions: [BuyerSubscriptionResponse.data.service_location](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataservice_location).

### BuyerSubscriptionRenewalResult.subscription.subscription_plan

Declared alternatives: [BuyerSubscriptionResponse.data.subscription_plan](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatasubscription_plan).

### BuyerSubscriptionRenewalResult.subscription.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

