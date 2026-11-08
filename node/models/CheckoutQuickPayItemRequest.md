[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutQuickPayItemRequest

A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an amount, and optional tax settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the buyer pays for the item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CheckoutQuickPayItemRequest.md#checkoutquickpayitemrequestamount_money). |
| `name` | Required | string | Name shown for the item. minLength: `1`. |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | Tax settings for the item. A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/CheckoutQuickPayItemRequest.md#checkoutquickpayitemrequesttax). |

### CheckoutQuickPayItemRequest.amount_money

Amount the buyer pays for the item. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CheckoutQuickPayItemRequest.tax

Tax settings for the item. A line item's tax category and whether it is taxable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#checkoutquickpayitemrequesttax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. |

#### CheckoutQuickPayItemRequest.tax line_item_tax_category values

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

