[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculation

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of ([DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtaxcalculationcomponentsitem) and object) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

