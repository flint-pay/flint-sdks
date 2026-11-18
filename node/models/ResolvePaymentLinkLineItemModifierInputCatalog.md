[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierInputCatalog

The `catalog` variant of `ResolvePaymentLinkLineItemModifierInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Required | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Optional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group on a payment link line item. `text`: [field definitions](../models/ResolvePaymentLinkLineItemModifierInputCatalog.md#resolvepaymentlinklineitemmodifierinputcatalogtext). |
| `type` | Required | string | Selects the modifier input branch, matching order line item modifiers. Values: `"catalog"`. |

### ResolvePaymentLinkLineItemModifierInputCatalog.text

The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group on a payment link line item.

Field definitions: [shared fields](ResolvePaymentLinkTextModifierRequestInput.md#resolvepaymentlinktextmodifierrequestinput).

