[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInRequestInput

Request input. Response: [RiskPredicateNodeIn](../models/RiskPredicateNodeIn.md#riskpredicatenodein).

The `In` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"in"`. |
| `values` | Required | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskPredicateNodeInRequestInput.md#riskpredicatenodeinrequestinputvalues). |

### RiskPredicateNodeInRequestInput.values[]

### RiskPredicateNodeInRequestInput.values[] variant 1

oneOf String.

- Value shape: string. minLength: `1`. 

### RiskPredicateNodeInRequestInput.values[] variant 2

oneOf Integer.

- Value shape: integer.  

### RiskPredicateNodeInRequestInput.values[] variant 3

oneOf Boolean.

- Value shape: boolean.  

