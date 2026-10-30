[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteUpdatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteUpdatedInstalledMerchantsEventDataObject](../models/CreditNoteUpdatedInstalledMerchantsEventDataObject.md#creditnoteupdatedinstalledmerchantseventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteUpdatedInstalledMerchantsEventData.md#creditnoteupdatedinstalledmerchantseventdataobject-fields-1). |

### CreditNoteUpdatedInstalledMerchantsEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteUpdatedInstalledMerchantsEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteUpdatedInstalledMerchantsEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

