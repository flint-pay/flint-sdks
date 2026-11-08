[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedModifierOption

One selectable option in a resolved modifier group, with its price change, tax category, and whether it is available.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Required | boolean | Whether the choice can be selected now. |
| `default_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#publicresolvedmodifieroption-line_item_tax_category-values). |
| `modifier_id` | Required | string | ID of the modifier this choice selects. |
| `name` | Required | string | Name of the choice. |
| `position` | Optional | integer | Position of the choice within its group. Format: `int32`. |
| `selected_by_default` | Optional | boolean | Whether the choice is selected when the buyer adds the item without choosing modifiers. |
| `show_on_fulfillment` | Optional | boolean | Whether the choice appears on fulfillment documents. |
| `show_on_receipt` | Optional | boolean | Whether the choice appears on receipts. |
| `taxable` | Optional | boolean | Whether the choice's price is subject to tax. |
| `unit_price_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the choice adds to the item's unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

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

