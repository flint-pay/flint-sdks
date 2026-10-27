[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierConfigRequestInput

Settings for a text modifier group when creating or updating one: required, multiline, and length limits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer | Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. |
| `min_length` | Optional | integer | Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: `int32`. |
| `multiline` | Optional | boolean | Whether the buyer's text can include line breaks. Default: `false`. |
| `required` | Optional | boolean | Whether buyers must enter text for this group. A modifier set's required override takes precedence. Default: `false`. |

