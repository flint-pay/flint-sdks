[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleResponse

A response containing `RiskRule` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskRule](../models/RiskRule.md#riskrule) | A rule for assessing and handling payment risk. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

