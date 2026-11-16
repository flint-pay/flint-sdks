[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Optional | string or null | The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. `legal_name`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributeslegal_name). |
| `registered_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. |
| `tax_ids` | Optional | Array of [DocumentTaxIDPreviousAttributes](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributes) or null | Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. `tax_ids`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributestax_ids). |

### TaxIdentityPreviousAttributes.legal_name

### TaxIdentityPreviousAttributes.legal_name variant 1

anyOf variant 1: The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set..

- Value shape: string. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: `1`. maxLength: `255`. 

### TaxIdentityPreviousAttributes.legal_name variant 2

anyOf variant 2.

- Value shape: null. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. 

### TaxIdentityPreviousAttributes.tax_ids

### TaxIdentityPreviousAttributes.tax_ids variant 1

anyOf variant 1: Tax IDs printed on invoices and credit notes, in display order. Empty when none are set..

- Value shape: Array of [DocumentTaxIDPreviousAttributes](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributes). Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: `20`. 

### TaxIdentityPreviousAttributes.tax_ids variant 2

anyOf variant 2.

- Value shape: null. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. 

