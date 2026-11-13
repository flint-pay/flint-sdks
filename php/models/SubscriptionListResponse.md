[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionListResponse

A page of `Subscription` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Subscription](../models/Subscription.md#subscription) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/SubscriptionListResponse.md#subscriptionlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionListResponse.data[]

A customer's recurring purchase.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedata).

### SubscriptionListResponse.data[].buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### SubscriptionListResponse.data[].cancellation_details

Field definitions: [SubscriptionResponse.data.cancellation_details](../models/SubscriptionResponse.md#subscriptionresponsedatacancellation_details).

### SubscriptionListResponse.data[].customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### SubscriptionListResponse.data[].delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### SubscriptionListResponse.data[].delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### SubscriptionListResponse.data[].end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### SubscriptionListResponse.data[].gift_recipient

Declared alternatives: [SubscriptionResponse.data.gift_recipient](../models/SubscriptionResponse.md#subscriptionresponsedatagift_recipient).

### SubscriptionListResponse.data[].inventory_wait

Field definitions: [SubscriptionResponse.data.inventory_wait](../models/SubscriptionResponse.md#subscriptionresponsedatainventory_wait).

### SubscriptionListResponse.data[].last_payment_error

Field definitions: [SubscriptionResponse.data.last_payment_error](../models/SubscriptionResponse.md#subscriptionresponsedatalast_payment_error).

### SubscriptionListResponse.data[].line_items[]

Field definitions: [SubscriptionResponse.data.line_items[]](../models/SubscriptionResponse.md#subscriptionresponsedataline_items).

### SubscriptionListResponse.data[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionListResponse.data[].payment_method

Declared alternatives: [SubscriptionResponse.data.payment_method](../models/SubscriptionResponse.md#subscriptionresponsedatapayment_method).

### SubscriptionListResponse.data[].promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionListResponse.data[].scheduled_plan_change

Declared alternatives: [SubscriptionResponse.data.scheduled_plan_change](../models/SubscriptionResponse.md#subscriptionresponsedatascheduled_plan_change).

### SubscriptionListResponse.data[].scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionListResponse.data[].service_location

Field definitions: [SubscriptionResponse.data.service_location](../models/SubscriptionResponse.md#subscriptionresponsedataservice_location).

### SubscriptionListResponse.data[].subscription_plan

Declared alternatives: [SubscriptionResponse.data.subscription_plan](../models/SubscriptionResponse.md#subscriptionresponsedatasubscription_plan).

### SubscriptionListResponse.data[].upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

### SubscriptionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

