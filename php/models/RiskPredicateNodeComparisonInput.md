[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeComparisonInput

The `Comparison` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |
| `value` | Required | string or integer or boolean | `value`: [declared alternatives](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value). |

### RiskPredicateNodeComparisonInput.value

Declared alternatives: [RiskPredicateNodeInput variant 4.value](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value).

