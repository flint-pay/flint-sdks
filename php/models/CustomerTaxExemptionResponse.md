[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionResponse

A response containing `CustomerTaxExemption` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption) | Resource, collection, or operation result returned by this request. Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID and through the archived status filter. Expired and archived records cannot be edited. These records store exemption evidence; saving one does not apply it to sales or change the customer's blanket tax_exempt flag. `data`: [field definitions](../models/CustomerTaxExemptionResponse.md#customertaxexemptionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerTaxExemptionResponse.data

Resource, collection, or operation result returned by this request. Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID and through the archived status filter. Expired and archived records cannot be edited. These records store exemption evidence; saving one does not apply it to sales or change the customer's blanket tax_exempt flag.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Required | string or null | Merchant's exemption certificate number. Null when none is recorded. minLength: `1`. maxLength: `255`. |
| `coverage` | Required | object and ([CustomerTaxExemptionCoverageAllStates](../models/CustomerTaxExemptionCoverageAllStates.md#customertaxexemptioncoverageallstates) or [CustomerTaxExemptionCoverageStates](../models/CustomerTaxExemptionCoverageStates.md#customertaxexemptioncoveragestates)) | Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/CustomerTaxExemptionResponse.md#customertaxexemptionresponsedatacoverage). |
| `created_at` | Required | string | When the exemption was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | The customer that owns this nested child for its lifetime. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_tax_exemption_id` | Required | string | Flint customer tax exemption ID, prefixed ctex_. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. |
| `description` | Required | string or null | Explanation of the exemption. Required for other. Null when none is recorded. minLength: `1`. maxLength: `500`. |
| `end_date` | Required | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: `date`. Example: `"2026-08-02"`. |
| `evidence_reference` | Required | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. minLength: `1`. maxLength: `1024`. |
| `metadata` | Required | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `reason` | Required | string | Exemption reason. Other requires a description. Values: [13 declared values](CreateCustomerTaxExemptionRequestInput.md#createcustomertaxexemptionrequestinput-reason-values). |
| `start_date` | Required | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. Example: `"2026-08-02"`. |
| `status` | Required | string | Derived from dates in the merchant timezone, using UTC when unset. DELETE archives the record. Values: `"scheduled"`, `"active"`, `"expired"`, `"archived"`. |
| `updated_at` | Required | string | When the exemption last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current resource version. Date-derived status changes do not advance it. Format: `uint64`. minimum: `1`. |

### CustomerTaxExemptionResponse.data.coverage

Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `states` | Conditional | Array of string | US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: [51 declared values](CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput-states--values). |
| `type` | Required | string | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. |

### CustomerTaxExemptionResponse.data.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### CustomerTaxExemptionResponse.data.coverage variant 2: `country` = `"US"`, `type` = `"states"`

oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

### CustomerTaxExemptionResponse.data.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### CustomerTaxExemptionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

