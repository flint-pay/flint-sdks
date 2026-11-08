[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketWithAdmissionCodeResponse

A response containing `TicketWithAdmissionCode` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TicketWithAdmissionCode](../models/TicketWithAdmissionCode.md#ticketwithadmissioncode) | Resource, collection, or operation result returned by this request. A ticket with the admission code a rotation just minted. An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code. An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code. `data`: [field definitions](../models/TicketWithAdmissionCodeResponse.md#ticketwithadmissioncoderesponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TicketWithAdmissionCodeResponse.data

Resource, collection, or operation result returned by this request. A ticket with the admission code a rotation just minted. An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string | The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: `16`. minLength: `19`. maxLength: `19`. The new bearer admission code, formatted as XXXX-XXXX-XXXX-XXXX. Returned only by the rotation that minted it, and by a retry of that rotation within 24 hours while the ticket is unchanged; omitted otherwise. Encode it in a QR code without hyphens, and treat it like a password. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: `16`. minLength: `19`. maxLength: `19`. The new bearer admission code, formatted as XXXX-XXXX-XXXX-XXXX. Returned only by the rotation that minted it, and by a retry of that rotation within 24 hours while the ticket is unchanged; omitted otherwise. Encode it in a QR code without hyphens, and treat it like a password. |
| `admission_code_last4` | Required | string | Last four characters of the current admission code. |
| `attendee_name` | Required | string or null | Optional attendee name. Null when not supplied. minLength: `1`. maxLength: `200`. |
| `check_in_method` | Required | string or null | How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`. `check_in_method`: [declared alternatives](../models/TicketResponse.md#ticketresponsedatacheck_in_method). |
| `checked_in_at` | Required | string or null | When the ticket was admitted. Null when the ticket is not checked in. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the ticket was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) | Order summary, present only with expand=order. Requires commerce.orders.read. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. `order`: [field definitions](../models/TicketResponse.md#ticketresponsedataorder). |
| `order_id` | Required | string | The order that purchased this ticket. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | The purchased ticket tier. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `payment_link_id` | Required | string | The event payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `status` | Required | string | The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Actions currently offered for this ticket. Items values: `"check_in"`, `"undo_check_in"`, `"void"`. |
| `ticket_id` | Required | string | Unique ticket identity with the tkt_ prefix. Example: `"tkt_01KEZF7C00AWVKS6GAX8RMEBZ8"`. |
| `ticket_number` | Required | string | The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. |
| `updated_at` | Required | string | When the ticket last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `voided_at` | Required | string or null | When the ticket was permanently voided. Null when the ticket has not been voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### TicketWithAdmissionCodeResponse.data.check_in_method

Declared alternatives: [TicketResponse.data.check_in_method](../models/TicketResponse.md#ticketresponsedatacheck_in_method).

### TicketWithAdmissionCodeResponse.data.order

Field definitions: [TicketResponse.data.order](../models/TicketResponse.md#ticketresponsedataorder).

### TicketWithAdmissionCodeResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

