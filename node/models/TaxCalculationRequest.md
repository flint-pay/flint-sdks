[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | minItems: `1`. `components[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponents), [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponents), [field definitions](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculationcomponents). |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

### TaxCalculationRequest variant 1

anyOf variant 1: Declared schema OrderDraftLineItemTaxCalculationRequest. A tax calculation you supply for a draft order line item, made of tax components and a price mode..

No additional constraints.

### TaxCalculationRequest variant 2

anyOf variant 2: Declared schema TaxCalculationRequest. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components..

No additional constraints.

### TaxCalculationRequest variant 3

anyOf variant 3: Declared schema TaxCalculationRequestRequest. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components..

No additional constraints.

### TaxCalculationRequest variant 1.components[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponents).

### TaxCalculationRequest variant 2.components[]

Field definitions: [BuyerOrderLineItem.tax.calculation.components[]](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponents).

### TaxCalculationRequest variant 3.components[]

Field definitions: [OrderChargeTaxAssignment.calculation.components[]](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculationcomponents).

