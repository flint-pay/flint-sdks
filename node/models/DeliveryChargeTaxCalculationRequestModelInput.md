[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryChargeTaxCalculationRequestModelInput

Request input. Response: [DeliveryChargeTaxCalculationRequest](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest).

A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequestModelInput](../models/TaxComponentRequestModelInput.md#taxcomponentrequestmodelinput) | The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: `1`. |
| `mode` | Optional | string | Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`. |
| `price_mode` | Required | string | Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`. |

