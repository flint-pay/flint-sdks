[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketCheckedInInstalledMerchantsEventInput

The `ticket.checked_in` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"ticket.checked_in"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### TicketCheckedInInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributes). |

### TicketCheckedInInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](TicketInput.md#ticketinput).

### TicketCheckedInInstalledMerchantsEventInput.data.object.check_in_method

Declared alternatives: [TicketInput.check_in_method](../models/TicketInput.md#ticketinputcheck_in_method).

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string or null | The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. `admission_code`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesadmission_code). |
| `admission_code_last4` | Optional | string or null | Last four characters of the current admission code. `admission_code_last4`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesadmission_code_last4). |
| `attendee_name` | Optional | string or null or null | Optional attendee name. Null when not supplied. `attendee_name`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesattendee_name). |
| `check_in_method` | Optional | (string or null) or null | How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`. `check_in_method`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributescheck_in_method). |
| `checked_in_at` | Optional | string or null or null | When the ticket was admitted. Null when the ticket is not checked in. `checked_in_at`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributeschecked_in_at). |
| `created_at` | Optional | string or null | When the ticket was issued. `created_at`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributescreated_at). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null | Order summary, present only with expand=order. Requires commerce.orders.read. |
| `order_id` | Optional | string or null | The order that purchased this ticket. `order_id`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesorder_id). |
| `order_line_item_id` | Optional | string or null | The purchased ticket tier. `order_line_item_id`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesorder_line_item_id). |
| `payment_link_id` | Optional | string or null | The event payment link. `payment_link_id`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributespayment_link_id). |
| `status` | Optional | string or null | The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`. `status`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions currently offered for this ticket. Items values: `"check_in"`, `"undo_check_in"`, `"void"`. `supported_actions`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `ticket_id` | Optional | string or null | Unique ticket identity with the tkt_ prefix. `ticket_id`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesticket_id). |
| `ticket_number` | Optional | string or null | The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. `ticket_number`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesticket_number). |
| `updated_at` | Optional | string or null | When the ticket last changed. `updated_at`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |
| `voided_at` | Optional | string or null or null | When the ticket was permanently voided. Null when the ticket has not been voided. `voided_at`: [declared alternatives](../models/TicketCheckedInInstalledMerchantsEventInput.md#ticketcheckedininstalledmerchantseventinputdataprevious_attributesvoided_at). |

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.admission_code

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.admission_code variant 1

anyOf variant 1: The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads..

- Value shape: string. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: `16`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.admission_code variant 2

anyOf variant 2.

- Value shape: null. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.admission_code_last4

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.admission_code_last4 variant 1

anyOf variant 1: Last four characters of the current admission code..

- Value shape: string. Last four characters of the current admission code. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.admission_code_last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the current admission code. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.attendee_name

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.attendee_name variant 1

anyOf variant 1: Optional attendee name. Null when not supplied..

- Value shape: (string or null). Optional attendee name. Null when not supplied. Optional attendee name. Null when not supplied. minLength: `1`. maxLength: `200`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.attendee_name variant 2

anyOf variant 2.

- Value shape: null. Optional attendee name. Null when not supplied. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.check_in_method

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.check_in_method variant 1

anyOf variant 1: How the ticket was admitted. Null when the ticket is not checked in.; anyOf variant 1.

- Value shape: string. How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`.

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.check_in_method variant 2, 3

anyOf variant 1: How the ticket was admitted. Null when the ticket is not checked in.; anyOf variant 2; anyOf variant 2.

- Value shape: null. How the ticket was admitted. Null when the ticket is not checked in. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.checked_in_at

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.checked_in_at variant 1

anyOf variant 1: When the ticket was admitted. Null when the ticket is not checked in..

- Value shape: (string or null). When the ticket was admitted. Null when the ticket is not checked in. When the ticket was admitted. Null when the ticket is not checked in. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.checked_in_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket was admitted. Null when the ticket is not checked in. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.created_at

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the ticket was issued..

- Value shape: string. When the ticket was issued. When the ticket was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket was issued. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.order_id

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: The order that purchased this ticket..

- Value shape: string. The order that purchased this ticket. The order that purchased this ticket. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order that purchased this ticket. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.order_line_item_id

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.order_line_item_id variant 1

anyOf variant 1: The purchased ticket tier..

- Value shape: string. The purchased ticket tier. The purchased ticket tier. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The purchased ticket tier. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.payment_link_id

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 1

anyOf variant 1: The event payment link..

- Value shape: string. The event payment link. The event payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. The event payment link. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.status

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: The admission lifecycle..

- Value shape: string. The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`.

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The admission lifecycle. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions currently offered for this ticket..

- Value shape: Array of string. Actions currently offered for this ticket. Items values: `"check_in"`, `"undo_check_in"`, `"void"`.

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions currently offered for this ticket. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.ticket_id

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.ticket_id variant 1

anyOf variant 1: Unique ticket identity with the tkt_ prefix..

- Value shape: string. Unique ticket identity with the tkt_ prefix. Unique ticket identity with the tkt_ prefix. Example: `"tkt_01KEZF7C00AWVKS6GAX8RMEBZ8"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.ticket_id variant 2

anyOf variant 2.

- Value shape: null. Unique ticket identity with the tkt_ prefix. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.ticket_number

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.ticket_number variant 1

anyOf variant 1: The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry..

- Value shape: string. The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.ticket_number variant 2

anyOf variant 2.

- Value shape: null. The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.updated_at

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the ticket last changed..

- Value shape: string. When the ticket last changed. When the ticket last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket last changed. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.voided_at

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.voided_at variant 1

anyOf variant 1: When the ticket was permanently voided. Null when the ticket has not been voided..

- Value shape: (string or null). When the ticket was permanently voided. Null when the ticket has not been voided. When the ticket was permanently voided. Null when the ticket has not been voided. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TicketCheckedInInstalledMerchantsEventInput.data.previous_attributes.voided_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket was permanently voided. Null when the ticket has not been voided. 

### TicketCheckedInInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

