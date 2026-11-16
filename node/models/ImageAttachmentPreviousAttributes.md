[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ImageAttachmentPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string or null | Alternative text describing the image for accessibility. `alt`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt). |
| `file_id` | Optional | string or null | Identifier of the file attached as this image. `file_id`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesfile_id). |
| `height` | Optional | integer or null | Image height in pixels, when known. `height`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight). |
| `source_reference` | Optional | string or null | Caller-owned reference identifying this attachment within its gallery. `source_reference`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributessource_reference). |
| `url` | Optional | string or null | URL of the image. `url`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl). |
| `width` | Optional | integer or null | Image width in pixels, when known. `width`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth). |

### ImageAttachmentPreviousAttributes.alt

### ImageAttachmentPreviousAttributes.alt variant 1

anyOf variant 1: Alternative text describing the image for accessibility..

- Value shape: string. Alternative text describing the image for accessibility. 

### ImageAttachmentPreviousAttributes.alt variant 2

anyOf variant 2.

- Value shape: null. Alternative text describing the image for accessibility. 

### ImageAttachmentPreviousAttributes.file_id

### ImageAttachmentPreviousAttributes.file_id variant 1

anyOf variant 1: Identifier of the file attached as this image..

- Value shape: string. Identifier of the file attached as this image. Identifier of the file attached as this image. Example: `"file_01KEZF7C00BZ179303GY9R0P03"`. 

### ImageAttachmentPreviousAttributes.file_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the file attached as this image. 

### ImageAttachmentPreviousAttributes.height

### ImageAttachmentPreviousAttributes.height variant 1

anyOf variant 1: Image height in pixels, when known..

- Value shape: integer. Image height in pixels, when known. Image height in pixels, when known. Format: `int32`. 

### ImageAttachmentPreviousAttributes.height variant 2

anyOf variant 2.

- Value shape: null. Image height in pixels, when known. 

### ImageAttachmentPreviousAttributes.source_reference

### ImageAttachmentPreviousAttributes.source_reference variant 1

anyOf variant 1: Caller-owned reference identifying this attachment within its gallery..

- Value shape: string. Caller-owned reference identifying this attachment within its gallery. Caller-owned reference identifying this attachment within its gallery. minLength: `1`. maxLength: `255`. 

### ImageAttachmentPreviousAttributes.source_reference variant 2

anyOf variant 2.

- Value shape: null. Caller-owned reference identifying this attachment within its gallery. 

### ImageAttachmentPreviousAttributes.url

### ImageAttachmentPreviousAttributes.url variant 1

anyOf variant 1: URL of the image..

- Value shape: string. URL of the image. 

### ImageAttachmentPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. URL of the image. 

### ImageAttachmentPreviousAttributes.width

### ImageAttachmentPreviousAttributes.width variant 1

anyOf variant 1: Image width in pixels, when known..

- Value shape: integer. Image width in pixels, when known. Image width in pixels, when known. Format: `int32`. 

### ImageAttachmentPreviousAttributes.width variant 2

anyOf variant 2.

- Value shape: null. Image width in pixels, when known. 

