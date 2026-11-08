[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerTicketListResponse

A page of `BuyerTicket` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerTicket](../models/BuyerTicket.md#buyerticket) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerTicketListResponse.md#buyerticketlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerTicketListResponse.data[]

One of the buyer's event tickets, with the admission code its QR code holds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string | The 16-character Crockford base32 admission code to show as a QR code and print as XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose buyer_email differs from the email Flint verified, and for sessions Flint didn't verify: merchant access links, customer sessions created with an API key, links emailed to another address, and checkout links a merchant reads or requests after payment. minLength: `16`. maxLength: `16`. |
| `attendee_name` | Required | string or null | Attendee name. Null when none was given. minLength: `1`. maxLength: `200`. |
| `checked_in_at` | Required | string or null | When the ticket was admitted. Null when the ticket is not checked in. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the ticket was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `event` | Optional | [BuyerTicketEvent](../models/BuyerTicketEvent.md#buyerticketevent) | The event details the order captured at checkout. Absent when the order didn't record them. Event details captured when the ticket's order was placed. `event`: [field definitions](../models/BuyerTicketListResponse.md#buyerticketlistresponsedataevent). |
| `order_id` | Required | string | The buyer's order that purchased this ticket. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `status` | Required | string | The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`. |
| `ticket_id` | Required | string | Unique ticket identity with the tkt_ prefix. Example: `"tkt_01KEZF7C00AWVKS6GAX8RMEBZ8"`. |
| `ticket_number` | Required | string | The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own. |

### BuyerTicketListResponse.data[].event

The event details the order captured at checkout. Absent when the order didn't record them. Event details captured when the ticket's order was placed.

Field definitions: [shared fields](BuyerTicketEventInput.md#buyerticketeventinput).

### BuyerTicketListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

