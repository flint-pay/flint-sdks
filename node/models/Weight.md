[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Weight







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `value` | Required | number | Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |

### Weight variant 1

anyOf variant 1: Declared schema Weight. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration..

No additional constraints.

### Weight variant 2

anyOf variant 2: Declared schema WeightRequest. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration..

No additional constraints.

