[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrdersPayResponse200

A response containing `PayOrderResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PayOrderResult](../models/PayOrderResult.md#payorderresult) | The order is the primary resource and expected_version target; order_payment_attempt records the payment outcome. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

