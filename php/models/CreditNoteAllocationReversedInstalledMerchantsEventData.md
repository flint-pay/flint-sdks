[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationReversedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteAllocationReversedInstalledMerchantsEventDataObject](../models/CreditNoteAllocationReversedInstalledMerchantsEventDataObject.md#creditnoteallocationreversedinstalledmerchantseventdataobject) | One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |

