[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnReasonRequestInput

The request body for: Update return reason.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. Repeated handles are dropped. Requires expected_version. maxItems: `100`. Items: minLength: `1`. |
| `description` | Optional | string or null | Description, limited to 2048 bytes after trimming surrounding whitespace. Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer | Required when any of these fields is present: category_handles. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_note_required` | Optional | boolean | Whether a Return line with this reason needs a buyer_note. |
| `name` | Optional | string | Display name, limited to 1 through 255 bytes after trimming surrounding whitespace. minLength: `1`. |
| `status` | Optional | string | Set active to offer the reason or inactive to stop offering it. To archive a merchant reason, use DELETE. Values: `"active"`, `"inactive"`. |

