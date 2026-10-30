[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCreatedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteCreatedMerchantEventDataObject](../models/CreditNoteCreatedMerchantEventDataObject.md#creditnotecreatedmerchanteventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteCreatedMerchantEventData.md#creditnotecreatedmerchanteventdataobject-fields-1). |

### CreditNoteCreatedMerchantEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteCreatedMerchantEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteCreatedMerchantEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

