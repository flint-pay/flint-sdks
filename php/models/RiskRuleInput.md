[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleInput

A rule for assessing and handling payment risk.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `applicability` | Required | string | Values: `"all_payments"`, `"on_session_only"`. |
| `archived_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `attributes_used` | Required | Array of string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) or null | The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. |
| `description` | Required | string |  |
| `issues` | Required | Array of [RiskRuleIssueInput](../models/RiskRuleIssueInput.md#riskruleissueinput) | Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. |
| `origin` | Required | string | Values: `"system_default"`, `"merchant"`. |
| `predicate` | Required | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate). |
| `risk_rule_id` | Required | string |  |
| `stage` | Required | string | Values: `"pre_authorization"`, `"post_authorization"`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### RiskRuleInput.predicate

Declared alternatives: [CreateRiskPreviewRequestInput.predicate](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate).

