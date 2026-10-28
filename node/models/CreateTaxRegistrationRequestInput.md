[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateTaxRegistrationRequestInput

Request input. Response: [CreateTaxRegistrationRequest](../models/CreateTaxRegistrationRequest.md#createtaxregistrationrequest).

Register a US state where the seller collects tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | Country of registration. Only US is accepted. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Example: `"US"`. Values: `"US"`. |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `registration_number` | Required | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |
| `state` | Required | string | US postal state code or DC. Values: [47 declared values](CreateTaxRegistrationRequest.md#createtaxregistrationrequest-state-values). |

