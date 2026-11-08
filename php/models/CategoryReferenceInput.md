[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryReferenceInput

A reference to a product category by ID, handle, and name.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string | Stable identifier of the category. Example: `"ctg_01KEZF7C001T4WWBPVGWRZD88Q"`. |
| `handle` | Required | string | Immutable handle of the referenced category. Read the category resource for its current name. |

