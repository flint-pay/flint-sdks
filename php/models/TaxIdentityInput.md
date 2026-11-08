[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityInput

Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Required | string or null | The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: `1`. maxLength: `255`. |
| `registered_address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. |
| `tax_ids` | Required | Array of [DocumentTaxIDInput](../models/DocumentTaxIDInput.md#documenttaxidinput) | Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: `20`. |

