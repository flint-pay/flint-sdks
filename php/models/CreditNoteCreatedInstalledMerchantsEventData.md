[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCreatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteCreatedInstalledMerchantsEventDataObject](../models/CreditNoteCreatedInstalledMerchantsEventDataObject.md#creditnotecreatedinstalledmerchantseventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteCreatedInstalledMerchantsEventData.md#creditnotecreatedinstalledmerchantseventdataobject-fields-1). |

### CreditNoteCreatedInstalledMerchantsEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteCreatedInstalledMerchantsEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteCreatedInstalledMerchantsEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

