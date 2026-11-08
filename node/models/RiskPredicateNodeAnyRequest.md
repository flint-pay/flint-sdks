[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeAnyRequest

The `Any` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `any` | Required | Array of [RiskPredicateNodeRequest](../models/RiskPredicateNodeRequest.md#riskpredicatenoderequest) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. |

