[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeComparisonRequestInput

Request input. Response: [RiskPredicateNodeComparison](../models/RiskPredicateNodeComparison.md#riskpredicatenodecomparison).

The `Comparison` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |
| `value` | Required | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/RiskPredicateNodeComparisonRequestInput.md#riskpredicatenodecomparisonrequestinputvalue). |

### RiskPredicateNodeComparisonRequestInput.value

### RiskPredicateNodeComparisonRequestInput.value variant 1

oneOf String.

- Value shape: string. The value to compare with. minLength: `1`. 

### RiskPredicateNodeComparisonRequestInput.value variant 2

oneOf Integer.

- Value shape: integer. The value to compare with. 

### RiskPredicateNodeComparisonRequestInput.value variant 3

oneOf Boolean.

- Value shape: boolean. The value to compare with. 

