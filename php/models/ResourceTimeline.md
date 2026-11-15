[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimeline

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes. Request entries include the resource itself and one level of directly owned resources, resolved when the timeline is read: orders include their payment intents, public refunds, fulfillments, returns, invoices, and disputes; payment intents include their public refunds and disputes. Included requests require the caller's read access to each owned resource type. Types the caller cannot read are excluded before pagination. Ownership follows the child resource's order_id or payment_intent_id. Other resource types include only directly attributed requests. Internal payment-refund children are excluded. attributed_resource always names the resource the request log is attributed to. Webhook and image entries remain scoped to the timeline resource. Page sizes and ordering are unchanged.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of Alternative shapes (see declared variants) | Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`, `occurred_after`, and `occurred_before`. `entries[]`: [declared alternatives](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries). |
| `resource_id` | Required | string | ID of the resource this timeline is for. |
| `resource_type` | Required | string | Type of the resource this timeline is for. Values: [154 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `test` | Required | boolean | `true` when the timeline is for test mode data and `false` for live data. |

### ResourceTimeline.entries[]

Declared alternatives: [ResourceTimelineResponse.data.entries[]](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries).

