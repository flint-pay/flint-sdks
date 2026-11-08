[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerTaxExemptionRequestInput

The request body for: Create a customer tax exemption.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. minLength: `1`. maxLength: `255`. |
| `coverage` | Required | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. minLength: `1`. maxLength: `1024`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `reason` | Required | string | Exemption reason. Other requires a description. Values: [13 declared values](#createcustomertaxexemptionrequestinput-reason-values). |
| `start_date` | Required | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |

#### CreateCustomerTaxExemptionRequestInput reason values

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

