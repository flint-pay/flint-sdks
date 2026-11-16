[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxIdentityPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `legal_name` | Optional | string or null | The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. `legal_name`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributeslegal_name). |
| `registered_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. `registered_address`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributesregistered_address). |
| `tax_ids` | Optional | Array of [DocumentTaxIDPreviousAttributes](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributes) or null | Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. `tax_ids`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributestax_ids). |

### TaxIdentityPreviousAttributes.legal_name

### TaxIdentityPreviousAttributes.legal_name variant 1

anyOf variant 1: The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set..

- Value shape: string. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. minLength: `1`. maxLength: `255`. 

### TaxIdentityPreviousAttributes.legal_name variant 2

anyOf variant 2.

- Value shape: null. The merchant's legal name, printed on invoices and credit notes. `null` when no legal name is set. 

### TaxIdentityPreviousAttributes.registered_address

The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### TaxIdentityPreviousAttributes.registered_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### TaxIdentityPreviousAttributes.registered_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The merchant's registered business address, printed on invoices and credit notes. `null` when no address is set. 

### TaxIdentityPreviousAttributes.registered_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### TaxIdentityPreviousAttributes.registered_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### TaxIdentityPreviousAttributes.registered_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### TaxIdentityPreviousAttributes.registered_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### TaxIdentityPreviousAttributes.registered_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### TaxIdentityPreviousAttributes.registered_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### TaxIdentityPreviousAttributes.tax_ids

### TaxIdentityPreviousAttributes.tax_ids variant 1

anyOf variant 1: Tax IDs printed on invoices and credit notes, in display order. Empty when none are set..

- Value shape: Array of [DocumentTaxIDPreviousAttributes](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributes). Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. maxItems: `20`. 

### TaxIdentityPreviousAttributes.tax_ids variant 2

anyOf variant 2.

- Value shape: null. Tax IDs printed on invoices and credit notes, in display order. Empty when none are set. 

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Two-letter ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributestax_ids-variant-1-fields-1country). |
| `document_tax_id` | Optional | string or null | Server-generated identity of an existing entry. Omit when adding an entry. `document_tax_id`: [declared alternatives](../models/TaxIdentityPreviousAttributes.md#taxidentitypreviousattributestax_ids-variant-1-fields-1document_tax_id). |
| `identifier_type` | Optional | string or null | Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. `identifier_type`: [declared alternatives](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributesidentifier_type). |
| `region` | Optional | string or null | State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. `region`: [declared alternatives](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributesregion). |
| `value` | Optional | string or null | Full identifier printed on documents. Not verified by Flint. `value`: [declared alternatives](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributesvalue). |

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.country

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.country variant 1

anyOf variant 1: Two-letter ISO 3166-1 alpha-2 country code..

- Value shape: string. Two-letter ISO 3166-1 alpha-2 country code. Two-letter ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.country variant 2

anyOf variant 2.

- Value shape: null. Two-letter ISO 3166-1 alpha-2 country code. 

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.document_tax_id

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.document_tax_id variant 1

anyOf variant 1: Server-generated identity of an existing entry. Omit when adding an entry..

- Value shape: string. Server-generated identity of an existing entry. Omit when adding an entry. Server-generated identity of an existing entry. Omit when adding an entry. minLength: `1`. pattern: `^dti_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dti_01KEZF7C00NS1FDK30F1BE6HPH"`. 

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.document_tax_id variant 2

anyOf variant 2.

- Value shape: null. Server-generated identity of an existing entry. Omit when adding an entry. 

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.identifier_type

Declared alternatives: [DocumentTaxIDPreviousAttributes.identifier_type](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributesidentifier_type).

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.region

Declared alternatives: [DocumentTaxIDPreviousAttributes.region](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributesregion).

### TaxIdentityPreviousAttributes.tax_ids variant 1.[] fields 1.value

Declared alternatives: [DocumentTaxIDPreviousAttributes.value](../models/DocumentTaxIDPreviousAttributes.md#documenttaxidpreviousattributesvalue).

