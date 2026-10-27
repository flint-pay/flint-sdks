[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WeightInput

A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `value` | Required | number | Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |

