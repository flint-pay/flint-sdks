[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionListResponse

A page of `Subscription` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Subscription](../models/Subscription.md#subscription) | `data[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionListResponse.data[]

Field definitions: [SubscriptionResponse.data](../models/SubscriptionResponse.md#subscriptionresponsedata).

