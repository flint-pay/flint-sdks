[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorResourceReferenceInput

A reference to a public resource named in an error, with its type, ID, and current status when available.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Public Flint ID of the referenced resource. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Required | string | Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. Example: `"order"`. |
| `status` | Optional | string | Current public status of the referenced resource when available. |

