[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssuedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [CreditNoteIssuedMerchantEventDataObject](../models/CreditNoteIssuedMerchantEventDataObject.md#creditnoteissuedmerchanteventdataobject) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteIssuedMerchantEventData.md#creditnoteissuedmerchanteventdataobject-fields-1). |

### CreditNoteIssuedMerchantEventData.object fields 1

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedata).

### CreditNoteIssuedMerchantEventData.object fields 1.buyer_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CreditNoteIssuedMerchantEventData.object fields 1.seller_tax_identity

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

