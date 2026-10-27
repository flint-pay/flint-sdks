[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ImageRequestInput

An image you supply by `source_url`, with optional `alt` text and external reference.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. minLength: `1`. maxLength: `512`. |
| `file_id` | Conditional | string | The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or file_id. minLength: `1`. pattern: `^file_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `source_reference` | Optional | string | An opaque reference for this attachment, unique within its gallery. Whitespace and case are preserved. minLength: `1`. maxLength: `255`. |
| `source_url` | Conditional | string | A public image URL for Flint to fetch, or an untransformed canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without another fetch. Flint doesn't download a source_url again while the image it produced is still in this field. minLength: `1`. maxLength: `8192`. |

### ImageRequestInput variant 1

oneOf variant 1.

- Required: `source_url`.
- Optional: `file_id`.

### ImageRequestInput variant 2

oneOf variant 2.

- Required: `file_id`.
- Optional: `source_url`.

