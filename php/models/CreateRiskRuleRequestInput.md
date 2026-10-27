[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskRuleRequestInput

The request body for: Create a risk rule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Required | string | minLength: `1`. |
| `predicate` | Required | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate). |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |

### CreateRiskRuleRequestInput.predicate

Declared alternatives: [CreateRiskPreviewRequestInput.predicate](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate).

