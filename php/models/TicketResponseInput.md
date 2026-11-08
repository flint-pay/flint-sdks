[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketResponseInput

A response containing `Ticket` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TicketInput](../models/TicketInput.md#ticketinput) | Resource, collection, or operation result returned by this request. An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

