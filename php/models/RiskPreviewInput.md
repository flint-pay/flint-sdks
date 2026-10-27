[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPreviewInput

The result of validating a proposed risk rule: whether it is valid, any issues found, warnings, and an analysis of the rule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `analysis` | Required | [RiskRuleAnalysisInput](../models/RiskRuleAnalysisInput.md#riskruleanalysisinput) or null | Rule analysis. Null when the proposed rule is invalid. |
| `is_valid` | Required | boolean | Whether the proposed rule is valid. |
| `issues` | Required | Array of [RiskRuleIssueInput](../models/RiskRuleIssueInput.md#riskruleissueinput) | Every rule validation issue in validation order. Empty when the rule is valid. |
| `warnings` | Required | Array of [ResponseWarningInput](../models/ResponseWarningInput.md#responsewarninginput) | Advisory warnings. Empty when the proposed rule is invalid. |

