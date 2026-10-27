[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnReasonRequestInput

The request body for: Create return reason.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. Items: minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `handle` | Required | string | minLength: `1`. |
| `is_note_required` | Optional | boolean | Default: `false`. |
| `name` | Required | string | minLength: `1`. |

