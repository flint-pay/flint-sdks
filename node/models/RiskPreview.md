[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPreview

The result of validating a proposed risk rule: whether it is valid, any issues found, warnings, and an analysis of the rule.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `analysis` | Required | [RiskRuleAnalysis](../models/RiskRuleAnalysis.md#riskruleanalysis) or null | Rule analysis. Null when the proposed rule is invalid. |
| `is_valid` | Required | boolean | Whether the proposed rule is valid. |
| `issues` | Required | Array of [RiskRuleIssue](../models/RiskRuleIssue.md#riskruleissue) | Every rule validation issue in validation order. Empty when the rule is valid. |
| `warnings` | Required | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) | Advisory warnings. Empty when the proposed rule is invalid. |

