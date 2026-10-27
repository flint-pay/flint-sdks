[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftLineItemTaxCalculationRequestInput

Request input. Response: [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest).

A tax calculation you supply for a draft order line item, made of tax components and a price mode.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [OrderDraftTaxComponentRequestInput](../models/OrderDraftTaxComponentRequestInput.md#orderdrafttaxcomponentrequestinput) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

