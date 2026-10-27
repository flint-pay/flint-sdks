[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxSettingsRequestInput

Tax settings to change when updating settings. Send null for a category to clear it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_tax_category` | Optional | string or null | Charge category inherited by delivery methods that omit charge_tax_category. Null derives the category from the method type. Send null to clear it. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `default_delivery_taxable` | Optional | boolean | Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint cannot yet derive delivery-charge taxability from category and jurisdiction alone. |
| `default_enabled` | Optional | boolean | Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable. |
| `default_line_item_tax_category` | Optional | string or null | Flint line-item tax category. Send null to clear it. Values: [13 declared values](#taxsettingsrequestinput-default_line_item_tax_category-values). |

#### TaxSettingsRequestInput default_line_item_tax_category values

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
- `null`

