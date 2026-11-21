[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementTaxRequest

External tax for replacement merchandise. Allowed only on merchant requests for external-tax orders.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | External percentage tax components and price mode for this replacement line. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/ReturnReplacementTaxRequest.md#returnreplacementtaxrequestcalculation). |

### ReturnReplacementTaxRequest.calculation

External percentage tax components and price mode for this replacement line. A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Field definitions: [shared fields](CreateOrderLineItemInputBundle.md#createorderlineiteminputbundletaxcalculation).

### ReturnReplacementTaxRequest.calculation.components[]

Field definitions: [CreateOrderLineItemInputBundle.tax.calculation.components[]](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundletaxcalculationcomponents).

