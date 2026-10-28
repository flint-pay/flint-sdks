[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleTaxCalculation

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of ([DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleTaxCalculationComponentsItem.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitembundletaxcalculationcomponentsitem) and object) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

