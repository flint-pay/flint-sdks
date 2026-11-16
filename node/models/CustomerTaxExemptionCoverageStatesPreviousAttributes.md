[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoverageStatesPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Values: `"US"`. `country`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributescountry). |
| `states` | Optional | Array of string or null | US postal state codes or DC. Required for states and forbidden for all_states. Items values: [51 declared values](BuyerOrderTaxExemption.md#buyerordertaxexemptioncoverage-states--values). `states`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributesstates). |
| `type` | Optional | (string or null) | Choose all_states or states explicitly. Values: `"states"`. `type`: [declared alternatives](../models/CustomerTaxExemptionCoverageStatesPreviousAttributes.md#customertaxexemptioncoveragestatespreviousattributestype). |

### CustomerTaxExemptionCoverageStatesPreviousAttributes.country

Declared alternatives: [CustomerTaxExemptionCoverageAllStatesPreviousAttributes.country](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributescountry).

### CustomerTaxExemptionCoverageStatesPreviousAttributes.states

Declared alternatives: [CustomerTaxExemptionCoverageAllStatesPreviousAttributes.states](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributesstates).

### CustomerTaxExemptionCoverageStatesPreviousAttributes.type

### CustomerTaxExemptionCoverageStatesPreviousAttributes.type variant 1, 3

anyOf group 1 variant 1: Choose all_states or states explicitly.; anyOf group 2 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"states"`.

### CustomerTaxExemptionCoverageStatesPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

