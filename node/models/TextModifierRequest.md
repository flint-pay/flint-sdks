[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | minLength: `1`. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `value` | Required | string | minLength: `1`. |

### TextModifierRequest variant 1

anyOf variant 1: Declared schema ResolvePaymentLinkTextModifierRequest. The text a buyer entered for a text modifier group on a payment link line item..

- Constraints for `modifier_group_id`: ID of the text modifier group the buyer answered.
- Constraints for `value`: The text the buyer entered.

### TextModifierRequest variant 2

anyOf variant 2: Declared schema TextModifierRequest. Text a buyer entered for a text modifier group on an order line item..

- Constraints for `modifier_group_id`: Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it.
- Constraints for `value`: Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true.

