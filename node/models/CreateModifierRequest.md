[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateModifierRequest

A modifier to create in a modifier group, with its name, price change, tax category, and default selection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_quantity` | Optional | integer | Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createmodifierrequest-line_item_tax_category-values). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Required | string | Name of the choice shown to buyers. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display position of the choice within its group; lower values appear first. Format: `int32`. |
| `selected_by_default` | Optional | boolean | Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. Default: `false`. |
| `show_on_fulfillment` | Optional | boolean | Whether this modifier appears in fulfillment details. |
| `show_on_receipt` | Optional | boolean | Whether this modifier appears on buyer receipts. |
| `status` | Optional | string | Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `taxable` | Optional | boolean | Whether this modifier's price is taxable. A modifier set can override this value. |
| `unit_price_delta_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_delta_money`: [field definitions](../models/CreateModifierRequest.md#createmodifierrequestunit_price_delta_money). |

#### CreateModifierRequest line_item_tax_category values

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

### CreateModifierRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateModifierRequest.unit_price_delta_money

Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

