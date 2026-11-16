[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DocumentTaxIDPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Two-letter ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/DocumentTaxIDPreviousAttributesInput.md#documenttaxidpreviousattributesinputcountry). |
| `document_tax_id` | Optional | string or null | Server-generated identity of an existing entry. Omit when adding an entry. `document_tax_id`: [declared alternatives](../models/DocumentTaxIDPreviousAttributesInput.md#documenttaxidpreviousattributesinputdocument_tax_id). |
| `identifier_type` | Optional | string or null | Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. `identifier_type`: [declared alternatives](../models/DocumentTaxIDPreviousAttributesInput.md#documenttaxidpreviousattributesinputidentifier_type). |
| `region` | Optional | string or null | State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. `region`: [declared alternatives](../models/DocumentTaxIDPreviousAttributesInput.md#documenttaxidpreviousattributesinputregion). |
| `value` | Optional | string or null | Full identifier printed on documents. Not verified by Flint. `value`: [declared alternatives](../models/DocumentTaxIDPreviousAttributesInput.md#documenttaxidpreviousattributesinputvalue). |

### DocumentTaxIDPreviousAttributesInput.country

### DocumentTaxIDPreviousAttributesInput.country variant 1

anyOf variant 1: Two-letter ISO 3166-1 alpha-2 country code..

- Value shape: string. Two-letter ISO 3166-1 alpha-2 country code. Two-letter ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### DocumentTaxIDPreviousAttributesInput.country variant 2

anyOf variant 2.

- Value shape: null. Two-letter ISO 3166-1 alpha-2 country code. 

### DocumentTaxIDPreviousAttributesInput.document_tax_id

### DocumentTaxIDPreviousAttributesInput.document_tax_id variant 1

anyOf variant 1: Server-generated identity of an existing entry. Omit when adding an entry..

- Value shape: string. Server-generated identity of an existing entry. Omit when adding an entry. Server-generated identity of an existing entry. Omit when adding an entry. minLength: `1`. pattern: `^dti_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dti_01KEZF7C00NS1FDK30F1BE6HPH"`. 

### DocumentTaxIDPreviousAttributesInput.document_tax_id variant 2

anyOf variant 2.

- Value shape: null. Server-generated identity of an existing entry. Omit when adding an entry. 

### DocumentTaxIDPreviousAttributesInput.identifier_type

### DocumentTaxIDPreviousAttributesInput.identifier_type variant 1

anyOf variant 1: Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary..

- Value shape: string. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: `1`. maxLength: `64`. pattern: `^[a-z][a-z0-9_]*$`. 

### DocumentTaxIDPreviousAttributesInput.identifier_type variant 2

anyOf variant 2.

- Value shape: null. Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. 

### DocumentTaxIDPreviousAttributesInput.region

### DocumentTaxIDPreviousAttributesInput.region variant 1

anyOf variant 1: State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country..

- Value shape: string. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. minLength: `1`. maxLength: `64`. 

### DocumentTaxIDPreviousAttributesInput.region variant 2

anyOf variant 2.

- Value shape: null. State or province of the country, when the ID applies to one region only. Omitted for IDs that apply to the whole country. 

### DocumentTaxIDPreviousAttributesInput.value

### DocumentTaxIDPreviousAttributesInput.value variant 1

anyOf variant 1: Full identifier printed on documents. Not verified by Flint..

- Value shape: string. Full identifier printed on documents. Not verified by Flint. Full identifier printed on documents. Not verified by Flint. minLength: `1`. maxLength: `255`. 

### DocumentTaxIDPreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. Full identifier printed on documents. Not verified by Flint. 

