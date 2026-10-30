[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteUpdatedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteUpdatedMerchantEventDataObject](../models/CreditNoteUpdatedMerchantEventDataObject.md#creditnoteupdatedmerchanteventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteUpdatedMerchantEventData.md#creditnoteupdatedmerchanteventdataobject-fields-1). |

### CreditNoteUpdatedMerchantEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteUpdatedMerchantEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteUpdatedMerchantEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

