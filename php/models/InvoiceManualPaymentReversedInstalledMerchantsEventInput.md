[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedInstalledMerchantsEventInput

The `invoice_manual_payment.reversed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_manual_payment.reversed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoiceManualPaymentCreatedInstalledMerchantsEventInput.md#invoicemanualpaymentcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributes). |

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.object

Field definitions: [InvoiceManualPaymentCreatedInstalledMerchantsEventInput.data.object](../models/InvoiceManualPaymentCreatedInstalledMerchantsEventInput.md#invoicemanualpaymentcreatedinstalledmerchantseventinputdataobject).

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Full amount received, including any principal and late fees covered. |
| `invoice_id` | Optional | string or null | The invoice this payment was recorded against. `invoice_id`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `invoice_manual_payment_id` | Optional | string or null | Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. `invoice_manual_payment_id`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesinvoice_manual_payment_id). |
| `note` | Optional | string or null | Note about the offline payment, up to 4096 characters. `note`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesnote). |
| `payment_reference` | Optional | string or null | Caller-owned check, wire, or bank reference, stored unmodified. `payment_reference`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributespayment_reference). |
| `received_at` | Optional | string or null | When the payment was received. `received_at`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesreceived_at). |
| `reversal_note` | Optional | string or null | Note supplied when reversing the payment. Present only when reversed and a note was supplied. `reversal_note`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesreversal_note). |
| `reversed_at` | Optional | string or null | When the payment was reversed. Present only when reversed. `reversed_at`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesreversed_at). |
| `status` | Optional | string or null | Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`. `status`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEventInput.md#invoicemanualpaymentreversedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. `supported_actions`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributessupported_actions). |

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice this payment was recorded against..

- Value shape: string. The invoice this payment was recorded against. The invoice this payment was recorded against. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this payment was recorded against. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_manual_payment_id

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_manual_payment_id variant 1

anyOf variant 1: Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id..

- Value shape: string. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_manual_payment_id variant 2

anyOf variant 2.

- Value shape: null. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.note

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.note variant 1

anyOf variant 1: Note about the offline payment, up to 4096 characters..

- Value shape: string. Note about the offline payment, up to 4096 characters. Note about the offline payment, up to 4096 characters. minLength: `1`. maxLength: `4096`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.note variant 2

anyOf variant 2.

- Value shape: null. Note about the offline payment, up to 4096 characters. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.payment_reference

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.payment_reference variant 1

anyOf variant 1: Caller-owned check, wire, or bank reference, stored unmodified..

- Value shape: string. Caller-owned check, wire, or bank reference, stored unmodified. Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.payment_reference variant 2

anyOf variant 2.

- Value shape: null. Caller-owned check, wire, or bank reference, stored unmodified. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.received_at

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.received_at variant 1

anyOf variant 1: When the payment was received..

- Value shape: string. When the payment was received. When the payment was received. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.received_at variant 2

anyOf variant 2.

- Value shape: null. When the payment was received. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.reversal_note

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.reversal_note variant 1

anyOf variant 1: Note supplied when reversing the payment. Present only when reversed and a note was supplied..

- Value shape: string. Note supplied when reversing the payment. Present only when reversed and a note was supplied. Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: `1`. maxLength: `4096`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.reversal_note variant 2

anyOf variant 2.

- Value shape: null. Note supplied when reversing the payment. Present only when reversed and a note was supplied. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.reversed_at

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.reversed_at variant 1

anyOf variant 1: When the payment was reversed. Present only when reversed..

- Value shape: string. When the payment was reversed. Present only when reversed. When the payment was reversed. Present only when reversed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.reversed_at variant 2

anyOf variant 2.

- Value shape: null. When the payment was reversed. Present only when reversed. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.status

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether the payment is recorded or has been reversed in full..

- Value shape: string. Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`.

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment is recorded or has been reversed in full. 

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.supported_actions](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributessupported_actions).

### InvoiceManualPaymentReversedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

