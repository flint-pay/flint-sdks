[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleAnalysis

What a valid risk rule uses: its evaluation stage, the attributes and list aliases it references, and which payments it applies to.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applicability` | Required | string | Values: `"all_payments"`, `"on_session_only"`. |
| `attributes_used` | Required | Array of string |  |
| `list_aliases_used` | Required | Array of string |  |
| `stage` | Required | string | Values: `"pre_authorization"`, `"post_authorization"`. |

