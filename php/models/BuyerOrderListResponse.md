[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderListResponse

A page of `BuyerOrder` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerOrder](../models/BuyerOrder.md#buyerorder) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerOrderListResponse.md#buyerorderlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerOrderListResponse.data[]

A customer's purchase and its payment and fulfillment progress.

Field definitions: [shared fields](BuyerOrderResponse.md#buyerorderresponsedata).

### BuyerOrderListResponse.data[].active_payment_attempt

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attempt).

### BuyerOrderListResponse.data[].authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### BuyerOrderListResponse.data[].buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerOrderListResponse.data[].buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### BuyerOrderListResponse.data[].charges[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.charges[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1charges).

### BuyerOrderListResponse.data[].deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### BuyerOrderListResponse.data[].delivery

Field definitions: [OrderResponse.data.delivery](../models/OrderResponse.md#orderresponsedatadelivery).

### BuyerOrderListResponse.data[].delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### BuyerOrderListResponse.data[].discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### BuyerOrderListResponse.data[].fulfillments[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillments).

### BuyerOrderListResponse.data[].gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### BuyerOrderListResponse.data[].gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### BuyerOrderListResponse.data[].line_items[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1line_items).

### BuyerOrderListResponse.data[].return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### BuyerOrderListResponse.data[].tax

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tax](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tax).

### BuyerOrderListResponse.data[].ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### BuyerOrderListResponse.data[].tips[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tips[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tips).

### BuyerOrderListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

