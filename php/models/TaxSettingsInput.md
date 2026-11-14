[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxSettingsInput

Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_callback_id` | Optional | string or null | The active tax calculation callback selected for this merchant and environment. Switching IDs is atomic. Omitted when no callback is selected. minLength: `1`. Example: `"tcb_01KEZF7C00N7SER74Y2E6D1ZGT"`. |
| `default_calculation` | Optional | [TaxDefaultCalculationInput](../models/TaxDefaultCalculationInput.md#taxdefaultcalculationinput) | Replaced as a whole: send every field you want to keep. The calculation an order uses when nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and the orders of checkout sessions, payment links, and subscriptions that set none. A `provided` default applies only to orders you create; the orders Flint creates use automatic tax under it. Omitted when unset, which means automatic. The calculation an order uses when its request leaves `tax.calculation` unset. |
| `default_delivery_tax_category` | Optional | string or null | Charge category inherited by delivery methods that omit charge_tax_category. `null` when no default is set; the category then follows the method type: shipping for shipments, delivery for local delivery, and service_fee for pickup. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `default_delivery_taxable` | Optional | boolean | Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to true. |
| `default_enabled` | Optional | boolean | Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable. Turning it on, or changing the default calculation while it is on, needs what the default calculation uses: a selected tax calculation callback for an external `callback` default, and an active tax connection for any other, because the orders Flint creates use automatic tax under an automatic or `provided` default. |
| `default_line_item_tax_category` | Optional | string | Flint line-item tax category. Effective settings return general when unset, matching the tax engine fallback. Values: [12 declared values](#taxsettingsinput-default_line_item_tax_category-values). |
| `default_price_mode` | Optional | string | Price mode an order takes when it starts calculating tax without its own tax.calculation: when it is created, from a checkout session or payment link, or when tax is turned on later. additive (the default) adds tax to prices, and inclusive treats every line item and charge price as including its tax. Subscription orders, including renewals, stay additive, and orders that already calculate tax keep their mode. Values: `"additive"`, `"inclusive"`. |
| `delivery_charge_tax_basis` | Optional | string | Automatic tax basis for delivery-method charges. Defaults to full_charge. taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges and external tax are unchanged. Saved values take effect only when Flint enables this capability; until then the full charge is used. Open orders use the setting at their next calculation; committed tax keeps its basis. Values: `"full_charge"`, `"taxable_items_share"`. |

#### TaxSettingsInput default_line_item_tax_category values

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

