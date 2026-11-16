[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxReverseChargePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_tax_id` | Optional | [CustomerTaxIDPreviousAttributes](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributes) or null | The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. |

