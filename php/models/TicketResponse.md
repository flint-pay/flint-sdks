[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketResponse

A response containing `Ticket` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Ticket](../models/Ticket.md#ticket) | Resource, collection, or operation result returned by this request. An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code. `data`: [field definitions](../models/TicketResponse.md#ticketresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TicketResponse.data

Resource, collection, or operation result returned by this request. An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string | The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: `16`. |
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

### TicketResponse.data.check_in_method

### TicketResponse.data.check_in_method variant 1

anyOf variant 1.

- Value shape: string. How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`.

### TicketResponse.data.check_in_method variant 2

anyOf variant 2.

- Value shape: null. How the ticket was admitted. Null when the ticket is not checked in. 

### TicketResponse.data.order

Order summary, present only with expand=order. Requires commerce.orders.read. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact). |
| `closed_at` | Optional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Optional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `created_at` | Optional | string | When the order was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer associated with the order, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Required | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions). |
| `fulfillment_status` | Optional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `governing_delivery_selection_id` | Required | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `order_id` | Required | string | Stable identifier of the expanded order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable order number for receipts and merchant reference. |
| `paid_at` | Required | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_intent_ids` | Optional | Array of string | Payment intents associated with the order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_status` | Required | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | Order totals before accounting for collected payments and refunds. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_status` | Required | string | Refund progress for collected money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `settlement_amounts` | Required | [OrderSettlementAmounts](../models/OrderSettlementAmounts.md#ordersettlementamounts) | Payments, refunds, credits, and amounts still owed for the order. The bill settlement amounts plus order overpayments, settled tips, and debt discharged by final capture. Money collected, returned, waived, and still owed on a bill. Money collected, returned, waived, and still owed on a bill. |
| `status` | Required | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts on the order now, independent of permissions. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. |
| `updated_at` | Optional | string | When the order was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### TicketResponse.data.order.buyer_contact

Field definitions: [DisputeResponse.data.order variant 1.buyer_contact](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact).

### TicketResponse.data.order.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### TicketResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

