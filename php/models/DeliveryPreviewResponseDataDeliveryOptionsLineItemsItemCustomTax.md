[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculation](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculation.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtaxcalculation) | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtaxcalculation-fields-1). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax.calculation fields 1

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Field definitions: [shared fields](DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax.calculation fields 1.components[]

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation.components[]](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculationcomponents).

