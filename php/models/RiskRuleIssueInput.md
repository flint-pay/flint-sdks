[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleIssueInput

A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and the `path` to the part of the rule at fault.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Extensible rule issue code. Accept new codes as they are added. Risk rules and previews share these issue codes; invalid rule writes use the standard error codes. Values: [15 declared values](#riskruleissueinput-code-values). |
| `message` | Required | string | Description of the rule issue and how to correct it. |
| `path` | Required | string | Public request field path, as used by error param: predicate for the root, predicate.all[0].attribute for a nested field, or action. |
| `unavailable_reason` | Optional | string | Why an attribute is unavailable. Present only for attribute_unavailable issues. Values: `"risk_scoring_not_enabled"`, `"ip_geolocation_not_enabled"`. |

#### RiskRuleIssueInput code values

- `"invalid_predicate"`
- `"invalid_predicate_node"`
- `"invalid_predicate_group"`
- `"unknown_predicate_field"`
- `"unknown_attribute"`
- `"attribute_unavailable"`
- `"invalid_operator"`
- `"invalid_operand"`
- `"invalid_list_alias"`
- `"invalid_money"`
- `"invalid_rule_action"`
- `"rule_action_unavailable_at_stage"`
- `"list_not_found"`
- `"list_archived"`
- `"list_type_mismatch"`

