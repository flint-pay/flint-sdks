[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionsRevocationResponse

A response containing `CustomerSessionsRevocation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerSessionsRevocation](../models/CustomerSessionsRevocation.md#customersessionsrevocation) | Resource, collection, or operation result returned by this request. The result of revoking a customer's sessions: the customer ID and how many sessions were revoked. `data`: [field definitions](../models/CustomerSessionsRevocationResponse.md#customersessionsrevocationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerSessionsRevocationResponse.data

Resource, collection, or operation result returned by this request. The result of revoking a customer's sessions: the customer ID and how many sessions were revoked.

Field definitions: [shared fields](CustomerSessionsRevocationInput.md#customersessionsrevocationinput).

### CustomerSessionsRevocationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

