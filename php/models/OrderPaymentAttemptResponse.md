[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentAttemptResponse

A response containing `OrderPaymentAttempt` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | Resource, collection, or operation result returned by this request. An attempt to pay an order. `data`: [field definitions](../models/OrderPaymentAttemptResponse.md#orderpaymentattemptresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OrderPaymentAttemptResponse.data

Resource, collection, or operation result returned by this request. An attempt to pay an order.

Field definitions: [shared fields](OrderResponse.md#orderresponsedataactive_payment_attempt).

### OrderPaymentAttemptResponse.data.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### OrderPaymentAttemptResponse.data.last_payment_error

Field definitions: [OrderResponse.data.active_payment_attempt.last_payment_error](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error).

### OrderPaymentAttemptResponse.data.payment_intents[]

Field definitions: [OrderResponse.data.active_payment_attempt.payment_intents[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents).

### OrderPaymentAttemptResponse.data.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### OrderPaymentAttemptResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

