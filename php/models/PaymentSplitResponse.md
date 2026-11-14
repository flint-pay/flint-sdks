[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitResponse

A response containing `PaymentSplit` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentSplit](../models/PaymentSplit.md#paymentsplit) | Resource, collection, or operation result returned by this request. A top-level child of a payment intent dividing the collecting merchant's payment funds with one seller. Both parties read this same resource with their own credentials. `data`: [field definitions](../models/PaymentSplitResponse.md#paymentsplitresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentSplitResponse.data

Resource, collection, or operation result returned by this request. A top-level child of a payment intent dividing the collecting merchant's payment funds with one seller. Both parties read this same resource with their own credentials.

Field definitions: [shared fields](PaymentIntentResponse.md#paymentintentresponsedatasplits).

### PaymentSplitResponse.data.reversals[]

Field definitions: [PaymentIntentResponse.data.splits[].reversals[]](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversals).

### PaymentSplitResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

