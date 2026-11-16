[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Certificate number recorded at assessment. Omitted when none was recorded. `certificate_number`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescertificate_number). |
| `coverage` | Optional | [CustomerTaxExemptionCoveragePreviousAttributes](../models/CustomerTaxExemptionCoveragePreviousAttributes.md#customertaxexemptioncoveragepreviousattributes) or null | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. |
| `customer_id` | Optional | string or null | ID of the customer the exemption was assessed from, when one was linked. `customer_id`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescustomer_id). |
| `customer_tax_exemption_id` | Optional | string or null | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. `customer_tax_exemption_id`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescustomer_tax_exemption_id). |
| `end_date` | Optional | string or null | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. `end_date`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesend_date). |
| `evidence_reference` | Optional | string or null | Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. `evidence_reference`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesevidence_reference). |
| `reason` | Optional | string or null | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemption.md#buyerordertaxexemption-reason-values). `reason`: [declared alternatives](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesreason). |
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

### OrderTaxExemptionPreviousAttributes.customer_id

### OrderTaxExemptionPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer the exemption was assessed from, when one was linked..

- Value shape: string. ID of the customer the exemption was assessed from, when one was linked. ID of the customer the exemption was assessed from, when one was linked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderTaxExemptionPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the exemption was assessed from, when one was linked. 

### OrderTaxExemptionPreviousAttributes.customer_tax_exemption_id

### OrderTaxExemptionPreviousAttributes.customer_tax_exemption_id variant 1

anyOf variant 1: Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots..

- Value shape: string. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. 

### OrderTaxExemptionPreviousAttributes.customer_tax_exemption_id variant 2

anyOf variant 2.

- Value shape: null. Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. 

### OrderTaxExemptionPreviousAttributes.end_date

### OrderTaxExemptionPreviousAttributes.end_date variant 1

anyOf variant 1: Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded..

- Value shape: string. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. Example: `"2026-08-02"`. 

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

- Value shape: string. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. Example: `"2026-08-02"`. 

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

