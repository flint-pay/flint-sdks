[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineEntriesItemImageMutation

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

A change to this resource's image attachments recorded in its timeline.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entry_type` | Required | string | Values: `"image_mutation"`. |
| `image_version` | Required | integer string | Version of the resource's image attachments after this change. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `mutation_kind` | Required | string | The change made to the resource's images. Values: `"replaced"`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `resource_timeline_entry_id` | Required | string |  |

