[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionDisclosurePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statements` | Optional | Array of [TaxDisclosureStatementPreviousAttributesInput](../models/TaxDisclosureStatementPreviousAttributesInput.md#taxdisclosurestatementpreviousattributesinput) or null | Statements in display order. The seller must agree to every statement. `statements`: [declared alternatives](../models/TaxConnectionDisclosurePreviousAttributesInput.md#taxconnectiondisclosurepreviousattributesinputstatements). |
| `version` | Optional | string or null | Opaque version of the exact rendered statements. Do not parse it. `version`: [declared alternatives](../models/TaxConnectionDisclosurePreviousAttributesInput.md#taxconnectiondisclosurepreviousattributesinputversion). |

### TaxConnectionDisclosurePreviousAttributesInput.statements

### TaxConnectionDisclosurePreviousAttributesInput.statements variant 1

anyOf variant 1: Statements in display order. The seller must agree to every statement..

- Value shape: Array of [TaxDisclosureStatementPreviousAttributesInput](../models/TaxDisclosureStatementPreviousAttributesInput.md#taxdisclosurestatementpreviousattributesinput). Statements in display order. The seller must agree to every statement. 

### TaxConnectionDisclosurePreviousAttributesInput.statements variant 2

anyOf variant 2.

- Value shape: null. Statements in display order. The seller must agree to every statement. 

### TaxConnectionDisclosurePreviousAttributesInput.version

### TaxConnectionDisclosurePreviousAttributesInput.version variant 1

anyOf variant 1: Opaque version of the exact rendered statements. Do not parse it..

- Value shape: string. Opaque version of the exact rendered statements. Do not parse it. 

### TaxConnectionDisclosurePreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Opaque version of the exact rendered statements. Do not parse it. 

