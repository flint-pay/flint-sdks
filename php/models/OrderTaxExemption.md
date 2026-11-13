[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemption

The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Certificate number recorded at assessment. Omitted when none was recorded. |
| `coverage` | Optional | object and ([CustomerTaxExemptionCoverageAllStates](../models/CustomerTaxExemptionCoverageAllStates.md#customertaxexemptioncoverageallstates) or [CustomerTaxExemptionCoverageStates](../models/CustomerTaxExemptionCoverageStates.md#customertaxexemptioncoveragestates)) | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage). |
| `customer_id` | Optional | string | ID of the customer the exemption was assessed from, when one was linked. |
| `customer_tax_exemption_id` | Optional | string | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. |
| `end_date` | Optional | string | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. |
| `evidence_reference` | Optional | string | Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. |
| `reason` | Optional | string | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. |
| `start_date` | Optional | string | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. |
| `tax_exempt` | Required | boolean | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. |

### OrderTaxExemption.coverage

Declared alternatives: [OrderResponse.data.tax.exemption.coverage](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage).

