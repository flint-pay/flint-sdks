[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOfferResponse

A response containing `SubscriptionOffer` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer) | Recurring terms offered on catalog products or variants. Updates affect new signups; existing subscriptions keep their paid signup terms. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

