[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderResponse







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PayOrderResult](../models/PayOrderResult.md#payorderresult) | Resource, collection, or operation result returned by this request. `data`: [field definitions](../models/PayOrderResponse.md#payorderresponse-variant-1data), [field definitions](../models/PayOrderResponse.md#payorderresponse-variant-2data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

### PayOrderResponse variant 1

anyOf variant 1: Declared schema CancelOrderPaymentAttemptResponse. A response containing `CancelOrderPaymentAttemptResult` data..

No additional constraints.

### PayOrderResponse variant 2

anyOf variant 2: Declared schema PayOrderResponse. A response containing `PayOrderResult` data..

No additional constraints.

### PayOrderResponse variant 1.data

Resource, collection, or operation result returned by this request. The order is the primary resource and expected_version target; order_payment_attempt is the canceled attempt.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The order after the cancellation. Send its `version` as `expected_version` in your next change to the order. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | The payment attempt after the cancellation request. Read its `status` for the outcome. An attempt to pay an order. |

### PayOrderResponse variant 2.data

Resource, collection, or operation result returned by this request. The order is the primary resource and expected_version target; order_payment_attempt records the payment outcome.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The order after the payment request. Send its `version` as `expected_version` in your next change to the order. A customer's purchase and its payment and fulfillment progress. |
| `order_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | The payment attempt for this request. Read its `status` and `pending_actions` to decide what to do next. An attempt to pay an order. |

