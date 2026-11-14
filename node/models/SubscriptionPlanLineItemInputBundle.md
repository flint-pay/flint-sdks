[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanLineItemInputBundle

The `bundle` variant of `SubscriptionPlanLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. |
| `bundle_id` | Required | string | ID of the catalog bundle to sell on this line. Send it with `type` bundle and without `variant_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the bundle. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the line. Optional on a custom line, and not allowed on a variant or bundle line, which take the catalog description. minLength: `1`. |
| `max_quantity` | Optional | integer | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Modifiers to apply to a variant or bundle line. Omit to apply the catalog item's default modifiers; send an empty array to skip the defaults. Not allowed on a custom line, and `null` is rejected. Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlemodifiers). |
| `name` | Optional | string | Name of the line. Required for a custom line, and not allowed on a variant or bundle line, which take the catalog name. minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. Default: `1`. |
| `swap_variant_ids` | Optional | Array of string | Variants a subscriber can swap this line to. Only for a variant line. At most 25, with no repeats, none equal to the line's own variant, and all from the same product. Omit for none. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | Whether the line is taxable and its tax category. A custom line needs `taxable` when it sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/SubscriptionPlanLineItemInputBundle.md#subscriptionplanlineiteminputbundletax). |
| `type` | Required | string | The kind of line to add. It must match the other fields: `variant` needs `variant_id`, `bundle` needs `bundle_id`, and `custom` needs `name` and `unit_price_money`. Values: `"bundle"`. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit, in the plan's currency. Required for a custom line, with an amount above zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/SubscriptionPlanLineItemInputBundle.md#subscriptionplanlineiteminputbundleunit_price_money). |
| `variant_id` | Optional | string | ID of the catalog variant to sell on this line. Send it with `type` variant and without `bundle_id`, `name`, `unit_price_money`, `description`, or `tax`: Flint takes those from the variant. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### SubscriptionPlanLineItemInputBundle.modifiers[]

Declared alternatives: [CreateOrderLineItemInputBundle.modifiers[]](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlemodifiers).

### SubscriptionPlanLineItemInputBundle.tax

Whether the line is taxable and its tax category. A custom line needs `taxable` when it sends `tax`. Not allowed on a variant or bundle line, which take the catalog tax settings. A line item's tax category and whether it is taxable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#subscriptionplanlineiteminputbundletax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. |

#### SubscriptionPlanLineItemInputBundle.tax line_item_tax_category values

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

### SubscriptionPlanLineItemInputBundle.unit_price_money

Price of one unit, in the plan's currency. Required for a custom line, with an amount above zero, and not allowed on a variant or bundle line, which take the catalog price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

