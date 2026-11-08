[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeAllRequestInput

The `All` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Required | Array of [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | Predicates that must all match. minItems: `1`. maxItems: `50`. |

