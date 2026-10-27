[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineImageMutationEntry

A change to this resource's image attachments recorded in its timeline.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entry_type` | Required | string | Values: `"image_mutation"`. |
| `image_version` | Required | integer string | Version of the resource's image attachments after this change. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `mutation_kind` | Required | string | The change made to the resource's images. Values: `"replaced"`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string |  |

