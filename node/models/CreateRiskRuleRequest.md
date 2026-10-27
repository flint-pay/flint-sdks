[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskRuleRequest

The request body for: Create a risk rule.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Required | string | minLength: `1`. |
| `predicate` | Required | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate). |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |

### CreateRiskRuleRequest.predicate

Declared alternatives: [CreateRiskPreviewRequest.predicate](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate).

