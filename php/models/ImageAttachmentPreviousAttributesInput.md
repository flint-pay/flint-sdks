[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ImageAttachmentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string or null | Alternative text describing the image for accessibility. `alt`: [declared alternatives](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinputalt). |
| `file_id` | Optional | string or null | Identifier of the file attached as this image. `file_id`: [declared alternatives](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinputfile_id). |
| `height` | Optional | integer or null | Image height in pixels, when known. `height`: [declared alternatives](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinputheight). |
| `source_reference` | Optional | string or null | Caller-owned reference identifying this attachment within its gallery. `source_reference`: [declared alternatives](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinputsource_reference). |
| `url` | Optional | string or null | URL of the image. `url`: [declared alternatives](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinputurl). |
| `width` | Optional | integer or null | Image width in pixels, when known. `width`: [declared alternatives](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinputwidth). |

### ImageAttachmentPreviousAttributesInput.alt

### ImageAttachmentPreviousAttributesInput.alt variant 1

anyOf variant 1: Alternative text describing the image for accessibility..

- Value shape: string. Alternative text describing the image for accessibility. 

### ImageAttachmentPreviousAttributesInput.alt variant 2

anyOf variant 2.

- Value shape: null. Alternative text describing the image for accessibility. 

### ImageAttachmentPreviousAttributesInput.file_id

### ImageAttachmentPreviousAttributesInput.file_id variant 1

anyOf variant 1: Identifier of the file attached as this image..

- Value shape: string. Identifier of the file attached as this image. Identifier of the file attached as this image. Example: `"file_01KEZF7C00BZ179303GY9R0P03"`. 

### ImageAttachmentPreviousAttributesInput.file_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the file attached as this image. 

### ImageAttachmentPreviousAttributesInput.height

### ImageAttachmentPreviousAttributesInput.height variant 1

anyOf variant 1: Image height in pixels, when known..

- Value shape: integer. Image height in pixels, when known. Image height in pixels, when known. Format: `int32`. 

### ImageAttachmentPreviousAttributesInput.height variant 2

anyOf variant 2.

- Value shape: null. Image height in pixels, when known. 

### ImageAttachmentPreviousAttributesInput.source_reference

### ImageAttachmentPreviousAttributesInput.source_reference variant 1

anyOf variant 1: Caller-owned reference identifying this attachment within its gallery..

- Value shape: string. Caller-owned reference identifying this attachment within its gallery. Caller-owned reference identifying this attachment within its gallery. minLength: `1`. maxLength: `255`. 

### ImageAttachmentPreviousAttributesInput.source_reference variant 2

anyOf variant 2.

- Value shape: null. Caller-owned reference identifying this attachment within its gallery. 

### ImageAttachmentPreviousAttributesInput.url

### ImageAttachmentPreviousAttributesInput.url variant 1

anyOf variant 1: URL of the image..

- Value shape: string. URL of the image. 

### ImageAttachmentPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. URL of the image. 

### ImageAttachmentPreviousAttributesInput.width

### ImageAttachmentPreviousAttributesInput.width variant 1

anyOf variant 1: Image width in pixels, when known..

- Value shape: integer. Image width in pixels, when known. Image width in pixels, when known. Format: `int32`. 

### ImageAttachmentPreviousAttributesInput.width variant 2

anyOf variant 2.

- Value shape: null. Image width in pixels, when known. 

