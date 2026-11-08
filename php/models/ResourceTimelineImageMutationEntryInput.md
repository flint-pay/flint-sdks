[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineImageMutationEntryInput

A change to this resource's image attachments recorded in its timeline.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entry_type` | Required | string | Always `image_mutation` for this kind of entry. Values: `"image_mutation"`. |
| `image_version` | Required | integer | Version of the resource's image attachments after this change. Format: `int64`. |
| `mutation_kind` | Required | string | The change made to the resource's images. Values: `"replaced"`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. Example: `"iomevt_01KEZF7C00D4JSSDP6AB68EFF2"`. |

