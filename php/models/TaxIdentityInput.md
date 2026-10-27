[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityInput

Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Required | string or null | minLength: `1`. maxLength: `255`. |
| `registered_address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | Replaced as a whole: send every field you want to keep. |
| `tax_ids` | Required | Array of [DocumentTaxIDInput](../models/DocumentTaxIDInput.md#documenttaxidinput) | maxItems: `20`. |

