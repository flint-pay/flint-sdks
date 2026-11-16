[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer or null | Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. `max_length`: [declared alternatives](../models/TextModifierConfigPreviousAttributesInput.md#textmodifierconfigpreviousattributesinputmax_length). |
| `min_length` | Optional | integer or null | Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. `min_length`: [declared alternatives](../models/TextModifierConfigPreviousAttributesInput.md#textmodifierconfigpreviousattributesinputmin_length). |
| `multiline` | Optional | boolean or null | Whether the buyer's text can include line breaks. `multiline`: [declared alternatives](../models/TextModifierConfigPreviousAttributesInput.md#textmodifierconfigpreviousattributesinputmultiline). |
| `required` | Optional | boolean or null | Whether buyers must enter text for this group. A modifier set's required override takes precedence. `required`: [declared alternatives](../models/TextModifierConfigPreviousAttributesInput.md#textmodifierconfigpreviousattributesinputrequired). |

### TextModifierConfigPreviousAttributesInput.max_length

### TextModifierConfigPreviousAttributesInput.max_length variant 1

anyOf variant 1: Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace..

- Value shape: integer. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. 

### TextModifierConfigPreviousAttributesInput.max_length variant 2

anyOf variant 2.

- Value shape: null. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. 

### TextModifierConfigPreviousAttributesInput.min_length

### TextModifierConfigPreviousAttributesInput.min_length variant 1

anyOf variant 1: Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace..

- Value shape: integer. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. 

### TextModifierConfigPreviousAttributesInput.min_length variant 2

anyOf variant 2.

- Value shape: null. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. 

### TextModifierConfigPreviousAttributesInput.multiline

### TextModifierConfigPreviousAttributesInput.multiline variant 1

anyOf variant 1: Whether the buyer's text can include line breaks..

- Value shape: boolean. Whether the buyer's text can include line breaks. 

### TextModifierConfigPreviousAttributesInput.multiline variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer's text can include line breaks. 

### TextModifierConfigPreviousAttributesInput.required

### TextModifierConfigPreviousAttributesInput.required variant 1

anyOf variant 1: Whether buyers must enter text for this group. A modifier set's required override takes precedence..

- Value shape: boolean. Whether buyers must enter text for this group. A modifier set's required override takes precedence. 

### TextModifierConfigPreviousAttributesInput.required variant 2

anyOf variant 2.

- Value shape: null. Whether buyers must enter text for this group. A modifier set's required override takes precedence. 

