[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxIDPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. `country`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributescountry). |
| `identifier_type` | Optional | string or null | Type of the tax ID, as entered on the customer. `identifier_type`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesidentifier_type). |
| `region` | Optional | string or null or null | Region of the tax ID. `null` when the tax ID has no region. `region`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesregion). |
| `value` | Optional | string or null | The tax ID. `value`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesvalue). |

### CustomerTaxIDPreviousAttributes.country

### CustomerTaxIDPreviousAttributes.country variant 1

anyOf variant 1: Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL..

- Value shape: string. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### CustomerTaxIDPreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. 

### CustomerTaxIDPreviousAttributes.identifier_type

### CustomerTaxIDPreviousAttributes.identifier_type variant 1

anyOf variant 1: Type of the tax ID, as entered on the customer..

- Value shape: string. Type of the tax ID, as entered on the customer. 

### CustomerTaxIDPreviousAttributes.identifier_type variant 2

anyOf variant 2.

- Value shape: null. Type of the tax ID, as entered on the customer. 

### CustomerTaxIDPreviousAttributes.region

### CustomerTaxIDPreviousAttributes.region variant 1

anyOf variant 1: Region of the tax ID. `null` when the tax ID has no region..

- Value shape: (string or null). Region of the tax ID. `null` when the tax ID has no region. 

### CustomerTaxIDPreviousAttributes.region variant 2

anyOf variant 2.

- Value shape: null. Region of the tax ID. `null` when the tax ID has no region. 

### CustomerTaxIDPreviousAttributes.value

### CustomerTaxIDPreviousAttributes.value variant 1

anyOf variant 1: The tax ID..

- Value shape: string. The tax ID. 

### CustomerTaxIDPreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. The tax ID. 

