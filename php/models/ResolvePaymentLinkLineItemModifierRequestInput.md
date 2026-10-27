[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierRequestInput

A modifier selection for a payment link line item: a modifier option with a quantity, or a text value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Optional | [ResolvePaymentLinkTextModifierRequestInput](../models/ResolvePaymentLinkTextModifierRequestInput.md#resolvepaymentlinktextmodifierrequestinput) | The text a buyer entered for a text modifier group on a payment link line item. |

