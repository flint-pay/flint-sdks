[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BlockFailedAttemptSignalsResponse

A response containing `BlockFailedAttemptSignalsResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BlockFailedAttemptSignalsResult](../models/BlockFailedAttemptSignalsResult.md#blockfailedattemptsignalsresult) | Resource, collection, or operation result returned by this request. Default block-list result for a payment intent's failed attempt. `data`: [field definitions](../models/BlockFailedAttemptSignalsResponse.md#blockfailedattemptsignalsresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BlockFailedAttemptSignalsResponse.data

Resource, collection, or operation result returned by this request. Default block-list result for a payment intent's failed attempt.

Field definitions: [shared fields](BlockFailedAttemptSignalsResultInput.md#blockfailedattemptsignalsresultinput).

### BlockFailedAttemptSignalsResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

