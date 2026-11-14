[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxReverseCharge

The buyer accounts for the tax under the reverse charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_tax_id` | Required | [CustomerTaxID](../models/CustomerTaxID.md#customertaxid) or null | The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. |

