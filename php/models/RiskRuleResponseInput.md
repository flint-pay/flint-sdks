[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleResponseInput

A response containing `RiskRule` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskRuleInput](../models/RiskRuleInput.md#riskruleinput) | A rule for assessing and handling payment risk. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

