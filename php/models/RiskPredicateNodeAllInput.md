[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeAllInput

The `All` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Required | Array of [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | Predicates that must all match. minItems: `1`. maxItems: `50`. |

