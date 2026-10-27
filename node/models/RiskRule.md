[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRule

A rule for assessing and handling payment risk.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `applicability` | Required | string | Values: `"all_payments"`, `"on_session_only"`. |
| `archived_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `attributes_used` | Required | Array of string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. `created_by`: [declared alternatives](../models/RiskRule.md#riskrulecreated_by). |
| `description` | Required | string |  |
| `issues` | Required | Array of [RiskRuleIssue](../models/RiskRuleIssue.md#riskruleissue) | Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. |
| `origin` | Required | string | Values: `"system_default"`, `"merchant"`. |
| `predicate` | Required | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate). |
| `risk_rule_id` | Required | string |  |
| `stage` | Required | string | Values: `"pre_authorization"`, `"post_authorization"`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### RiskRule.created_by

The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode.

Field definitions: [shared fields](CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency).

### RiskRule.created_by variant 1

anyOf variant 1: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### RiskRule.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. 

### RiskRule.predicate

Declared alternatives: [CreateRiskPreviewRequest.predicate](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate).

