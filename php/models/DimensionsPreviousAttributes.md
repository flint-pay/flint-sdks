[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DimensionsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `height` | Optional | number or null | Distance along this dimension, in the specified unit. `height`: [declared alternatives](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributesheight). |
| `length` | Optional | number or null | Distance along this dimension, in the specified unit. `length`: [declared alternatives](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributesheight). |
| `unit` | Optional | string or null | Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`. `unit`: [declared alternatives](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributesunit). |
| `width` | Optional | number or null | Distance along this dimension, in the specified unit. `width`: [declared alternatives](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributesheight). |

### DimensionsPreviousAttributes.height

### DimensionsPreviousAttributes.height variant 1

anyOf variant 1: Distance along this dimension, in the specified unit..

- Value shape: number. Distance along this dimension, in the specified unit. Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. 

### DimensionsPreviousAttributes.height variant 2

anyOf variant 2.

- Value shape: null. Distance along this dimension, in the specified unit. 

### DimensionsPreviousAttributes.length

Declared alternatives: [DimensionsPreviousAttributes.height](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributesheight).

### DimensionsPreviousAttributes.unit

### DimensionsPreviousAttributes.unit variant 1

anyOf variant 1: Length unit for length, width, and height. Use millimeter, centimeter, or inch..

- Value shape: string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`.

### DimensionsPreviousAttributes.unit variant 2

anyOf variant 2.

- Value shape: null. Length unit for length, width, and height. Use millimeter, centimeter, or inch. 

### DimensionsPreviousAttributes.width

Declared alternatives: [DimensionsPreviousAttributes.height](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributesheight).

