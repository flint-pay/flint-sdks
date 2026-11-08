[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedTextModifierInput

Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer | Most characters the buyer can enter. Format: `int32`. |
| `min_length` | Optional | integer | Fewest characters the buyer can enter. Format: `int32`. |
| `multiline` | Optional | boolean | Whether the buyer can enter more than one line. |
| `required` | Optional | boolean | Whether the buyer must enter text. |

