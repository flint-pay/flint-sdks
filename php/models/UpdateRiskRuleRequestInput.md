[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateRiskRuleRequestInput

The request body for: Update a risk rule.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `description` | Conditional | string | minLength: `1`. |
| `expected_version` | Optional | integer string | Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `predicate` | Conditional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `status` | Conditional | string | Values: `"active"`, `"inactive"`. |

### UpdateRiskRuleRequestInput variant 1

anyOf variant 1.

- Required: `action`.
- Optional: `description`, `predicate`, `status`.

### UpdateRiskRuleRequestInput variant 2

anyOf variant 2.

- Required: `predicate`.
- Optional: `action`, `description`, `status`.

### UpdateRiskRuleRequestInput variant 3

anyOf variant 3.

- Required: `description`.
- Optional: `action`, `predicate`, `status`.

### UpdateRiskRuleRequestInput variant 4

anyOf variant 4.

- Required: `status`.
- Optional: `action`, `description`, `predicate`.

