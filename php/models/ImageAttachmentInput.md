[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ImageAttachmentInput

An image attached to a resource, with its display properties and attachment metadata.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. |
| `file_id` | Optional | string | Identifier of the file attached as this image. |
| `height` | Required | integer | Image height in pixels, when known. Format: `int32`. |
| `source_reference` | Optional | string | Caller-owned reference identifying this attachment within its gallery. minLength: `1`. maxLength: `255`. |
| `url` | Required | string | URL of the image. |
| `width` | Required | integer | Image width in pixels, when known. Format: `int32`. |

