[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierRequestInput

A modifier selection for a payment link line item: a modifier option with a quantity, or a text value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Optional | string | ID of the modifier option the buyer chose. Send exactly one of `modifier_id` or `text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Optional | [ResolvePaymentLinkTextModifierRequestInput](../models/ResolvePaymentLinkTextModifierRequestInput.md#resolvepaymentlinktextmodifierrequestinput) | The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or `text`. The text a buyer entered for a text modifier group on a payment link line item. |

