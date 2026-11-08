[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeIn







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"in"`. |
| `values` | Required | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-6values). |

### RiskPredicateNodeIn variant 1: `operator` = `"in"`

anyOf In: Declared schema RiskPredicateNodeIn. The `In` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeIn variant 2: `operator` = `"in"`

anyOf In: Declared schema RiskPredicateNodeInRequest. The `In` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeIn.values[]

Declared alternatives: [CreateRiskPreviewRequest variant 1.predicate variant 6.values[]](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-6values).

