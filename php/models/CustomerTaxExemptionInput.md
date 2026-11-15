[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionInput

Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID and through the archived status filter. Expired and archived records cannot be edited. An active record applies to the customer's sales whose taxable destination its coverage contains, within its date range, and is snapshotted on each exempt sale. Saving one doesn't change the customer's blanket tax_exempt flag, which still takes precedence.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Required | string or null | Merchant's exemption certificate number. Null when none is recorded. minLength: `1`. maxLength: `255`. |
| `coverage` | Required | [CustomerTaxExemptionCoverageInput](../models/CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput) | Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `created_at` | Required | string | When the exemption was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | The customer that owns this nested child for its lifetime. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_tax_exemption_id` | Required | string | Flint customer tax exemption ID, prefixed ctex_. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. |
| `description` | Required | string or null | Explanation of the exemption. Required for other. Null when none is recorded. minLength: `1`. maxLength: `500`. |
| `end_date` | Required | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: `date`. Example: `"2026-08-02"`. |
| `evidence_reference` | Required | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. minLength: `1`. maxLength: `1024`. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `reason` | Required | string | Exemption reason. Other requires a description. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Required | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. Example: `"2026-08-02"`. |
| `status` | Required | string | Derived from dates in the merchant timezone, using UTC when unset. DELETE archives the record. Values: `"scheduled"`, `"active"`, `"expired"`, `"archived"`. |
| `updated_at` | Required | string | When the exemption last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current resource version. Date-derived status changes do not advance it. Format: `uint64`. minimum: `1`. |

