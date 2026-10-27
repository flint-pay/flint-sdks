[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetModifierGroupsItemExistingModifierGroupText

Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead.

Settings for a text modifier group: whether input is required or multiline, and its length limits.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer | Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. |
| `min_length` | Optional | integer | Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. |
| `multiline` | Required | boolean | Whether the buyer's text can include line breaks. |
| `required` | Required | boolean | Whether buyers must enter text for this group. A modifier set's required override takes precedence. |

