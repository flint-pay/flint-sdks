[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxRegistration

An independent registration for one US state and a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country of registration. Currently US. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Values: `"US"`. |
| `created_at` | Required | string | When this registration was saved. Format: `date-time`. |
| `end_date` | Required | string or null | Last day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. Null means no end date. Format: `date`. |
| `registration_number_last4` | Required | string | Last four characters of the registration number. The complete number is never returned. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. |
| `state` | Required | string | US postal state code or DC. Registrations in the same state must have non-overlapping date windows. Values: [47 declared values](CreateTaxRegistrationRequestInput.md#createtaxregistrationrequestinput-state-values). |
| `status` | Required | string | Pending until confirmed; then scheduled before start_date, active within the inclusive date window, and ended after end_date. Rejected when verification fails. Removed is returned only by DELETE in its final snapshot. Values: `"pending"`, `"scheduled"`, `"active"`, `"ended"`, `"rejected"`, `"removed"`. |
| `tax_registration_id` | Required | string | Flint tax registration ID. |
| `updated_at` | Required | string | When this registration last changed. Format: `date-time`. |
| `version` | Required | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

