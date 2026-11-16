[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DimensionsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `height` | Optional | number or null | Distance along this dimension, in the specified unit. `height`: [declared alternatives](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinputheight). |
| `length` | Optional | number or null | Distance along this dimension, in the specified unit. `length`: [declared alternatives](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinputheight). |
| `unit` | Optional | string or null | Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`. `unit`: [declared alternatives](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinputunit). |
| `width` | Optional | number or null | Distance along this dimension, in the specified unit. `width`: [declared alternatives](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinputheight). |

### DimensionsPreviousAttributesInput.height

### DimensionsPreviousAttributesInput.height variant 1

anyOf variant 1: Distance along this dimension, in the specified unit..

- Value shape: number. Distance along this dimension, in the specified unit. Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. 

### DimensionsPreviousAttributesInput.height variant 2

anyOf variant 2.

- Value shape: null. Distance along this dimension, in the specified unit. 

### DimensionsPreviousAttributesInput.length

Declared alternatives: [DimensionsPreviousAttributesInput.height](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinputheight).

### DimensionsPreviousAttributesInput.unit

### DimensionsPreviousAttributesInput.unit variant 1

anyOf variant 1: Length unit for length, width, and height. Use millimeter, centimeter, or inch..

- Value shape: string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`.

### DimensionsPreviousAttributesInput.unit variant 2

anyOf variant 2.

- Value shape: null. Length unit for length, width, and height. Use millimeter, centimeter, or inch. 

### DimensionsPreviousAttributesInput.width

Declared alternatives: [DimensionsPreviousAttributesInput.height](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinputheight).

