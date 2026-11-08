[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftLineItemTaxCalculationRequestModelInput

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [OrderDraftTaxComponentRequestModelInput](../models/OrderDraftTaxComponentRequestModelInput.md#orderdrafttaxcomponentrequestmodelinput) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

