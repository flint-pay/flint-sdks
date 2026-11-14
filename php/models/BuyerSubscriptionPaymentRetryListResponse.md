[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPaymentRetryListResponse

A page of `BuyerSubscriptionPaymentRetry` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerSubscriptionPaymentRetry](../models/BuyerSubscriptionPaymentRetry.md#buyersubscriptionpaymentretry) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerSubscriptionPaymentRetryListResponse.md#buyersubscriptionpaymentretrylistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionPaymentRetryListResponse.data[]

A retry of a past-due payment on the buyer's subscription. Includes, when available, its order, payment intent and a failure the buyer can act on. Omits the store's idempotency key.

Field definitions: [shared fields](BuyerSubscriptionPaymentRetryResponse.md#buyersubscriptionpaymentretryresponsedata).

### BuyerSubscriptionPaymentRetryListResponse.data[].last_payment_error

Field definitions: [OrderResponse.data.active_payment_attempt.payment_intents[].last_payment_error](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intentslast_payment_error).

### BuyerSubscriptionPaymentRetryListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

