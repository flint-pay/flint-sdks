[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeComparison

The `Comparison` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |
| `value` | Required | string or integer or boolean | `value`: [declared alternatives](../models/RiskPredicateNode.md#riskpredicatenode-variant-4value). |

### RiskPredicateNodeComparison.value

Declared alternatives: [RiskPredicateNode variant 4.value](../models/RiskPredicateNode.md#riskpredicatenode-variant-4value).

