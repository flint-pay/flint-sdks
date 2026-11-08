[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierConfigRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer | Format: `int32`. |
| `min_length` | Optional | integer | Format: `int32`. |
| `multiline` | Optional | boolean |  |
| `required` | Optional | boolean |  |

### TextModifierConfigRequest variant 1

anyOf variant 1: Declared schema PublicResolvedTextModifier. Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits..

- Constraints for `max_length`: Most characters the buyer can enter.
- Constraints for `min_length`: Fewest characters the buyer can enter.
- Constraints for `multiline`: Whether the buyer can enter more than one line.
- Constraints for `required`: Whether the buyer must enter text.

### TextModifierConfigRequest variant 2

anyOf variant 2: Declared schema TextModifierConfigRequest. Settings for a text modifier group when creating or updating one: required, multiline, and length limits..

- Constraints for `max_length`: Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace, from 1 to 500. minimum: `1`. maximum: `500`.
- Constraints for `min_length`: Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Must be 0 or more, and no more than `max_length`. minimum: `0`.
- Constraints for `multiline`: Whether the buyer's text can include line breaks. Default: `false`.
- Constraints for `required`: Whether buyers must enter text for this group. A modifier set's required override takes precedence. Default: `false`.

