[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketListResponse

A page of `Ticket` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Ticket](../models/Ticket.md#ticket) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/TicketListResponse.md#ticketlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TicketListResponse.data[]

An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code.

Field definitions: [shared fields](TicketResponse.md#ticketresponsedata).

### TicketListResponse.data[].check_in_method

Declared alternatives: [TicketResponse.data.check_in_method](../models/TicketResponse.md#ticketresponsedatacheck_in_method).

### TicketListResponse.data[].order

Field definitions: [TicketResponse.data.order](../models/TicketResponse.md#ticketresponsedataorder).

### TicketListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

