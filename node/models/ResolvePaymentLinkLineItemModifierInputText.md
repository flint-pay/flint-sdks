[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierInputText

The `text` variant of `ResolvePaymentLinkLineItemModifierInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Optional | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Required | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group on a payment link line item. `text`: [field definitions](../models/ResolvePaymentLinkLineItemModifierInputCatalog.md#resolvepaymentlinklineitemmodifierinputcatalogtext). |
| `type` | Required | string | Selects the modifier input branch, matching order line item modifiers. Values: `"text"`. |

### ResolvePaymentLinkLineItemModifierInputText.text

Field definitions: [ResolvePaymentLinkLineItemModifierInputCatalog.text](../models/ResolvePaymentLinkLineItemModifierInputCatalog.md#resolvepaymentlinklineitemmodifierinputcatalogtext).

