[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskAttributeRegistryResponse

A response containing `RiskAttributeRegistry` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskAttributeRegistry](../models/RiskAttributeRegistry.md#riskattributeregistry) | The attributes available to risk rules, in the current environment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

