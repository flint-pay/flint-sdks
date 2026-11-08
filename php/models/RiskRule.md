[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRule

A rule for assessing and handling payment risk.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | What Flint does with a payment the rule matches. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `applicability` | Required | string | Which payments the rule applies to. Values: `"all_payments"`, `"on_session_only"`. |
| `archived_at` | Required | string or null | RFC3339 timestamp. `null` when the resource isn't archived. Format: `date-time`. |
| `attributes_used` | Required | Array of string | Names of the payment attributes the rule reads. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. |
| `description` | Required | string | Your note on what the rule is for. Leading and trailing whitespace is trimmed. |
| `issues` | Required | Array of [RiskRuleIssue](../models/RiskRuleIssue.md#riskruleissue) | Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. |
| `origin` | Required | string | Whether Flint manages the rule or you created it. Values: `"system_default"`, `"merchant"`. |
| `predicate` | Required | Alternative shapes (see declared variants) | The condition a payment must meet for the rule to match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate). |
| `risk_rule_id` | Required | string | ID of the saved rule to check. |
| `stage` | Required | string | When Flint evaluates the rule for a payment. Values: `"pre_authorization"`, `"post_authorization"`. |
| `status` | Required | string | Whether the rule runs. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Increases on every change to the rule. Send it as expected_version to avoid overwriting someone else's change. Format: `int64`. |

### RiskRule.predicate

Declared alternatives: [RiskRuleResponse.data.predicate](../models/RiskRuleResponse.md#riskruleresponsedatapredicate).

