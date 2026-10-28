[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderResponse







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PayOrderResult](../models/PayOrderResult.md#payorderresult) |  |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

### PayOrderResponse variant 1

anyOf variant 1: Declared schema CancelOrderPaymentAttemptResponse. A response containing `CancelOrderPaymentAttemptResult` data..

No additional constraints.

### PayOrderResponse variant 2

anyOf variant 2: Declared schema PayOrderResponse. A response containing `PayOrderResult` data..

No additional constraints.

