[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineInput

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of [ResourceTimelineEntryInput](../models/ResourceTimelineEntryInput.md#resourcetimelineentryinput) | Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`, `occurred_after`, and `occurred_before`. |
| `resource_id` | Required | string | ID of the resource this timeline is for. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Required | string | Type of the resource this timeline is for. Example: `"order"`. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `test` | Required | boolean | `true` when the timeline is for test mode data and `false` for live data. |

