[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxRegistration

An independent registration for a country and optional subdivision, with a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country of registration: US, CA, GB, AU or NZ, or EU for a non-Union OSS registration that covers all 27 member states. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Values: `"US"`, `"CA"`, `"EU"`, `"GB"`, `"AU"`, `"NZ"`. |
| `created_at` | Required | string | When this registration was saved. Format: `date-time`. |
| `end_date` | Required | string or null | Last day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. `null` when the registration has no end date. Format: `date`. |
| `registration_number_last4` | Required | string | Last four characters of the registration number. The complete number is never returned. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. |
| `state` | Required | string or null | US state code or DC, or CA province BC, MB, QC or SK. Null when the registration is a Canadian federal GST/HST registration or an EU, GB, AU or NZ registration. Date windows must not overlap for the same country and state. Uses the US postal abbreviation from ISO 3166-2:US (without the US- prefix). Values: [52 declared values](TaxRegistrationInput.md#taxregistrationinput-state-values). |
| `status` | Required | string | Pending until confirmed; then scheduled before start_date, active within the inclusive date window, and ended after end_date. Rejected when verification fails. Removed is returned only by DELETE in its final snapshot. Values: `"pending"`, `"scheduled"`, `"active"`, `"ended"`, `"rejected"`, `"removed"`. |
| `tax_registration_id` | Required | string | Flint tax registration ID. |
| `updated_at` | Required | string | When this registration last changed. Format: `date-time`. |
| `version` | Required | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

