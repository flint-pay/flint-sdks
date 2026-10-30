[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookStreamWithheldInput

Sent on the webhook event stream in place of an event that was withheld, such as when the caller lacks a required scope, with the `reason`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Required | string | Values: [251 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `reason` | Required | string | Values: `"missing_resource_scope"`, `"resource_unattributed"`. |
| `required_scopes` | Optional | Array of string |  |
| `resource_id` | Optional | string |  |
| `resource_type` | Optional | [ResourceTypeInput](../models/ResourceTypeInput.md#resourcetypeinput) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `webhook_event_id` | Required | string |  |

