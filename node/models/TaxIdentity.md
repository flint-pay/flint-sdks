[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentity

Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Required | string or null | The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: `1`. maxLength: `255`. |
| `registered_address` | Required | [Address](../models/Address.md#address) or null | The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. |
| `tax_ids` | Required | Array of [DocumentTaxID](../models/DocumentTaxID.md#documenttaxid) | Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: `20`. `tax_ids[]`: [field definitions](../models/TaxIdentity.md#taxidentitytax_ids). |

### TaxIdentity.tax_ids[]

A tax identifier printed on documents, with its country, optional region, identifier type, and value. Flint does not verify the value.

Field definitions: [shared fields](DocumentTaxID.md#documenttaxid).

