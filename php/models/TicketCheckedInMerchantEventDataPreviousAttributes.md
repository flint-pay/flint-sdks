[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketCheckedInMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string or null | The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. `admission_code`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesadmission_code). |
| `admission_code_last4` | Optional | string or null | Last four characters of the current admission code. `admission_code_last4`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesadmission_code_last4). |
| `attendee_name` | Optional | string or null or null | Optional attendee name. Null when not supplied. `attendee_name`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesattendee_name). |
| `check_in_method` | Optional | string or null or null | How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`. `check_in_method`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributescheck_in_method). |
| `checked_in_at` | Optional | string or null or null | When the ticket was admitted. Null when the ticket is not checked in. `checked_in_at`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributeschecked_in_at). |
| `created_at` | Optional | string or null | When the ticket was issued. `created_at`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributescreated_at). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary, present only with expand=order. Requires commerce.orders.read. |
| `order_id` | Optional | string or null | The order that purchased this ticket. `order_id`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | The purchased ticket tier. `order_line_item_id`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesorder_line_item_id). |
| `payment_link_id` | Optional | string or null | The event payment link. `payment_link_id`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributespayment_link_id). |
| `status` | Optional | string or null | The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`. `status`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions currently offered for this ticket. Items values: `"check_in"`, `"undo_check_in"`, `"void"`. `supported_actions`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributessupported_actions). |
| `ticket_id` | Optional | string or null | Unique ticket identity with the tkt_ prefix. `ticket_id`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesticket_id). |
| `ticket_number` | Optional | string or null | The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. `ticket_number`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesticket_number). |
| `updated_at` | Optional | string or null | When the ticket last changed. `updated_at`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |
| `voided_at` | Optional | string or null or null | When the ticket was permanently voided. Null when the ticket has not been voided. `voided_at`: [declared alternatives](../models/TicketCheckedInMerchantEventDataPreviousAttributes.md#ticketcheckedinmerchanteventdatapreviousattributesvoided_at). |

### TicketCheckedInMerchantEventDataPreviousAttributes.admission_code

### TicketCheckedInMerchantEventDataPreviousAttributes.admission_code variant 1

anyOf variant 1: The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads..

- Value shape: string. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: `16`. 

### TicketCheckedInMerchantEventDataPreviousAttributes.admission_code variant 2

anyOf variant 2.

- Value shape: null. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. 

### TicketCheckedInMerchantEventDataPreviousAttributes.admission_code_last4

### TicketCheckedInMerchantEventDataPreviousAttributes.admission_code_last4 variant 1

anyOf variant 1: Last four characters of the current admission code..

- Value shape: string. Last four characters of the current admission code. 

### TicketCheckedInMerchantEventDataPreviousAttributes.admission_code_last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the current admission code. 

### TicketCheckedInMerchantEventDataPreviousAttributes.attendee_name

### TicketCheckedInMerchantEventDataPreviousAttributes.attendee_name variant 1

anyOf variant 1: Optional attendee name. Null when not supplied..

- Value shape: (string or null). Optional attendee name. Null when not supplied. Optional attendee name. Null when not supplied. minLength: `1`. maxLength: `200`. 

### TicketCheckedInMerchantEventDataPreviousAttributes.attendee_name variant 2

anyOf variant 2.

- Value shape: null. Optional attendee name. Null when not supplied. 

### TicketCheckedInMerchantEventDataPreviousAttributes.check_in_method

### TicketCheckedInMerchantEventDataPreviousAttributes.check_in_method variant 1

anyOf variant 1: How the ticket was admitted. Null when the ticket is not checked in.; anyOf variant 1.

- Value shape: string. How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`.

### TicketCheckedInMerchantEventDataPreviousAttributes.check_in_method variant 2, 3

anyOf variant 1: How the ticket was admitted. Null when the ticket is not checked in.; anyOf variant 2; anyOf variant 2.

- Value shape: null. How the ticket was admitted. Null when the ticket is not checked in. 

### TicketCheckedInMerchantEventDataPreviousAttributes.checked_in_at

### TicketCheckedInMerchantEventDataPreviousAttributes.checked_in_at variant 1

anyOf variant 1: When the ticket was admitted. Null when the ticket is not checked in..

- Value shape: (string or null). When the ticket was admitted. Null when the ticket is not checked in. When the ticket was admitted. Null when the ticket is not checked in. Format: `date-time`. 

### TicketCheckedInMerchantEventDataPreviousAttributes.checked_in_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket was admitted. Null when the ticket is not checked in. 

### TicketCheckedInMerchantEventDataPreviousAttributes.created_at

### TicketCheckedInMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the ticket was issued..

- Value shape: string. When the ticket was issued. When the ticket was issued. Format: `date-time`. 

### TicketCheckedInMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket was issued. 

### TicketCheckedInMerchantEventDataPreviousAttributes.order_id

### TicketCheckedInMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: The order that purchased this ticket..

- Value shape: string. The order that purchased this ticket. 

### TicketCheckedInMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order that purchased this ticket. 

### TicketCheckedInMerchantEventDataPreviousAttributes.order_line_item_id

### TicketCheckedInMerchantEventDataPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The purchased ticket tier..

- Value shape: string. The purchased ticket tier. 

### TicketCheckedInMerchantEventDataPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The purchased ticket tier. 

### TicketCheckedInMerchantEventDataPreviousAttributes.payment_link_id

### TicketCheckedInMerchantEventDataPreviousAttributes.payment_link_id variant 1

anyOf variant 1: The event payment link..

- Value shape: string. The event payment link. 

### TicketCheckedInMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. The event payment link. 

### TicketCheckedInMerchantEventDataPreviousAttributes.status

### TicketCheckedInMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: The admission lifecycle..

- Value shape: string. The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`.

### TicketCheckedInMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. The admission lifecycle. 

### TicketCheckedInMerchantEventDataPreviousAttributes.supported_actions

### TicketCheckedInMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions currently offered for this ticket..

- Value shape: Array of string. Actions currently offered for this ticket. Items values: `"check_in"`, `"undo_check_in"`, `"void"`.

### TicketCheckedInMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions currently offered for this ticket. 

### TicketCheckedInMerchantEventDataPreviousAttributes.ticket_id

### TicketCheckedInMerchantEventDataPreviousAttributes.ticket_id variant 1

anyOf variant 1: Unique ticket identity with the tkt_ prefix..

- Value shape: string. Unique ticket identity with the tkt_ prefix. 

### TicketCheckedInMerchantEventDataPreviousAttributes.ticket_id variant 2

anyOf variant 2.

- Value shape: null. Unique ticket identity with the tkt_ prefix. 

### TicketCheckedInMerchantEventDataPreviousAttributes.ticket_number

### TicketCheckedInMerchantEventDataPreviousAttributes.ticket_number variant 1

anyOf variant 1: The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry..

- Value shape: string. The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. 

### TicketCheckedInMerchantEventDataPreviousAttributes.ticket_number variant 2

anyOf variant 2.

- Value shape: null. The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. 

### TicketCheckedInMerchantEventDataPreviousAttributes.updated_at

### TicketCheckedInMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the ticket last changed..

- Value shape: string. When the ticket last changed. When the ticket last changed. Format: `date-time`. 

### TicketCheckedInMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket last changed. 

### TicketCheckedInMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### TicketCheckedInMerchantEventDataPreviousAttributes.voided_at

### TicketCheckedInMerchantEventDataPreviousAttributes.voided_at variant 1

anyOf variant 1: When the ticket was permanently voided. Null when the ticket has not been voided..

- Value shape: (string or null). When the ticket was permanently voided. Null when the ticket has not been voided. When the ticket was permanently voided. Null when the ticket has not been voided. Format: `date-time`. 

### TicketCheckedInMerchantEventDataPreviousAttributes.voided_at variant 2

anyOf variant 2.

- Value shape: null. When the ticket was permanently voided. Null when the ticket has not been voided. 

