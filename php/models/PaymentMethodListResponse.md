[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodListResponse

A page of `PaymentMethod` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PaymentMethod](../models/PaymentMethod.md#paymentmethod) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PaymentMethodListResponse.md#paymentmethodlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentMethodListResponse.data[]

A customer's saved payment details.

Field definitions: [shared fields](PaymentMethodResponse.md#paymentmethodresponsedata).

### PaymentMethodListResponse.data[].customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### PaymentMethodListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

