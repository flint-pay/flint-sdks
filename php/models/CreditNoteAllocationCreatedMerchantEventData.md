[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationCreatedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteAllocationCreatedMerchantEventDataObject](../models/CreditNoteAllocationCreatedMerchantEventDataObject.md#creditnoteallocationcreatedmerchanteventdataobject) | One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |

