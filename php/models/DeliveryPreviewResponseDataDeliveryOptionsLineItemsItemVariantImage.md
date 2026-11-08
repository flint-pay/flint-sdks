[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantImage

Image of the item as it appears on the order.

A reference to an image by `url`, with optional `alt` text, used on an order line item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. minLength: `1`. |
| `url` | Required | string | URL of the image. minLength: `1`. |

