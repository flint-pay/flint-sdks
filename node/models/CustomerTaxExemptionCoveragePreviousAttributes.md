[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoveragePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Values: `"US"`. `country`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributescountry). |
| `states` | Optional | Array of string or null | US postal state codes or DC. Required for states and forbidden for all_states. Items values: [51 declared values](BuyerOrderTaxExemption.md#buyerordertaxexemptioncoverage-states--values). `states`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributesstates). |
| `type` | Optional | (string or null) | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. `type`: [declared alternatives](../models/CustomerTaxExemptionCoveragePreviousAttributes.md#customertaxexemptioncoveragepreviousattributes-variant-1type), [declared alternatives](../models/CustomerTaxExemptionCoveragePreviousAttributes.md#customertaxexemptioncoveragepreviousattributes-variant-2type). |

### CustomerTaxExemptionCoveragePreviousAttributes variant 1: `country` = `"US"`, `type` = `"all_states"`

anyOf CustomerTaxExemptionCoverageAllStatesPreviousAttributes.

- Constraints for `type`: Values: `"all_states"`.

### CustomerTaxExemptionCoveragePreviousAttributes variant 2: `country` = `"US"`, `type` = `"states"`

anyOf CustomerTaxExemptionCoverageStatesPreviousAttributes.

- Constraints for `type`: Values: `"states"`.

### CustomerTaxExemptionCoveragePreviousAttributes.country

Declared alternatives: [CustomerTaxExemptionCoverageAllStatesPreviousAttributes.country](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributescountry).

### CustomerTaxExemptionCoveragePreviousAttributes.states

Declared alternatives: [CustomerTaxExemptionCoverageAllStatesPreviousAttributes.states](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributesstates).

### CustomerTaxExemptionCoveragePreviousAttributes variant 1.type

### CustomerTaxExemptionCoveragePreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: Choose all_states or states explicitly..

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`, `"states"`.

### CustomerTaxExemptionCoveragePreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

### CustomerTaxExemptionCoveragePreviousAttributes variant 1.type variant 3, 5

anyOf group 2 variant 1: Choose all_states or states explicitly.; anyOf group 3 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`.

### CustomerTaxExemptionCoveragePreviousAttributes variant 2.type

### CustomerTaxExemptionCoveragePreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: Choose all_states or states explicitly..

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`, `"states"`.

### CustomerTaxExemptionCoveragePreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

### CustomerTaxExemptionCoveragePreviousAttributes variant 2.type variant 3, 5

anyOf group 2 variant 1: Choose all_states or states explicitly.; anyOf group 3 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"states"`.

