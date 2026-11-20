[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceIssuedEventInput

The `merchant_billing_invoice.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"merchant_billing_invoice.issued"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### MerchantBillingInvoiceIssuedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributes). |

### MerchantBillingInvoiceIssuedEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](MerchantBillingInvoiceInput.md#merchantbillinginvoiceinput).

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_credit_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. |
| `created_at` | Optional | string or null | When Flint created the invoice. `created_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributescreated_at). |
| `due_at` | Optional | string or null | When payment of the invoice is due. `due_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesdue_at). |
| `invoice_number` | Optional | string or null | Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. `invoice_number`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesinvoice_number). |
| `issued_at` | Optional | string or null | When Flint issued the invoice. `issued_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesissued_at). |
| `line_items` | Optional | Array of [MerchantBillingInvoiceLineItemPreviousAttributesInput](../models/MerchantBillingInvoiceLineItemPreviousAttributesInput.md#merchantbillinginvoicelineitempreviousattributesinput) or null | Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. `line_items`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesline_items). |
| `merchant_billing_invoice_id` | Optional | string or null | Stable identifier of the invoice. `merchant_billing_invoice_id`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesmerchant_billing_invoice_id). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Part of total_money Flint still has to collect. |
| `paid_at` | Optional | string or null | When the invoice was paid. Removed if a reversed collection reopens it. `paid_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributespaid_at). |
| `period_end_at` | Optional | string or null | Exclusive invoice billing period end as an RFC 3339 UTC instant. `period_end_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesperiod_end_at). |
| `period_start_at` | Optional | string or null | Inclusive invoice billing period start as an RFC 3339 UTC instant. `period_start_at`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesperiod_start_at). |
| `status` | Optional | string or null | Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"open"`, `"paid"`, `"written_off"`. `status`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEventInput.md#merchantbillinginvoiceissuedeventinputdataprevious_attributesstatus). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Sum of the subscription line items, before credit. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | What the invoice charges: subtotal_money minus applied_credit_money. |
| `updated_at` | Optional | string or null | When the invoice last changed. `updated_at`: [declared alternatives](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputupdated_at). |

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.created_at

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When Flint created the invoice..

- Value shape: string. When Flint created the invoice. When Flint created the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint created the invoice. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.due_at

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.due_at variant 1

anyOf variant 1: When payment of the invoice is due..

- Value shape: string. When payment of the invoice is due. When payment of the invoice is due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.due_at variant 2

anyOf variant 2.

- Value shape: null. When payment of the invoice is due. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.invoice_number

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.invoice_number variant 1

anyOf variant 1: Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained..

- Value shape: string. Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.invoice_number variant 2

anyOf variant 2.

- Value shape: null. Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.issued_at

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.issued_at variant 1

anyOf variant 1: When Flint issued the invoice..

- Value shape: string. When Flint issued the invoice. When Flint issued the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.issued_at variant 2

anyOf variant 2.

- Value shape: null. When Flint issued the invoice. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.line_items

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money..

- Value shape: Array of [MerchantBillingInvoiceLineItemPreviousAttributesInput](../models/MerchantBillingInvoiceLineItemPreviousAttributesInput.md#merchantbillinginvoicelineitempreviousattributesinput). Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.merchant_billing_invoice_id

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.merchant_billing_invoice_id variant 1

anyOf variant 1: Stable identifier of the invoice..

- Value shape: string. Stable identifier of the invoice. Stable identifier of the invoice. Example: `"msinv_01KEZF7C00MB754KPEPACGRMNP"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.merchant_billing_invoice_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the invoice. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.paid_at

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.paid_at variant 1

anyOf variant 1: When the invoice was paid. Removed if a reversed collection reopens it..

- Value shape: string. When the invoice was paid. Removed if a reversed collection reopens it. When the invoice was paid. Removed if a reversed collection reopens it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When the invoice was paid. Removed if a reversed collection reopens it. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.period_end_at

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.period_end_at variant 1

anyOf variant 1: Exclusive invoice billing period end as an RFC 3339 UTC instant..

- Value shape: string. Exclusive invoice billing period end as an RFC 3339 UTC instant. Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.period_end_at variant 2

anyOf variant 2.

- Value shape: null. Exclusive invoice billing period end as an RFC 3339 UTC instant. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.period_start_at

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.period_start_at variant 1

anyOf variant 1: Inclusive invoice billing period start as an RFC 3339 UTC instant..

- Value shape: string. Inclusive invoice billing period start as an RFC 3339 UTC instant. Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.period_start_at variant 2

anyOf variant 2.

- Value shape: null. Inclusive invoice billing period start as an RFC 3339 UTC instant. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.status

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it..

- Value shape: string. Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Values: `"open"`, `"paid"`, `"written_off"`.

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. 

### MerchantBillingInvoiceIssuedEventInput.data.previous_attributes.updated_at

Declared alternatives: [ExpandedInvoiceSummaryPreviousAttributesInput.updated_at](../models/ExpandedInvoiceSummaryPreviousAttributesInput.md#expandedinvoicesummarypreviousattributesinputupdated_at).

### MerchantBillingInvoiceIssuedEventInput.request

Field definitions: [ApiKeyCreatedEventInput.request](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest).

