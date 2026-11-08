[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestResponse

A tracked deletion request and metadata about the API response.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information. `data`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta). |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerDeletionRequestResponse.data

The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information.

Field definitions: [shared fields](CustomerDeletionRequestInput.md#customerdeletionrequestinput).

### CustomerDeletionRequestResponse.meta

Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsemeta).

### CustomerDeletionRequestResponse.meta.warnings[]

Field definitions: [DisputeResponse.meta.warnings[]](../models/DisputeResponse.md#disputeresponsemetawarnings).

