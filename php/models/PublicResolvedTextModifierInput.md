[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedTextModifierInput

Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer | Format: `int32`. |
| `min_length` | Optional | integer | Format: `int32`. |
| `multiline` | Optional | boolean |  |
| `required` | Optional | boolean |  |

