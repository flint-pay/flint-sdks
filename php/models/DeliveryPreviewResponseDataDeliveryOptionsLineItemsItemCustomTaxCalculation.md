[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`.

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of ([DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtaxcalculationcomponentsitem) and object) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

