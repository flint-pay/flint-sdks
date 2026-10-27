[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeGetPaymentResponse200

A response containing `BuyerPaymentIntent` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerPaymentIntent](../models/BuyerPaymentIntent.md#buyerpaymentintent) | A payment as the buyer sees it. Omits the store's fees, net, risk assessment, and dispute state. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

