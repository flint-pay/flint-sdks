[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FileUploadInput

The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL expires.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | When the signed upload URL expires, 15 minutes after creation. Create a new file if it expires. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `headers` | Required | Map of string | Headers to send verbatim with the upload. |
| `method` | Required | string | HTTP method to upload the bytes with. Values: `"PUT"`. |
| `url` | Required | string | A signed upload target. Send the bytes with method and headers verbatim; keep the URL out of logs. Format: `uri`. Example: `"https://example.com/receipt"`. |

