[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeComparison







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |
| `value` | Required | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-4value). |

### RiskPredicateNodeComparison variant 1

anyOf Comparison: Declared schema RiskPredicateNodeComparison. The `Comparison` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeComparison variant 2

anyOf Comparison: Declared schema RiskPredicateNodeComparisonRequest. The `Comparison` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeComparison.value

Declared alternatives: [CreateRiskPreviewRequest variant 1.predicate variant 4.value](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-4value).

