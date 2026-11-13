[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityPatchInput

Request input. Response: [TaxIdentityPatch](../models/TaxIdentityPatch.md#taxidentitypatch).

Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.





Fields, types, descriptions and enum values: [TaxIdentityRequestInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput).

