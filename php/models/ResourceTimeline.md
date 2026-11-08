[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimeline

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of Alternative shapes (see declared variants) | Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`, `occurred_after`, and `occurred_before`. `entries[]`: [declared alternatives](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries). |
| `resource_id` | Required | string | ID of the resource this timeline is for. |
| `resource_type` | Required | string | Type of the resource this timeline is for. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `test` | Required | boolean | `true` when the timeline is for test mode data and `false` for live data. |

### ResourceTimeline.entries[]

Declared alternatives: [ResourceTimelineResponse.data.entries[]](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries).

