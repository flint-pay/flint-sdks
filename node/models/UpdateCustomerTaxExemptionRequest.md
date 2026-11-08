[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerTaxExemptionRequest

Sparse patch. Omitted fields stay unchanged. Expired and archived records cannot be edited. A version fence alone is not a change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Conditional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Conditional | [CustomerTaxExemptionCoverage](../models/CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/UpdateCustomerTaxExemptionRequest.md#updatecustomertaxexemptionrequestcoverage). |
| `description` | Conditional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Conditional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `evidence_reference` | Conditional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Conditional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Conditional | string | Exemption reason. Other requires a description. Values: [13 declared values](CreateCustomerTaxExemptionRequest.md#createcustomertaxexemptionrequest-reason-values). |
| `start_date` | Conditional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |

### UpdateCustomerTaxExemptionRequest variant 1

anyOf variant 1.

- Required: `reason`.
- Optional: `certificate_number`, `coverage`, `description`, `end_date`, `evidence_reference`, `metadata`, `start_date`.

### UpdateCustomerTaxExemptionRequest variant 2

anyOf variant 2.

- Required: `description`.
- Optional: `certificate_number`, `coverage`, `end_date`, `evidence_reference`, `metadata`, `reason`, `start_date`.

### UpdateCustomerTaxExemptionRequest variant 3

anyOf variant 3.

- Required: `coverage`.
- Optional: `certificate_number`, `description`, `end_date`, `evidence_reference`, `metadata`, `reason`, `start_date`.

### UpdateCustomerTaxExemptionRequest variant 4

anyOf variant 4.

- Required: `certificate_number`.
- Optional: `coverage`, `description`, `end_date`, `evidence_reference`, `metadata`, `reason`, `start_date`.

### UpdateCustomerTaxExemptionRequest variant 5

anyOf variant 5.

- Required: `evidence_reference`.
- Optional: `certificate_number`, `coverage`, `description`, `end_date`, `metadata`, `reason`, `start_date`.

### UpdateCustomerTaxExemptionRequest variant 6

anyOf variant 6.

- Required: `start_date`.
- Optional: `certificate_number`, `coverage`, `description`, `end_date`, `evidence_reference`, `metadata`, `reason`.

### UpdateCustomerTaxExemptionRequest variant 7

anyOf variant 7.

- Required: `end_date`.
- Optional: `certificate_number`, `coverage`, `description`, `evidence_reference`, `metadata`, `reason`, `start_date`.

### UpdateCustomerTaxExemptionRequest variant 8

anyOf variant 8.

- Required: `metadata`.
- Optional: `certificate_number`, `coverage`, `description`, `end_date`, `evidence_reference`, `reason`, `start_date`.

### UpdateCustomerTaxExemptionRequest.coverage

Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.

Field definitions: [shared fields](CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage).

### UpdateCustomerTaxExemptionRequest.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### UpdateCustomerTaxExemptionRequest.coverage variant 2: `country` = `"US"`, `type` = `"states"`

oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

