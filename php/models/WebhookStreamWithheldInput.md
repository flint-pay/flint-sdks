[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamWithheldInput

Sent on the webhook event stream in place of an event that was withheld, such as when the caller lacks a required scope, with the `reason`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Required | string | Type of the event whose payload was withheld. Values: [275 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `reason` | Required | string | Why the credential cannot read this event's payload. Values: `"missing_resource_scope"`, `"resource_unattributed"`, `"partner_read_unsupported"`. |
| `required_scopes` | Optional | Array of string | Read scopes for the affected resource. Omitted when no public resource read scope is known. |
| `resource_id` | Optional | string | ID of the affected resource. Omitted when Flint cannot form a public resource reference. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | Public resource type affected by the event. Omitted when no public resource type is attributed. Example: `"order"`. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `webhook_event_id` | Required | string | ID of the event whose payload was withheld. Use it as a resume cursor. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

