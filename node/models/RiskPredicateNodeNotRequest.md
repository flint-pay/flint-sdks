[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeNotRequest

The `Not` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `not` | Required | [RiskPredicateNodeRequest](../models/RiskPredicateNodeRequest.md#riskpredicatenoderequest) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |

