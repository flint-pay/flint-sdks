[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryReferencePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Optional | string or null | Stable identifier of the category. `category_id`: [declared alternatives](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinputcategory_id). |
| `handle` | Optional | string or null | Immutable handle of the referenced category. Read the category resource for its current name. `handle`: [declared alternatives](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinputhandle). |

### CategoryReferencePreviousAttributesInput.category_id

### CategoryReferencePreviousAttributesInput.category_id variant 1

anyOf variant 1: Stable identifier of the category..

- Value shape: string. Stable identifier of the category. Stable identifier of the category. Example: `"ctg_01KEZF7C001T4WWBPVGWRZD88Q"`. 

### CategoryReferencePreviousAttributesInput.category_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the category. 

### CategoryReferencePreviousAttributesInput.handle

### CategoryReferencePreviousAttributesInput.handle variant 1

anyOf variant 1: Immutable handle of the referenced category. Read the category resource for its current name..

- Value shape: string. Immutable handle of the referenced category. Read the category resource for its current name. 

### CategoryReferencePreviousAttributesInput.handle variant 2

anyOf variant 2.

- Value shape: null. Immutable handle of the referenced category. Read the category resource for its current name. 

