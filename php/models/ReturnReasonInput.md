[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReasonInput

A reason customers can select when requesting a return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Required | Array of string | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Longer explanation of when to use the reason. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `handle` | Required | string | Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. minLength: `1`. maxLength: `100`. pattern: `^[a-z][a-z0-9_]{0,99}$`. |
| `is_note_required` | Required | boolean | Whether a Return line with this reason needs a buyer_note. |
| `name` | Required | string | Name buyers and staff see. |
| `return_reason_id` | Required | string | Flint's ID for the reason. Send it as return_reason_id on a Return line. |
| `source` | Required | string | Values: `"flint"`, `"merchant"`. |
| `status` | Required | string | Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Values: `"active"`, `"archived"`, `"inactive"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Format: `int64`. minimum: `1`. |

