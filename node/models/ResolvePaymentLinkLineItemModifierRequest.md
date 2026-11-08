[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierRequest

A modifier selection for a payment link line item: a modifier option with a quantity, or a text value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Optional | string | ID of the modifier option the buyer chose. Send exactly one of `modifier_id` or `text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Optional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or `text`. The text a buyer entered for a text modifier group on a payment link line item. `text`: [field definitions](../models/ResolvePaymentLinkLineItemModifierRequest.md#resolvepaymentlinklineitemmodifierrequesttext). |

### ResolvePaymentLinkLineItemModifierRequest.text

The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or `text`. The text a buyer entered for a text modifier group on a payment link line item.

Field definitions: [shared fields](ResolvePaymentLinkTextModifierRequestInput.md#resolvepaymentlinktextmodifierrequestinput).

