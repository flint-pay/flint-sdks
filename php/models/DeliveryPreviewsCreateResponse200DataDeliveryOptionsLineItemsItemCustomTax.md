[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculation](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculation.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtaxcalculation) | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtaxcalculation-fields-1). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax line_item_tax_category values

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

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax.calculation fields 1

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Field definitions: [shared fields](DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax.calculation fields 1.components[]

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation.components[]](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculationcomponents).

