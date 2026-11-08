[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeComparisonInput

The `Comparison` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |
| `value` | Required | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-4value). |

### RiskPredicateNodeComparisonInput.value

Declared alternatives: [CreateRiskPreviewRequestInput variant 1.predicate variant 4.value](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-4value).

