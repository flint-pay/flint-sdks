[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderTaxExemptionInput

The recorded exemption assessment, without merchant evidence references.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Certificate number recorded at assessment. Omitted when none was recorded. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageInput](../models/CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput) | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `customer_id` | Optional | string | ID of the customer the exemption was assessed from, when one was linked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_tax_exemption_id` | Optional | string | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. |
| `end_date` | Optional | string | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. Example: `"2026-08-02"`. |
| `reason` | Optional | string | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](#buyerordertaxexemptioninput-reason-values). |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. |
| `start_date` | Optional | string | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. Example: `"2026-08-02"`. |
| `tax_exempt` | Required | boolean | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. |

#### BuyerOrderTaxExemptionInput reason values

- `"federal_government"`
- `"state_or_local_government"`
- `"tribal_government"`
- `"foreign_diplomat"`
- `"charitable_organization"`
- `"religious_organization"`
- `"educational_organization"`
- `"resale"`
- `"agricultural_production"`
- `"industrial_production"`
- `"direct_pay_permit"`
- `"direct_mail"`
- `"other"`

