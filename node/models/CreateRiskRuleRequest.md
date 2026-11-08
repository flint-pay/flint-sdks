[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskRuleRequest

The request body for: Create a risk rule.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | What Flint does with a payment the rule matches. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Required | string | Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading and trailing whitespace is trimmed. minLength: `1`. maxLength: `512`. |
| `predicate` | Required | [RiskPredicateNodeRequest](../models/RiskPredicateNodeRequest.md#riskpredicatenoderequest) | The condition a payment must meet for the rule to match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Optional | string | Whether the rule runs. Default: `"active"`. Values: `"active"`, `"inactive"`. |

