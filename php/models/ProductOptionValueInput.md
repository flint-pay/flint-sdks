[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionValueInput

One value of a product option, such as a size or color, with its position and status.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. |
| `option_value_id` | Required | string | Stable identifier of the option value. |
| `position` | Required | integer | Display order among the option's values, starting at zero. Format: `int32`. |
| `status` | Optional | string | Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `value` | Required | string | Option value shown to buyers, such as Medium. |

