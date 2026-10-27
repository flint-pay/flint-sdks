[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOffersCreateResponse201

A response containing `SubscriptionOffer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer) | Recurring terms offered on catalog products or variants. Updates affect new signups; existing subscriptions keep their paid signup terms. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

