[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnUnverifiedItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | Description of the unidentified item. `description`: [declared alternatives](../models/ReturnUnverifiedItemPreviousAttributes.md#returnunverifieditempreviousattributesdescription). |
| `name` | Optional | string or null | Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. `name`: [declared alternatives](../models/ReturnUnverifiedItemPreviousAttributes.md#returnunverifieditempreviousattributesname). |
| `sku` | Optional | string or null | SKU of the unidentified item. `sku`: [declared alternatives](../models/ReturnUnverifiedItemPreviousAttributes.md#returnunverifieditempreviousattributessku). |

### ReturnUnverifiedItemPreviousAttributes.description

### ReturnUnverifiedItemPreviousAttributes.description variant 1

anyOf variant 1: Description of the unidentified item..

- Value shape: string. Description of the unidentified item. Description of the unidentified item. minLength: `1`. 

### ReturnUnverifiedItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the unidentified item. 

### ReturnUnverifiedItemPreviousAttributes.name

### ReturnUnverifiedItemPreviousAttributes.name variant 1

anyOf variant 1: Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported..

- Value shape: string. Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. 

### ReturnUnverifiedItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. 

### ReturnUnverifiedItemPreviousAttributes.sku

### ReturnUnverifiedItemPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the unidentified item..

- Value shape: string. SKU of the unidentified item. SKU of the unidentified item. minLength: `1`. 

### ReturnUnverifiedItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the unidentified item. 

