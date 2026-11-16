[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Certificate number recorded at assessment. Omitted when none was recorded. `certificate_number`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescertificate_number). |
| `coverage` | Optional | object and Alternative shapes (see declared variants) or null | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. `coverage`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage). |
| `customer_id` | Optional | string or null | ID of the customer the exemption was assessed from, when one was linked. `customer_id`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescustomer_id). |
| `customer_tax_exemption_id` | Optional | string or null | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. `customer_tax_exemption_id`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescustomer_tax_exemption_id). |
| `end_date` | Optional | string or null | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. `end_date`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesend_date). |
| `evidence_reference` | Optional | string or null | Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. `evidence_reference`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesevidence_reference). |
| `reason` | Optional | string or null | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). `reason`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesreason). |
| `source` | Optional | string or null | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. `source`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributessource). |
| `start_date` | Optional | string or null | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. `start_date`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesstart_date). |
| `tax_exempt` | Optional | boolean or null | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. `tax_exempt`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributestax_exempt). |

### OrderTaxExemptionPreviousAttributes.certificate_number

### OrderTaxExemptionPreviousAttributes.certificate_number variant 1

anyOf variant 1: Certificate number recorded at assessment. Omitted when none was recorded..

- Value shape: string. Certificate number recorded at assessment. Omitted when none was recorded. 

### OrderTaxExemptionPreviousAttributes.certificate_number variant 2

anyOf variant 2.

- Value shape: null. Certificate number recorded at assessment. Omitted when none was recorded. 

### OrderTaxExemptionPreviousAttributes.coverage

Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Conditional | string or null | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Values: `"US"`. `country`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage-variant-1country). |
| `states` | Conditional | Array of string or null | US postal state codes or DC. Required for states and forbidden for all_states. Items values: [51 declared values](CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput-states--values). `states`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage-variant-1states). |
| `type` | Conditional | (string or null) | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. `type`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage-variant-1type), [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage-variant-2type). |

### OrderTaxExemptionPreviousAttributes.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

anyOf CustomerTaxExemptionCoveragePreviousAttributes; anyOf CustomerTaxExemptionCoverageAllStatesPreviousAttributes.

- Optional: `country`, `states`, `type`.
- Constraints for `type`: Values: `"all_states"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 2: `country` = `"US"`, `type` = `"states"`

anyOf CustomerTaxExemptionCoveragePreviousAttributes; anyOf CustomerTaxExemptionCoverageStatesPreviousAttributes.

- Optional: `country`, `states`, `type`.
- Constraints for `type`: Values: `"states"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 3

anyOf variant 2.

- Undeclared: `country`, `states`, `type`.
- Value shape: null. Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. 

### OrderTaxExemptionPreviousAttributes.coverage variant 1.country

### OrderTaxExemptionPreviousAttributes.coverage variant 1.country variant 1

anyOf variant 1: Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes..

- Value shape: string. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 1.country variant 2

anyOf variant 2.

- Value shape: null. Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. 

### OrderTaxExemptionPreviousAttributes.coverage variant 1.states

### OrderTaxExemptionPreviousAttributes.coverage variant 1.states variant 1

anyOf variant 1: US postal state codes or DC. Required for states and forbidden for all_states..

- Value shape: Array of string. US postal state codes or DC. Required for states and forbidden for all_states. US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: `"AL"`, `"AK"`, `"AZ"`, `"AR"`, `"CA"`, `"CO"`, `"CT"`, `"DE"`, `"DC"`, `"FL"`, `"GA"`, `"HI"`, `"ID"`, `"IL"`, `"IN"`, `"IA"`, `"KS"`, `"KY"`, `"LA"`, `"ME"`, `"MD"`, `"MA"`, `"MI"`, `"MN"`, `"MS"`, `"MO"`, `"MT"`, `"NE"`, `"NV"`, `"NH"`, `"NJ"`, `"NM"`, `"NY"`, `"NC"`, `"ND"`, `"OH"`, `"OK"`, `"OR"`, `"PA"`, `"RI"`, `"SC"`, `"SD"`, `"TN"`, `"TX"`, `"UT"`, `"VT"`, `"VA"`, `"WA"`, `"WV"`, `"WI"`, `"WY"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 1.states variant 2

anyOf variant 2.

- Value shape: null. US postal state codes or DC. Required for states and forbidden for all_states. 

### OrderTaxExemptionPreviousAttributes.coverage variant 1.type

### OrderTaxExemptionPreviousAttributes.coverage variant 1.type variant 1

anyOf group 1 variant 1: Choose all_states or states explicitly..

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`, `"states"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

### OrderTaxExemptionPreviousAttributes.coverage variant 1.type variant 3, 5

anyOf group 2 variant 1: Choose all_states or states explicitly.; anyOf group 3 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 2.country

Declared alternatives: [OrderTaxExemptionPreviousAttributes.coverage variant 1.country](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage-variant-1country).

### OrderTaxExemptionPreviousAttributes.coverage variant 2.states

Declared alternatives: [OrderTaxExemptionPreviousAttributes.coverage variant 1.states](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage-variant-1states).

### OrderTaxExemptionPreviousAttributes.coverage variant 2.type

### OrderTaxExemptionPreviousAttributes.coverage variant 2.type variant 1

anyOf group 1 variant 1: Choose all_states or states explicitly..

- Value shape: string. Choose all_states or states explicitly. Values: `"all_states"`, `"states"`.

### OrderTaxExemptionPreviousAttributes.coverage variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Choose all_states or states explicitly. 

### OrderTaxExemptionPreviousAttributes.coverage variant 2.type variant 3, 5

anyOf group 2 variant 1: Choose all_states or states explicitly.; anyOf group 3 variant 1.

- Value shape: string. Choose all_states or states explicitly. Values: `"states"`.

### OrderTaxExemptionPreviousAttributes.customer_id

### OrderTaxExemptionPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer the exemption was assessed from, when one was linked..

- Value shape: string. ID of the customer the exemption was assessed from, when one was linked. 

### OrderTaxExemptionPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the exemption was assessed from, when one was linked. 

### OrderTaxExemptionPreviousAttributes.customer_tax_exemption_id

### OrderTaxExemptionPreviousAttributes.customer_tax_exemption_id variant 1

anyOf variant 1: Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots..

- Value shape: string. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. 

### OrderTaxExemptionPreviousAttributes.customer_tax_exemption_id variant 2

anyOf variant 2.

- Value shape: null. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. 

### OrderTaxExemptionPreviousAttributes.end_date

### OrderTaxExemptionPreviousAttributes.end_date variant 1

anyOf variant 1: Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded..

- Value shape: string. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. 

### OrderTaxExemptionPreviousAttributes.end_date variant 2

anyOf variant 2.

- Value shape: null. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. 

### OrderTaxExemptionPreviousAttributes.evidence_reference

### OrderTaxExemptionPreviousAttributes.evidence_reference variant 1

anyOf variant 1: Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents..

- Value shape: string. Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. 

### OrderTaxExemptionPreviousAttributes.evidence_reference variant 2

anyOf variant 2.

- Value shape: null. Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. 

### OrderTaxExemptionPreviousAttributes.reason

### OrderTaxExemptionPreviousAttributes.reason variant 1

anyOf variant 1: Exemption reason recorded at assessment. Omitted when no reason was recorded..

- Value shape: string. Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: `"federal_government"`, `"state_or_local_government"`, `"tribal_government"`, `"foreign_diplomat"`, `"charitable_organization"`, `"religious_organization"`, `"educational_organization"`, `"resale"`, `"agricultural_production"`, `"industrial_production"`, `"direct_pay_permit"`, `"direct_mail"`, `"other"`.

### OrderTaxExemptionPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Exemption reason recorded at assessment. Omitted when no reason was recorded. 

### OrderTaxExemptionPreviousAttributes.source

### OrderTaxExemptionPreviousAttributes.source variant 1

anyOf variant 1: The source of the tax exemption assessment. Omitted when the source has not been established..

- Value shape: string. The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`.

### OrderTaxExemptionPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. The source of the tax exemption assessment. Omitted when the source has not been established. 

### OrderTaxExemptionPreviousAttributes.start_date

### OrderTaxExemptionPreviousAttributes.start_date variant 1

anyOf variant 1: First day of the selected record's exemption, inclusive. Omitted when no date was recorded..

- Value shape: string. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. 

### OrderTaxExemptionPreviousAttributes.start_date variant 2

anyOf variant 2.

- Value shape: null. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. 

### OrderTaxExemptionPreviousAttributes.tax_exempt

### OrderTaxExemptionPreviousAttributes.tax_exempt variant 1

anyOf variant 1: Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt..

- Value shape: boolean. Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. 

### OrderTaxExemptionPreviousAttributes.tax_exempt variant 2

anyOf variant 2.

- Value shape: null. Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. 

