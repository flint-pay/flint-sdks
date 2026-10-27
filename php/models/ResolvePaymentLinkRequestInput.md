[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkRequestInput

The request body for: Resolve payment link.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_values` | Optional | Map of string | Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings. A required checkbox must be true. Map values: minLength: `1`. |
| `modifiers` | Optional | Map of [ResolvePaymentLinkLineItemModifiersInput](../models/ResolvePaymentLinkLineItemModifiersInput.md#resolvepaymentlinklineitemmodifiersinput) | Modifier choices keyed by line item key, for catalog items. |
| `quantity_overrides` | Optional | Map of integer | Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. Map values: Whole-number quantity value; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | minLength: `1`. |
| `unit_price_overrides` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. |

