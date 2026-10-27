[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxSettings

Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_tax_category` | Optional | string or null | Charge category inherited by delivery methods that omit charge_tax_category. Null derives the category from the method type. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `default_delivery_taxable` | Optional | boolean | Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint cannot yet derive delivery-charge taxability from category and jurisdiction alone. |
| `default_enabled` | Optional | boolean | Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable. |
| `default_line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#taxsettings-default_line_item_tax_category-values). |

#### TaxSettings default_line_item_tax_category values

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

