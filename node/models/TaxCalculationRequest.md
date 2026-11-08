[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponents), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponents), [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponents), [field definitions](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2components), [field definitions](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculationcomponents). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### TaxCalculationRequest variant 1

anyOf variant 1: Declared schema OrderDraftLineItemTaxCalculationRequest. A tax calculation you supply for a draft order line item, made of tax components and a price mode..

No additional constraints.

### TaxCalculationRequest variant 2

anyOf variant 2: Declared schema OrderDraftLineItemTaxCalculationRequestModel. A tax calculation you supply for a draft order line item, made of tax components and a price mode..

No additional constraints.

### TaxCalculationRequest variant 3

anyOf variant 3: Declared schema TaxCalculationRequest. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components..

No additional constraints.

### TaxCalculationRequest variant 4

anyOf variant 4: Declared schema TaxCalculationRequestModel. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components..

No additional constraints.

### TaxCalculationRequest variant 5

anyOf variant 5: Declared schema TaxCalculationRequestRequest. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components..

No additional constraints.

### TaxCalculationRequest variant 1.components[]

Field definitions: [CreateOrderLineItem variant 1.tax.calculation.components[]](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponents).

### TaxCalculationRequest variant 2.components[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponents).

### TaxCalculationRequest variant 3.components[]

Field definitions: [BuyerOrderLineItem.tax.calculation.components[]](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponents).

### TaxCalculationRequest variant 4.components[]

Field definitions: [DeliveryChargeTaxCalculationRequest variant 2.components[]](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2components).

### TaxCalculationRequest variant 5.components[]

Field definitions: [OrderCalculatedLineItemTax variant 2.calculation.components[]](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculationcomponents).

