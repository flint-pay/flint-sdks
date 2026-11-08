[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionListResponse

A page of `BuyerSubscription` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionListResponse.data[]

A customer's recurring purchase.

Field definitions: [shared fields](BuyerSubscriptionResponse.md#buyersubscriptionresponsedata).

### BuyerSubscriptionListResponse.data[].buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerSubscriptionListResponse.data[].cancellation_details

Field definitions: [BuyerSubscriptionResponse.data.cancellation_details](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatacancellation_details).

### BuyerSubscriptionListResponse.data[].delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### BuyerSubscriptionListResponse.data[].delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### BuyerSubscriptionListResponse.data[].end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### BuyerSubscriptionListResponse.data[].last_payment_error

Field definitions: [BuyerSubscriptionResponse.data.last_payment_error](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatalast_payment_error).

### BuyerSubscriptionListResponse.data[].line_items[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items).

### BuyerSubscriptionListResponse.data[].plan_change_options[]

Field definitions: [BuyerSubscriptionResponse.data.plan_change_options[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_options).

### BuyerSubscriptionListResponse.data[].promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionListResponse.data[].scheduled_plan_change

Declared alternatives: [BuyerSubscriptionResponse.data.scheduled_plan_change](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatascheduled_plan_change).

### BuyerSubscriptionListResponse.data[].scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionListResponse.data[].subscription_plan

Declared alternatives: [BuyerSubscriptionResponse.data.subscription_plan](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatasubscription_plan).

### BuyerSubscriptionListResponse.data[].upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

### BuyerSubscriptionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

