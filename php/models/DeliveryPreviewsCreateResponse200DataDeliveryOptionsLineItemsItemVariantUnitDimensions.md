[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions

Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id.

Package or item dimensions as `length`, `width`, and `height` in the given `unit`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `height` | Required | number | Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |
| `length` | Required | number | Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |
| `unit` | Required | string | Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`. |
| `width` | Required | number | Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |

