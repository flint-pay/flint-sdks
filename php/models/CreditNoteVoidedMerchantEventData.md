[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteVoidedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteVoidedMerchantEventDataObject](../models/CreditNoteVoidedMerchantEventDataObject.md#creditnotevoidedmerchanteventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteVoidedMerchantEventData.md#creditnotevoidedmerchanteventdataobject-fields-1). |

### CreditNoteVoidedMerchantEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteVoidedMerchantEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteVoidedMerchantEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

