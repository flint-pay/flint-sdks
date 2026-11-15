[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityRequestInput

Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.

Request input.

Fields, types, descriptions and enum values: [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput).

