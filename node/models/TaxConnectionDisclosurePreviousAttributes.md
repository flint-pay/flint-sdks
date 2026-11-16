[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionDisclosurePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statements` | Optional | Array of [TaxDisclosureStatementPreviousAttributes](../models/TaxDisclosureStatementPreviousAttributes.md#taxdisclosurestatementpreviousattributes) or null | Statements in display order. The seller must agree to every statement. `statements`: [declared alternatives](../models/TaxConnectionDisclosurePreviousAttributes.md#taxconnectiondisclosurepreviousattributesstatements). |
| `version` | Optional | string or null | Opaque version of the exact rendered statements. Do not parse it. `version`: [declared alternatives](../models/TaxConnectionDisclosurePreviousAttributes.md#taxconnectiondisclosurepreviousattributesversion). |

### TaxConnectionDisclosurePreviousAttributes.statements

### TaxConnectionDisclosurePreviousAttributes.statements variant 1

anyOf variant 1: Statements in display order. The seller must agree to every statement..

- Value shape: Array of [TaxDisclosureStatementPreviousAttributes](../models/TaxDisclosureStatementPreviousAttributes.md#taxdisclosurestatementpreviousattributes). Statements in display order. The seller must agree to every statement. 

### TaxConnectionDisclosurePreviousAttributes.statements variant 2

anyOf variant 2.

- Value shape: null. Statements in display order. The seller must agree to every statement. 

### TaxConnectionDisclosurePreviousAttributes.version

### TaxConnectionDisclosurePreviousAttributes.version variant 1

anyOf variant 1: Opaque version of the exact rendered statements. Do not parse it..

- Value shape: string. Opaque version of the exact rendered statements. Do not parse it. 

### TaxConnectionDisclosurePreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Opaque version of the exact rendered statements. Do not parse it. 

