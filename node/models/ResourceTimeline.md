[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimeline

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of [ResourceTimelineEntry](../models/ResourceTimelineEntry.md#resourcetimelineentry) |  |
| `resource_id` | Required | string |  |
| `resource_type` | Required | [ResourceType](../models/ResourceType.md#resourcetype) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [134 declared values](APIKey.md#apikeycreated_by-resource_type-values). |
| `test` | Required | boolean |  |

