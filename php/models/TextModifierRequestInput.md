[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierRequestInput

Text a buyer entered for a text modifier group on an order line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. minLength: `1`. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `value` | Required | string | Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. minLength: `1`. |

