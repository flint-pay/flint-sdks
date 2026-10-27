[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierRequest

A modifier selection for a payment link line item: a modifier option with a quantity, or a text value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Optional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text a buyer entered for a text modifier group on a payment link line item. `text`: [field definitions](../models/ResolvePaymentLinkLineItemModifierRequest.md#resolvepaymentlinklineitemmodifierrequesttext). |

### ResolvePaymentLinkLineItemModifierRequest.text

The text a buyer entered for a text modifier group on a payment link line item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | minLength: `1`. |
| `value` | Required | string | minLength: `1`. |

