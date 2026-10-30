[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationCreatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteAllocationCreatedInstalledMerchantsEventDataObject](../models/CreditNoteAllocationCreatedInstalledMerchantsEventDataObject.md#creditnoteallocationcreatedinstalledmerchantseventdataobject) | One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. |

