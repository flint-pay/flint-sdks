[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodDomainListResponse

A page of `PaymentMethodDomain` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PaymentMethodDomainListResponse.md#paymentmethoddomainlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentMethodDomainListResponse.data[]

A domain registered for browser payment methods.

Field definitions: [shared fields](PaymentMethodDomainResponse.md#paymentmethoddomainresponsedata).

### PaymentMethodDomainListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

