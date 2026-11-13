[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxRegistrationResponse

A response containing `TaxRegistration` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TaxRegistration](../models/TaxRegistration.md#taxregistration) | Resource, collection, or operation result returned by this request. An independent registration for a country and optional subdivision, with a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed. `data`: [field definitions](../models/TaxRegistrationResponse.md#taxregistrationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxRegistrationResponse.data

Resource, collection, or operation result returned by this request. An independent registration for a country and optional subdivision, with a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country of registration: US, CA, GB, AU or NZ, or EU for a non-Union OSS registration that covers all 27 member states. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`, `"CA"`, `"EU"`, `"GB"`, `"AU"`, `"NZ"`. |
| `created_at` | Required | string | When this registration was saved. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `end_date` | Required | string or null | Last day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. `null` when the registration has no end date. Format: `date`. Example: `"2026-08-02"`. |
| `registration_number_last4` | Required | string | Last four characters of the registration number. The complete number is never returned. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. Example: `"2026-08-02"`. |
| `state` | Required | string or null | US state code or DC, or CA province BC, MB, QC or SK. Null when the registration is a Canadian federal GST/HST registration or an EU, GB, AU or NZ registration. Date windows must not overlap for the same country and state. Uses the US postal abbreviation from ISO 3166-2:US (without the US- prefix). Values: [52 declared values](TaxRegistrationInput.md#taxregistrationinput-state-values). |
| `status` | Required | string | Pending until confirmed; then scheduled before start_date, active within the inclusive date window, and ended after end_date. Rejected when verification fails. Removed is returned only by DELETE in its final snapshot. Values: `"pending"`, `"scheduled"`, `"active"`, `"ended"`, `"rejected"`, `"removed"`. |
| `tax_registration_id` | Required | string | Flint tax registration ID. Example: `"trg_01KEZF7C008JBM8XMQB3J1FK7J"`. |
| `updated_at` | Required | string | When this registration last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

### TaxRegistrationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

