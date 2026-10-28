[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionsListResponse200

A page of `Subscription` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Subscription](../models/Subscription.md#subscription) | `data[]`: [field definitions](../models/SubscriptionsCancelResponse200.md#subscriptionscancelresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionsListResponse200.data[]

Field definitions: [SubscriptionsCancelResponse200.data](../models/SubscriptionsCancelResponse200.md#subscriptionscancelresponse200data).

