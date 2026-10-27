[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftLineItemTaxCalculationRequestInput

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [OrderDraftTaxComponentRequestInput](../models/OrderDraftTaxComponentRequestInput.md#orderdrafttaxcomponentrequestinput) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

