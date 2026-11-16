[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WeightPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Optional | string or null | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/WeightPreviousAttributes.md#weightpreviousattributesunit). |
| `value` | Optional | number or null | Weight measured in the specified unit. `value`: [declared alternatives](../models/WeightPreviousAttributes.md#weightpreviousattributesvalue). |

### WeightPreviousAttributes.unit

### WeightPreviousAttributes.unit variant 1

anyOf variant 1: Weight unit. Use gram, kilogram, ounce, or pound..

- Value shape: string. Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### WeightPreviousAttributes.unit variant 2

anyOf variant 2.

- Value shape: null. Weight unit. Use gram, kilogram, ounce, or pound. 

### WeightPreviousAttributes.value

### WeightPreviousAttributes.value variant 1

anyOf variant 1: Weight measured in the specified unit..

- Value shape: number. Weight measured in the specified unit. Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. 

### WeightPreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. Weight measured in the specified unit. 

