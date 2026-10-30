[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnReasonRequestInput

The request body for: Create return reason.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. Repeated handles are dropped. maxItems: `100`. Items: minLength: `1`. |
| `description` | Optional | string | Description, limited to 2048 bytes after trimming surrounding whitespace. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `handle` | Required | string | Stable lower_snake_case identifier. After trimming surrounding whitespace, it must start with a lowercase letter and contain only lowercase letters, digits, and underscores, with 1 through 100 characters. minLength: `1`. |
| `is_note_required` | Optional | boolean | Whether a Return line with this reason needs a buyer_note. Defaults to false. Default: `false`. |
| `name` | Required | string | Display name, limited to 1 through 255 bytes after trimming surrounding whitespace. minLength: `1`. |

