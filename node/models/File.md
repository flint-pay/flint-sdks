[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## File

An image uploaded to Flint. Create the file, PUT its bytes to upload.url with upload.headers, then complete it. Attach a ready file with images[].file_id on a catalog resource or file_id in a branding image field. A ready unattached file expires after 24 hours; attachment removes that deadline. Each upload has its own file_id, including uploads of identical bytes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `content_type` | Required | string | The stored image media type when ready; the declared upload media type otherwise. Values: `"image/jpeg"`, `"image/png"`, `"image/webp"`. |
| `created_at` | Required | string | When the upload was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | When this file expires if it stays in its current status. While awaiting_upload, equals upload.expires_at. While ready and unattached, 24 hours after processing or 7 days after its last detachment. Omitted while attached and in every other status. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_code` | Optional | string | A safe failure category, present only when failed. Unknown processing causes use processing_failed. Values: `"image_unsupported"`, `"image_too_large"`, `"processing_failed"`. |
| `file_id` | Required | string | The file's stable Flint ID. pattern: `^file_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"file_01KEZF7C00BZ179303GY9R0P03"`. |
| `height` | Optional | integer | The stored image height in pixels, present only when ready. Format: `int32`. |
| `purpose` | Required | string | What the image is used for. Set when the file is created. Values: `"product"`, `"product_variant"`, `"bundle"`, `"payment_link"`, `"subscription_plan"`, `"merchant_logo"`, `"merchant_icon"`. |
| `size_bytes` | Required | integer | The stored image size when ready; the declared upload size otherwise. Format: `int64`. |
| `status` | Required | string | Where the file is in its lifecycle. Only a `ready` file can be attached. Values: `"awaiting_upload"`, `"processing"`, `"ready"`, `"failed"`, `"expired"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. complete is offered while awaiting_upload or processing and remains accepted for completed files, returning the completed file. It can remain available after an attachment deadline expires until Flint removes the stored file. An in-progress completion can still return a transient refusal. Items values: `"complete"`. |
| `upload` | Optional | [FileUpload](../models/FileUpload.md#fileupload) | Present only in the create response while awaiting_upload. GET never returns upload credentials. PUT bytes before upload.expires_at, then complete the file. The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL expires. |
| `url` | Optional | string | The canonical image URL, present when ready. Attach the file with images[].file_id, or copy this URL into source_url on another resource. Format: `uri`. Example: `"https://example.com/receipt"`. |
| `width` | Optional | integer | The stored image width in pixels, present only when ready. Format: `int32`. |

