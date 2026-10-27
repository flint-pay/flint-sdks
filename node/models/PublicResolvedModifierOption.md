[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedModifierOption

One selectable option in a resolved modifier group, with its price change, tax category, and whether it is available.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Required | boolean |  |
| `default_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#publicresolvedmodifieroption-line_item_tax_category-values). |
| `modifier_id` | Required | string |  |
| `name` | Required | string |  |
| `position` | Optional | integer | Format: `int32`. |
| `selected_by_default` | Optional | boolean |  |
| `show_on_fulfillment` | Optional | boolean |  |
| `show_on_receipt` | Optional | boolean |  |
| `taxable` | Optional | boolean |  |
| `unit_price_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_delta_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

#### PublicResolvedModifierOption line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### PublicResolvedModifierOption.unit_price_delta_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

