[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculation

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of ([DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletaxcalculationcomponentsitem) and object) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

