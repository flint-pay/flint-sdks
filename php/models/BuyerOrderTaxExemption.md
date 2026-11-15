[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderTaxExemption

The recorded exemption assessment, without merchant evidence references.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Certificate number recorded at assessment. Omitted when none was recorded. |
| `coverage` | Optional | object and ([CustomerTaxExemptionCoverageAllStates](../models/CustomerTaxExemptionCoverageAllStates.md#customertaxexemptioncoverageallstates) or [CustomerTaxExemptionCoverageStates](../models/CustomerTaxExemptionCoverageStates.md#customertaxexemptioncoveragestates)) | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage). |
| `customer_id` | Optional | string | ID of the customer the exemption was assessed from, when one was linked. |
| `customer_tax_exemption_id` | Optional | string | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. |
| `end_date` | Optional | string | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. |
| `reason` | Optional | string | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. |
| `start_date` | Optional | string | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. |
| `tax_exempt` | Required | boolean | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. |

### BuyerOrderTaxExemption.coverage

Declared alternatives: [OrderResponse.data.tax.exemption.coverage](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage).

