[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskAttributeRegistryResponse

A response containing `RiskAttributeRegistry` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskAttributeRegistry](../models/RiskAttributeRegistry.md#riskattributeregistry) | Resource, collection, or operation result returned by this request. The attributes available to risk rules, in the current environment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskAttributeRegistryResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

