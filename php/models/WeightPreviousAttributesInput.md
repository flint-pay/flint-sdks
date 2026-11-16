[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WeightPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Optional | string or null | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/WeightPreviousAttributesInput.md#weightpreviousattributesinputunit). |
| `value` | Optional | number or null | Weight measured in the specified unit. `value`: [declared alternatives](../models/WeightPreviousAttributesInput.md#weightpreviousattributesinputvalue). |

### WeightPreviousAttributesInput.unit

### WeightPreviousAttributesInput.unit variant 1

anyOf variant 1: Weight unit. Use gram, kilogram, ounce, or pound..

- Value shape: string. Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### WeightPreviousAttributesInput.unit variant 2

anyOf variant 2.

- Value shape: null. Weight unit. Use gram, kilogram, ounce, or pound. 

### WeightPreviousAttributesInput.value

### WeightPreviousAttributesInput.value variant 1

anyOf variant 1: Weight measured in the specified unit..

- Value shape: number. Weight measured in the specified unit. Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. 

### WeightPreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. Weight measured in the specified unit. 

