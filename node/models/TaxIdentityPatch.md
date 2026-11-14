[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityPatch

Declared schema TaxIdentityPatch: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.

Declared schema TaxIdentityRequest: Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Optional | string or null | The merchant's legal name, printed on invoices and credit notes. minLength: `1`. maxLength: `255`. |
| `registered_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) or null | Replaced as a whole: send every field you want to keep. The merchant's registered business address, printed on invoices and credit notes. |
| `tax_ids` | Optional | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | Tax IDs printed on invoices and credit notes, in display order. The list you send replaces the stored one: keep an entry by sending its `document_tax_id`, add one by omitting it, and remove one by leaving the entry out. Send `[]` to remove every tax ID. maxItems: `20`. `tax_ids[]`: [field definitions](../models/TaxIdentityPatch.md#taxidentitypatchtax_ids). |

### TaxIdentityPatch.tax_ids[]

A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.

Field definitions: [shared fields](DocumentTaxID.md#documenttaxid).

