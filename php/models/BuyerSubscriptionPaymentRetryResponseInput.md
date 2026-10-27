[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetryResponseInput

A response containing `BuyerSubscriptionPaymentRetry` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionPaymentRetryInput](../models/BuyerSubscriptionPaymentRetryInput.md#buyersubscriptionpaymentretryinput) | A retry of a past-due payment on the buyer's subscription. Includes, when available, the buyer's order and a failure they can act on. Omits the store's idempotency keys and payment attempt IDs. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

