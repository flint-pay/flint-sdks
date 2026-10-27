[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FileResponse

A response containing `File` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [File](../models/File.md#file) | An image uploaded to Flint. Create the file, PUT its bytes to upload.url with upload.headers, then complete it. Attach a ready file with images[].file_id on a catalog resource or file_id in a branding image field. A ready unattached file expires after 24 hours; attachment removes that deadline. Each upload has its own file_id, including uploads of identical bytes. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

