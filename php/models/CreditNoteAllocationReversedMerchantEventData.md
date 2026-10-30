[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationReversedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteAllocationReversedMerchantEventDataObject](../models/CreditNoteAllocationReversedMerchantEventDataObject.md#creditnoteallocationreversedmerchanteventdataobject) | One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |

