[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetryResponse

A response containing `BuyerSubscriptionPaymentRetry` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionPaymentRetry](../models/BuyerSubscriptionPaymentRetry.md#buyersubscriptionpaymentretry) | A retry of a past-due payment on the buyer's subscription. Includes, when available, the buyer's order and a failure they can act on. Omits the store's idempotency keys and payment attempt IDs. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

