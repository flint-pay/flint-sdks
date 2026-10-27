[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderPaymentAttemptResponseInput

A response containing `CancelOrderPaymentAttemptResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CancelOrderPaymentAttemptResultInput](../models/CancelOrderPaymentAttemptResultInput.md#cancelorderpaymentattemptresultinput) | The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

