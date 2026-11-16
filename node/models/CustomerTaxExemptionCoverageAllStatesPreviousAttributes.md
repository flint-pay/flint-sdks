[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoverageAllStatesPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Values: `"US"`. `country`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributescountry). |
| `states` | Optional | Array of string or null | US postal state codes or DC. Required for states and forbidden for all_states. Items values: [51 declared values](BuyerOrderTaxExemption.md#buyerordertaxexemptioncoverage-states--values). `states`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributesstates). |
| `type` | Optional | (string or null) | Choose all_states or states explicitly. Values: `"all_states"`. `type`: [declared alternatives](../models/CustomerTaxExemptionCoverageAllStatesPreviousAttributes.md#customertaxexemptioncoverageallstatespreviousattributestype). |

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.country

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.country variant 1

anyOf variant 1: Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes..

- Value shape: string. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`.

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. 

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.states

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.states variant 1

anyOf variant 1: US postal state codes or DC. Required for states and forbidden for all_states..

- Value shape: Array of string. US postal state codes or DC. Required for states and forbidden for all_states. US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: `"AL"`, `"AK"`, `"AZ"`, `"AR"`, `"CA"`, `"CO"`, `"CT"`, `"DE"`, `"DC"`, `"FL"`, `"GA"`, `"HI"`, `"ID"`, `"IL"`, `"IN"`, `"IA"`, `"KS"`, `"KY"`, `"LA"`, `"ME"`, `"MD"`, `"MA"`, `"MI"`, `"MN"`, `"MS"`, `"MO"`, `"MT"`, `"NE"`, `"NV"`, `"NH"`, `"NJ"`, `"NM"`, `"NY"`, `"NC"`, `"ND"`, `"OH"`, `"OK"`, `"OR"`, `"PA"`, `"RI"`, `"SC"`, `"SD"`, `"TN"`, `"TX"`, `"UT"`, `"VT"`, `"VA"`, `"WA"`, `"WV"`, `"WI"`, `"WY"`.

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.states variant 2

anyOf variant 2.

- Value shape: null. US postal state codes or DC. Required for states and forbidden for all_states. 

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.type

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.type variant 1, 3

anyOf group 1 variant 1: Choose all_states or states explicitly.; anyOf group 2 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`.

### CustomerTaxExemptionCoverageAllStatesPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

