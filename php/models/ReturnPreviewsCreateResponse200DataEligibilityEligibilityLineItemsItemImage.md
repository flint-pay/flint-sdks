[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibilityEligibilityLineItemsItemImage

An image with its `url`, `width`, and `height`, and optional `alt` text.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. |
| `height` | Required | integer | Image height in pixels, when known. Format: `int32`. |
| `url` | Required | string | URL of the image. |
| `width` | Required | integer | Image width in pixels, when known. Format: `int32`. |

