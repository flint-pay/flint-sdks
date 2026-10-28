[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculation](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculation.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttaxcalculation) | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttaxcalculation-fields-1). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax line_item_tax_category values

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

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax.calculation fields 1

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Field definitions: [shared fields](DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax.calculation fields 1.components[]

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation.components[]](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculationcomponents).

