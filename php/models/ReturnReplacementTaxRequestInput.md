[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementTaxRequestInput

External tax for replacement merchandise. Allowed only on merchant requests for external-tax orders.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [OrderDraftLineItemTaxCalculationRequestModelInput](../models/OrderDraftLineItemTaxCalculationRequestModelInput.md#orderdraftlineitemtaxcalculationrequestmodelinput) | External percentage tax components and price mode for this replacement line. A tax calculation you supply for a draft order line item, made of tax components and a price mode. |

