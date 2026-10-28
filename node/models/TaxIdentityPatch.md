[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityPatch

Declared schema TaxIdentityPatch: Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.

Declared schema TaxIdentityRequest: Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `registered_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) or null | Replaced as a whole: send every field you want to keep. |
| `tax_ids` | Optional | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | maxItems: `20`. `tax_ids[]`: [field definitions](../models/TaxIdentityPatch.md#taxidentitypatchtax_ids). |

### TaxIdentityPatch.tax_ids[]

A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.

Field definitions: [shared fields](DocumentTaxID.md#documenttaxid).

