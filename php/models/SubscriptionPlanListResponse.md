[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanListResponse

A page of `SubscriptionPlan` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [SubscriptionPlan](../models/SubscriptionPlan.md#subscriptionplan) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/SubscriptionPlanListResponse.md#subscriptionplanlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPlanListResponse.data[]

The recurring price and billing terms offered to customers.

Field definitions: [shared fields](SubscriptionPlanResponse.md#subscriptionplanresponsedata).

### SubscriptionPlanListResponse.data[].delivery_method_subscription_counts[]

Field definitions: [SubscriptionPlanResponse.data.delivery_method_subscription_counts[]](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedatadelivery_method_subscription_counts).

### SubscriptionPlanListResponse.data[].images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### SubscriptionPlanListResponse.data[].inventory_routing_source

Field definitions: [SubscriptionPlanResponse.data.inventory_routing_source](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedatainventory_routing_source).

### SubscriptionPlanListResponse.data[].line_items[]

Declared alternatives: [OrderResponse.data.subscription_plan variant 1.line_items[]](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_items).

### SubscriptionPlanListResponse.data[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### SubscriptionPlanListResponse.data[].plan_change_options[]

Field definitions: [SubscriptionPlanResponse.data.plan_change_options[]](../models/SubscriptionPlanResponse.md#subscriptionplanresponsedataplan_change_options).

### SubscriptionPlanListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

