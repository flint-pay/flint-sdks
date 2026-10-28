[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityRequestInput

Request input. Response: [TaxIdentityPatch](../models/TaxIdentityPatch.md#taxidentitypatch).

Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `registered_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) or null | Replaced as a whole: send every field you want to keep. |
| `tax_ids` | Optional | Array of [DocumentTaxIDRequestRequestInput](../models/DocumentTaxIDRequestRequestInput.md#documenttaxidrequestrequestinput) | maxItems: `20`. |

