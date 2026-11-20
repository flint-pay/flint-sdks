[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceIssuedEvent

The `merchant_billing_invoice.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [MerchantBillingInvoiceIssuedEventData](../models/MerchantBillingInvoiceIssuedEventData.md#merchantbillinginvoiceissuedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"merchant_billing_invoice.issued"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantBillingInvoiceIssuedEventRequest](../models/MerchantBillingInvoiceIssuedEventRequest.md#merchantbillinginvoiceissuedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### MerchantBillingInvoiceIssuedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributes). |

### MerchantBillingInvoiceIssuedEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### MerchantBillingInvoiceIssuedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](MerchantBillingInvoice.md#merchantbillinginvoice).

### MerchantBillingInvoiceIssuedEvent.data fields 1.object.line_items[]

Field definitions: [MerchantBillingInvoiceResponse.data.line_items[]](../models/MerchantBillingInvoiceResponse.md#merchantbillinginvoiceresponsedataline_items).

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](MerchantBillingInvoiceIssuedEventDataPreviousAttributes.md#merchantbillinginvoiceissuedeventdatapreviousattributes).

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.created_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When Flint created the invoice..

- Value shape: string. When Flint created the invoice. When Flint created the invoice. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint created the invoice. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.due_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.due_at variant 1

anyOf variant 1: When payment of the invoice is due..

- Value shape: string. When payment of the invoice is due. When payment of the invoice is due. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.due_at variant 2

anyOf variant 2.

- Value shape: null. When payment of the invoice is due. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.invoice_number

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.invoice_number variant 1

anyOf variant 1: Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained..

- Value shape: string. Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.issued_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.issued_at variant 1

anyOf variant 1: When Flint issued the invoice..

- Value shape: string. When Flint issued the invoice. When Flint issued the invoice. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.issued_at variant 2

anyOf variant 2.

- Value shape: null. When Flint issued the invoice. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1

anyOf variant 1: Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money..

- Value shape: Array of [MerchantBillingInvoiceLineItemPreviousAttributes](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributes). Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When Flint added this line to the invoice. `created_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1created_at). |
| `merchant_billing_invoice_line_item_id` | Optional | string or null | Stable identifier of this line item. `merchant_billing_invoice_line_item_id`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1merchant_billing_invoice_line_item_id). |
| `name` | Optional | string or null | Name of the subscription charge or credit. `name`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1name). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unsigned line total, calculated as quantity multiplied by unit_price_money. |
| `type` | Optional | string or null | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. `type`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unsigned price of one unit. total_money is quantity times this amount. |

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.created_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When Flint added this line to the invoice..

- Value shape: string. When Flint added this line to the invoice. When Flint added this line to the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint added this line to the invoice. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.merchant_billing_invoice_line_item_id

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.merchant_billing_invoice_line_item_id variant 1

anyOf variant 1: Stable identifier of this line item..

- Value shape: string. Stable identifier of this line item. Stable identifier of this line item. Example: `"msinvl_01KEZF7C00YB825JWZ87C5HDF0"`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.merchant_billing_invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this line item. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.name

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: Name of the subscription charge or credit..

- Value shape: string. Name of the subscription charge or credit. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the subscription charge or credit. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.type

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.type variant 1

anyOf variant 1: Whether the line adds a subscription charge or applies credit..

- Value shape: string. Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`.

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.type variant 2

anyOf variant 2.

- Value shape: null. Whether the line adds a subscription charge or applies credit. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.merchant_billing_invoice_id

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.merchant_billing_invoice_id variant 1

anyOf variant 1: Stable identifier of the invoice..

- Value shape: string. Stable identifier of the invoice. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.merchant_billing_invoice_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the invoice. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.paid_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.paid_at variant 1

anyOf variant 1: When the invoice was paid. Removed if a reversed collection reopens it..

- Value shape: string. When the invoice was paid. Removed if a reversed collection reopens it. When the invoice was paid. Removed if a reversed collection reopens it. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was paid. Removed if a reversed collection reopens it. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_end_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_end_at variant 1

anyOf variant 1: Exclusive invoice billing period end as an RFC 3339 UTC instant..

- Value shape: string. Exclusive invoice billing period end as an RFC 3339 UTC instant. Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_end_at variant 2

anyOf variant 2.

- Value shape: null. Exclusive invoice billing period end as an RFC 3339 UTC instant. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_start_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_start_at variant 1

anyOf variant 1: Inclusive invoice billing period start as an RFC 3339 UTC instant..

- Value shape: string. Inclusive invoice billing period start as an RFC 3339 UTC instant. Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.period_start_at variant 2

anyOf variant 2.

- Value shape: null. Inclusive invoice billing period start as an RFC 3339 UTC instant. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.status

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it..

- Value shape: string. Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"open"`, `"paid"`, `"written_off"`.

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.updated_at

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.updated_at variant 1

anyOf variant 1: When the invoice last changed..

- Value shape: string. When the invoice last changed. When the invoice last changed. Format: `date-time`. 

### MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice last changed. 

