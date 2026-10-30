[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteVoidedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteVoidedInstalledMerchantsEventDataObject](../models/CreditNoteVoidedInstalledMerchantsEventDataObject.md#creditnotevoidedinstalledmerchantseventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteVoidedInstalledMerchantsEventData.md#creditnotevoidedinstalledmerchantseventdataobject-fields-1). |

### CreditNoteVoidedInstalledMerchantsEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteVoidedInstalledMerchantsEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteVoidedInstalledMerchantsEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

