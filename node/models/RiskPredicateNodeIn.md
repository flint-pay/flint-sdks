[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeIn

The `In` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | Values: `"in"`. |
| `values` | Required | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskPredicateNode.md#riskpredicatenode-variant-4value). |

### RiskPredicateNodeIn.values[]

Declared alternatives: [RiskPredicateNode variant 4.value](../models/RiskPredicateNode.md#riskpredicatenode-variant-4value).

