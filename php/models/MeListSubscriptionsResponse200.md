[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeListSubscriptionsResponse200

A page of `BuyerSubscription` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | `data[]`: [field definitions](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeListSubscriptionsResponse200.data[]

Field definitions: [MeCancelSubscriptionResponse200.data](../models/MeCancelSubscriptionResponse200.md#mecancelsubscriptionresponse200data).

