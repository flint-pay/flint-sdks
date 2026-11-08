[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeNotRequestInput

The `Not` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `not` | Required | [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |

