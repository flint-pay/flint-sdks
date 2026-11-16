[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationReversedInstalledMerchantsEventInput

The `credit_note_allocation.reversed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"credit_note_allocation.reversed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CreditNoteAllocationCreatedInstalledMerchantsEventInput.md#creditnoteallocationcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributes). |

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.object

Field definitions: [CreditNoteAllocationCreatedInstalledMerchantsEventInput.data.object](../models/CreditNoteAllocationCreatedInstalledMerchantsEventInput.md#creditnoteallocationcreatedinstalledmerchantseventinputdataobject).

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Optional | string or null | When the credit was applied to the invoice balance. `allocated_at`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesallocated_at). |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Credit applied to the invoice balance. |
| `credit_note_allocation_id` | Optional | string or null | Unique identifier of the allocation. `credit_note_allocation_id`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributescredit_note_allocation_id). |
| `credit_note_id` | Optional | string or null | The credit note whose credit was applied. `credit_note_id`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributescredit_note_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `invoice_id` | Optional | string or null | The invoice whose balance the credit reduced. `invoice_id`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `reversed_at` | Optional | string or null | When the allocation was reversed and its credit returned. Absent while the allocation stands. `reversed_at`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesreversed_at). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. `supported_actions`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributessupported_actions). |

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.allocated_at

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.allocated_at variant 1

anyOf variant 1: When the credit was applied to the invoice balance..

- Value shape: string. When the credit was applied to the invoice balance. When the credit was applied to the invoice balance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.allocated_at variant 2

anyOf variant 2.

- Value shape: null. When the credit was applied to the invoice balance. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.credit_note_allocation_id

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.credit_note_allocation_id variant 1

anyOf variant 1: Unique identifier of the allocation..

- Value shape: string. Unique identifier of the allocation. Unique identifier of the allocation. Example: `"cna_01KEZF7C00EH6DMS9BD8F72CMA"`. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.credit_note_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier of the allocation. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id variant 1

anyOf variant 1: The credit note whose credit was applied..

- Value shape: string. The credit note whose credit was applied. The credit note whose credit was applied. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. The credit note whose credit was applied. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 1

anyOf variant 1: The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list..

- Value shape: string. The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice whose balance the credit reduced..

- Value shape: string. The invoice whose balance the credit reduced. The invoice whose balance the credit reduced. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice whose balance the credit reduced. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.reversed_at

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.reversed_at variant 1

anyOf variant 1: When the allocation was reversed and its credit returned. Absent while the allocation stands..

- Value shape: string. When the allocation was reversed and its credit returned. Absent while the allocation stands. When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.reversed_at variant 2

anyOf variant 2.

- Value shape: null. When the allocation was reversed and its credit returned. Absent while the allocation stands. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`.

### CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### CreditNoteAllocationReversedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

