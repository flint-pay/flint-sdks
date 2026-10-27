[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | minLength: `1`. |
| `value` | Required | string | minLength: `1`. |

### TextModifierRequest variant 1

anyOf variant 1: Declared schema ResolvePaymentLinkTextModifierRequest. The text a buyer entered for a text modifier group on a payment link line item..

No additional constraints.

### TextModifierRequest variant 2

anyOf variant 2: Declared schema TextModifierRequest. Text a buyer entered for a text modifier group on an order line item..

- Constraints for `modifier_group_id`: Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it.
- Constraints for `value`: Text entered by the buyer, subject to the group's text rules.

