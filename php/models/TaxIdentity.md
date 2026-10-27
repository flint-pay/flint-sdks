[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentity

Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Required | string or null | minLength: `1`. maxLength: `255`. |
| `registered_address` | Required | [Address](../models/Address.md#address) or null | Replaced as a whole: send every field you want to keep. |
| `tax_ids` | Required | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | maxItems: `20`. `tax_ids[]`: [field definitions](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity-variant-1tax_ids). |

### TaxIdentity.tax_ids[]

Field definitions: [CreditNotesCreateResponse201.data.buyer_tax_identity variant 1.tax_ids[]](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity-variant-1tax_ids).

