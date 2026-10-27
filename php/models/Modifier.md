[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Modifier

A purchasable customization choice.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the modifier was created, as an RFC3339 timestamp. Format: `date-time`. |
| `default_quantity` | Optional | integer string | Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#modifier-line_item_tax_category-values). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifier_group_id` | Optional | string | Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. |
| `modifier_id` | Required | string | Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. |
| `name` | Required | string | Name of the choice shown to buyers. |
| `position` | Required | integer | Display position of the choice within its group; lower values appear first. Format: `int32`. |
| `selected_by_default` | Required | boolean | Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. |
| `show_on_fulfillment` | Required | boolean | Whether this modifier appears in fulfillment details. |
| `show_on_receipt` | Required | boolean | Whether this modifier appears on buyer receipts. |
| `status` | Required | string | Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this modifier's price is taxable. A modifier set can override this value. |
| `unit_price_delta_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When the modifier last changed, as an RFC3339 timestamp. Format: `date-time`. |

#### Modifier line_item_tax_category values

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

