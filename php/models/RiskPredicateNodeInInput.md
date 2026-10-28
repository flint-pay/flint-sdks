[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInInput

The `In` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | Values: `"in"`. |
| `values` | Required | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value). |

### RiskPredicateNodeInInput.values[]

Declared alternatives: [RiskPredicateNodeInput variant 4.value](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value).

