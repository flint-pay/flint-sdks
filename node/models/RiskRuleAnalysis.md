[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleAnalysis

What a valid risk rule uses: its evaluation stage, the attributes and list aliases it references, and which payments it applies to.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applicability` | Required | string | Which payments the rule applies to. Values: `"all_payments"`, `"on_session_only"`. |
| `attributes_used` | Required | Array of string | Names of the payment attributes the rule reads. |
| `list_aliases_used` | Required | Array of string | Aliases of the risk lists the rule references. |
| `stage` | Required | string | When Flint evaluates the rule for a payment. Values: `"pre_authorization"`, `"post_authorization"`. |

