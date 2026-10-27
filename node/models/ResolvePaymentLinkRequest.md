[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkRequest

The request body for: Resolve payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_values` | Optional | Map of string | Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings. A required checkbox must be true. Map values: minLength: `1`. |
| `modifiers` | Optional | Map of [ResolvePaymentLinkLineItemModifiers](../models/ResolvePaymentLinkLineItemModifiers.md#resolvepaymentlinklineitemmodifiers) | Modifier choices keyed by line item key, for catalog items. |
| `quantity_overrides` | Optional | Map of integer | Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. Map values: Whole-number quantity value; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | minLength: `1`. |
| `unit_price_overrides` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. `unit_price_overrides{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### ResolvePaymentLinkRequest.unit_price_overrides{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

