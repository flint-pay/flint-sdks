[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxReverseChargePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_tax_id` | Optional | [CustomerTaxIDPreviousAttributes](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributes) or null | The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. `customer_tax_id`: [declared alternatives](../models/TaxReverseChargePreviousAttributes.md#taxreversechargepreviousattributescustomer_tax_id). |

### TaxReverseChargePreviousAttributes.customer_tax_id

The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Conditional | string or null | Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. `country`: [declared alternatives](../models/TaxReverseChargePreviousAttributes.md#taxreversechargepreviousattributescustomer_tax_id-variant-1country). |
| `identifier_type` | Conditional | string or null | Type of the tax ID, as entered on the customer. `identifier_type`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesidentifier_type). |
| `region` | Conditional | string or null | Region of the tax ID. `null` when the tax ID has no region. `region`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesregion). |
| `value` | Conditional | string or null | The tax ID. `value`: [declared alternatives](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesvalue). |

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1

anyOf CustomerTaxIDPreviousAttributes.

- Optional: `country`, `identifier_type`, `region`, `value`.

### TaxReverseChargePreviousAttributes.customer_tax_id variant 2

anyOf variant 2.

- Undeclared: `country`, `identifier_type`, `region`, `value`.
- Value shape: null. The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. 

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1.country

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1.country variant 1

anyOf variant 1: Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL..

- Value shape: string. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1.country variant 2

anyOf variant 2.

- Value shape: null. Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. 

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1.identifier_type

Declared alternatives: [CustomerTaxIDPreviousAttributes.identifier_type](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesidentifier_type).

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1.region

Declared alternatives: [CustomerTaxIDPreviousAttributes.region](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesregion).

### TaxReverseChargePreviousAttributes.customer_tax_id variant 1.value

Declared alternatives: [CustomerTaxIDPreviousAttributes.value](../models/CustomerTaxIDPreviousAttributes.md#customertaxidpreviousattributesvalue).

