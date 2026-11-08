[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateTaxRegistrationRequestInput

Request input. Response: [CreateTaxRegistrationRequest](../models/CreateTaxRegistrationRequest.md#createtaxregistrationrequest).

Register a US state, Canadian federal GST/HST, or Canadian provincial tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | Country of registration. Omit for US. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Example: `"US"`. Values: `"US"`, `"CA"`. |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `registration_number` | Required | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `state` | Optional | string | US state code or DC. For CA, omit for federal GST/HST, or use BC, MB, QC or SK for provincial tax. Uses the US postal abbreviation from ISO 3166-2:US (without the US- prefix). Values: [51 declared values](CreateTaxRegistrationRequest.md#createtaxregistrationrequest-state-values). |

