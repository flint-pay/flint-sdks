[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedInstalledMerchantsEvent

The `invoice_manual_payment.reversed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_manual_payment.reversed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoiceManualPaymentCreatedInstalledMerchantsEvent.md#invoicemanualpaymentcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributes). |

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.object

Field definitions: [InvoiceManualPaymentCreatedInstalledMerchantsEvent.data.object](../models/InvoiceManualPaymentCreatedInstalledMerchantsEvent.md#invoicemanualpaymentcreatedinstalledmerchantseventdataobject).

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Full amount received, including any principal and late fees covered. `amount_money`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesamount_money). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `invoice_id` | Optional | string or null | The invoice this payment was recorded against. `invoice_id`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesinvoice_id). |
| `invoice_manual_payment_id` | Optional | string or null | Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. `invoice_manual_payment_id`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesinvoice_manual_payment_id). |
| `note` | Optional | string or null | Note about the offline payment, up to 4096 characters. `note`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesnote). |
| `payment_reference` | Optional | string or null | Caller-owned check, wire, or bank reference, stored unmodified. `payment_reference`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributespayment_reference). |
| `received_at` | Optional | string or null | When the payment was received. `received_at`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesreceived_at). |
| `reversal_note` | Optional | string or null | Note supplied when reversing the payment. Present only when reversed and a note was supplied. `reversal_note`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesreversal_note). |
| `reversed_at` | Optional | string or null | When the payment was reversed. Present only when reversed. `reversed_at`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesreversed_at). |
| `status` | Optional | string or null | Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`. `status`: [declared alternatives](../models/InvoiceManualPaymentReversedInstalledMerchantsEvent.md#invoicemanualpaymentreversedinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. `supported_actions`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributessupported_actions). |

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.amount_money

Full amount received, including any principal and late fees covered.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Full amount received, including any principal and late fees covered. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key).

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.invoice_id

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice this payment was recorded against..

- Value shape: string. The invoice this payment was recorded against. The invoice this payment was recorded against. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this payment was recorded against. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.invoice_manual_payment_id

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.invoice_manual_payment_id variant 1

anyOf variant 1: Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id..

- Value shape: string. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.invoice_manual_payment_id variant 2

anyOf variant 2.

- Value shape: null. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.note

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.note variant 1

anyOf variant 1: Note about the offline payment, up to 4096 characters..

- Value shape: string. Note about the offline payment, up to 4096 characters. Note about the offline payment, up to 4096 characters. minLength: `1`. maxLength: `4096`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.note variant 2

anyOf variant 2.

- Value shape: null. Note about the offline payment, up to 4096 characters. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.payment_reference

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.payment_reference variant 1

anyOf variant 1: Caller-owned check, wire, or bank reference, stored unmodified..

- Value shape: string. Caller-owned check, wire, or bank reference, stored unmodified. Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.payment_reference variant 2

anyOf variant 2.

- Value shape: null. Caller-owned check, wire, or bank reference, stored unmodified. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.received_at

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.received_at variant 1

anyOf variant 1: When the payment was received..

- Value shape: string. When the payment was received. When the payment was received. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.received_at variant 2

anyOf variant 2.

- Value shape: null. When the payment was received. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.reversal_note

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.reversal_note variant 1

anyOf variant 1: Note supplied when reversing the payment. Present only when reversed and a note was supplied..

- Value shape: string. Note supplied when reversing the payment. Present only when reversed and a note was supplied. Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: `1`. maxLength: `4096`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.reversal_note variant 2

anyOf variant 2.

- Value shape: null. Note supplied when reversing the payment. Present only when reversed and a note was supplied. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.reversed_at

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.reversed_at variant 1

anyOf variant 1: When the payment was reversed. Present only when reversed..

- Value shape: string. When the payment was reversed. Present only when reversed. When the payment was reversed. Present only when reversed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.reversed_at variant 2

anyOf variant 2.

- Value shape: null. When the payment was reversed. Present only when reversed. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.status

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the payment is recorded or has been reversed in full..

- Value shape: string. Whether the payment is recorded or has been reversed in full. Values: `"recorded"`, `"reversed"`.

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment is recorded or has been reversed in full. 

### InvoiceManualPaymentReversedInstalledMerchantsEvent.data.previous_attributes.supported_actions

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.supported_actions](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributessupported_actions).

### InvoiceManualPaymentReversedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

