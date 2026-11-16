[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoverageStatesPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Values: `"US"`. `country`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributesInput.md#customertaxexemptioncoverageallstatespreviousattributesinputcountry). |
| `states` | Optional | Array of string or null | US postal state codes or DC. Required for states and forbidden for all_states. Items values: [51 declared values](CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput-states--values). `states`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributesInput.md#customertaxexemptioncoverageallstatespreviousattributesinputstates). |
| `type` | Optional | (string or null) | Choose all_states or states explicitly. Values: `"states"`. `type`: [declared alternatives](../models/CustomerTaxExemptionCoverageStatesPreviousAttributesInput.md#customertaxexemptioncoveragestatespreviousattributesinputtype). |

### CustomerTaxExemptionCoverageStatesPreviousAttributesInput.country

Declared alternatives: [CustomerTaxExemptionCoverageAllStatesPreviousAttributesInput.country](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributesInput.md#customertaxexemptioncoverageallstatespreviousattributesinputcountry).

### CustomerTaxExemptionCoverageStatesPreviousAttributesInput.states

Declared alternatives: [CustomerTaxExemptionCoverageAllStatesPreviousAttributesInput.states](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributesInput.md#customertaxexemptioncoverageallstatespreviousattributesinputstates).

### CustomerTaxExemptionCoverageStatesPreviousAttributesInput.type

### CustomerTaxExemptionCoverageStatesPreviousAttributesInput.type variant 1, 3

anyOf group 1 variant 1: Choose all_states or states explicitly.; anyOf group 2 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"states"`.

### CustomerTaxExemptionCoverageStatesPreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

