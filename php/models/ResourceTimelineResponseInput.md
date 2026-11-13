[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineResponseInput

A response containing `ResourceTimeline` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ResourceTimelineInput](../models/ResourceTimelineInput.md#resourcetimelineinput) | Resource, collection, or operation result returned by this request. The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes. Request entries include the resource itself and one level of directly owned resources, resolved when the timeline is read: orders include their payment intents, public refunds, fulfillments, returns, invoices, and disputes; payment intents include their public refunds and disputes. Included requests require the caller's read access to each owned resource type. Types the caller cannot read are excluded before pagination. Ownership follows the child resource's order_id or payment_intent_id. Other resource types include only directly attributed requests. Internal payment-refund children are excluded. attributed_resource always names the resource the request log is attributed to. Webhook and image entries remain scoped to the timeline resource. Page sizes and ordering are unchanged. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

