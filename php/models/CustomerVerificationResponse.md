[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerVerificationResponse

A response containing `CustomerVerification` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerVerification](../models/CustomerVerification.md#customerverification) | Resource, collection, or operation result returned by this request. An email verification requested for linking guest purchases. `data`: [field definitions](../models/CustomerVerificationResponse.md#customerverificationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerVerificationResponse.data

Resource, collection, or operation result returned by this request. An email verification requested for linking guest purchases.

Field definitions: [shared fields](CustomerVerificationInput.md#customerverificationinput).

### CustomerVerificationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

