[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxReverseChargePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_tax_id` | Optional | [CustomerTaxIDPreviousAttributesInput](../models/CustomerTaxIDPreviousAttributesInput.md#customertaxidpreviousattributesinput) or null | The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. |

