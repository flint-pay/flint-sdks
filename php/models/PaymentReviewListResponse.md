[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewListResponse

A page of `PaymentReview` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PaymentReview](../models/PaymentReview.md#paymentreview) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PaymentReviewListResponse.md#paymentreviewlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentReviewListResponse.data[]

A payment review requiring a merchant decision.

Field definitions: [shared fields](PaymentReviewResponse.md#paymentreviewresponsedata).

### PaymentReviewListResponse.data[].closed_by

Declared alternatives: [PaymentReviewResponse.data.closed_by](../models/PaymentReviewResponse.md#paymentreviewresponsedataclosed_by).

### PaymentReviewListResponse.data[].customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### PaymentReviewListResponse.data[].last_resolution_failure

Declared alternatives: [PaymentReviewResponse.data.last_resolution_failure](../models/PaymentReviewResponse.md#paymentreviewresponsedatalast_resolution_failure).

### PaymentReviewListResponse.data[].order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### PaymentReviewListResponse.data[].payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### PaymentReviewListResponse.data[].payment_summary

Field definitions: [PaymentReviewResponse.data.payment_summary](../models/PaymentReviewResponse.md#paymentreviewresponsedatapayment_summary).

### PaymentReviewListResponse.data[].resolution_started_by

Declared alternatives: [PaymentReviewResponse.data.resolution_started_by](../models/PaymentReviewResponse.md#paymentreviewresponsedataresolution_started_by).

### PaymentReviewListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

