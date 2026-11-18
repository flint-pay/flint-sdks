[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierInputCatalogInput

The `catalog` variant of `ResolvePaymentLinkLineItemModifierInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Required | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Optional | [ResolvePaymentLinkTextModifierRequestInput](../models/ResolvePaymentLinkTextModifierRequestInput.md#resolvepaymentlinktextmodifierrequestinput) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group on a payment link line item. |
| `type` | Required | string | Selects the modifier input branch, matching order line item modifiers. Values: `"catalog"`. |

