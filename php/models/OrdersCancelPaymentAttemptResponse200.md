[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrdersCancelPaymentAttemptResponse200

A response containing `CancelOrderPaymentAttemptResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CancelOrderPaymentAttemptResult](../models/CancelOrderPaymentAttemptResult.md#cancelorderpaymentattemptresult) | The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

