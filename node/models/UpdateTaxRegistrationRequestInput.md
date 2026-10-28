[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateTaxRegistrationRequestInput

Request input. Response: [UpdateTaxRegistrationRequest](../models/UpdateTaxRegistrationRequest.md#updatetaxregistrationrequest).

Update at least one of registration_number, start_date or end_date. Pending and rejected registrations allow all three fields; registration_number and start_date require a connection that is not active. Scheduled and active registrations allow only end_date. A pending or rejected registration whose tax-account copy exists or may have been created cannot change start_date; delete it and create it again. Ended registrations cannot be changed. A version fence by itself is not a change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Conditional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `registration_number` | Conditional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Conditional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

### UpdateTaxRegistrationRequestInput variant 1

anyOf variant 1.

- Required: `registration_number`.
- Optional: `end_date`, `start_date`.

### UpdateTaxRegistrationRequestInput variant 2

anyOf variant 2.

- Required: `start_date`.
- Optional: `end_date`, `registration_number`.

### UpdateTaxRegistrationRequestInput variant 3

anyOf variant 3.

- Required: `end_date`.
- Optional: `registration_number`, `start_date`.

