[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeListResponse

A page of `Dispute` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Dispute](../models/Dispute.md#dispute) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DisputeListResponse.md#disputelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DisputeListResponse.data[]

A challenge to a collected payment.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedata).

### DisputeListResponse.data[].customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### DisputeListResponse.data[].order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### DisputeListResponse.data[].payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### DisputeListResponse.data[].split_reversals[]

Field definitions: [DisputeResponse.data.split_reversals[]](../models/DisputeResponse.md#disputeresponsedatasplit_reversals).

### DisputeListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

