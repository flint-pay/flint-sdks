[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineInput

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of [ResourceTimelineEntryInput](../models/ResourceTimelineEntryInput.md#resourcetimelineentryinput) |  |
| `resource_id` | Required | string |  |
| `resource_type` | Required | [ResourceTypeInput](../models/ResourceTypeInput.md#resourcetypeinput) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `test` | Required | boolean |  |

