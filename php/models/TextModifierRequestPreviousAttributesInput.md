[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierRequestPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Optional | string or null | Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. `modifier_group_id`: [declared alternatives](../models/TextModifierRequestPreviousAttributesInput.md#textmodifierrequestpreviousattributesinputmodifier_group_id). |
| `value` | Optional | string or null | Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. `value`: [declared alternatives](../models/TextModifierRequestPreviousAttributesInput.md#textmodifierrequestpreviousattributesinputvalue). |

### TextModifierRequestPreviousAttributesInput.modifier_group_id

### TextModifierRequestPreviousAttributesInput.modifier_group_id variant 1

anyOf variant 1: Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it..

- Value shape: string. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. minLength: `1`. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### TextModifierRequestPreviousAttributesInput.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### TextModifierRequestPreviousAttributesInput.value

### TextModifierRequestPreviousAttributesInput.value variant 1

anyOf variant 1: Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true..

- Value shape: string. Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. minLength: `1`. 

### TextModifierRequestPreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. 

