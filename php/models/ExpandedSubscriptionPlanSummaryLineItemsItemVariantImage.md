[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryLineItemsItemVariantImage

Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image.

An image with its URL, size, and alt text.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. |
| `height` | Required | integer | Image height in pixels, when known. Format: `int32`. |
| `url` | Required | string | URL of the image. |
| `width` | Required | integer | Image width in pixels, when known. Format: `int32`. |

