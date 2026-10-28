[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight

Weight of one unit. Accepted only for custom lines without variant_id or bundle_id.

A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `value` | Required | number | Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |

