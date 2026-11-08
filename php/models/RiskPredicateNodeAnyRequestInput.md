[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeAnyRequestInput

The `Any` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `any` | Required | Array of [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. |

