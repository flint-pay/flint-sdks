[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineInput

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes. Request entries include the resource itself and one level of directly owned resources, resolved when the timeline is read: orders include their payment intents, public refunds, fulfillments, returns, invoices, and disputes; payment intents include their public refunds and disputes. Included requests require the caller's read access to each owned resource type. Types the caller cannot read are excluded before pagination. Ownership follows the child resource's order_id or payment_intent_id. Other resource types include only directly attributed requests. Internal payment-refund children are excluded. attributed_resource always names the resource the request log is attributed to. Webhook and image entries remain scoped to the timeline resource. Page sizes and ordering are unchanged.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of [ResourceTimelineEntryInput](../models/ResourceTimelineEntryInput.md#resourcetimelineentryinput) | Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`, `occurred_after`, and `occurred_before`. |
| `resource_id` | Required | string | ID of the resource this timeline is for. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Required | string | Type of the resource this timeline is for. Example: `"order"`. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `test` | Required | boolean | `true` when the timeline is for test mode data and `false` for live data. |

