[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateTaxRegistrationRequest

Register a US state, Canadian federal GST/HST, Canadian provincial tax, EU non-Union OSS, or GB, AU or NZ VAT or GST.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | Country of registration. Omit for US. Use EU for a non-Union OSS registration, which covers all 27 member states. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Example: `"US"`. Values: `"US"`, `"CA"`, `"EU"`, `"GB"`, `"AU"`, `"NZ"`. |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `state` | Optional | string | US state code or DC. For CA, omit for federal GST/HST, or use BC, MB, QC or SK for provincial tax. Omit for EU, GB, AU and NZ. Uses the US postal abbreviation from ISO 3166-2:US (without the US- prefix). Values: [51 declared values](#createtaxregistrationrequest-state-values). |

#### CreateTaxRegistrationRequest state values

- `"BC"`
- `"MB"`
- `"QC"`
- `"SK"`
- `"AL"`
- `"AK"`
- `"AZ"`
- `"AR"`
- `"CA"`
- `"CO"`
- `"CT"`
- `"DC"`
- `"FL"`
- `"GA"`
- `"HI"`
- `"ID"`
- `"IL"`
- `"IN"`
- `"IA"`
- `"KS"`
- `"KY"`
- `"LA"`
- `"ME"`
- `"MD"`
- `"MA"`
- `"MI"`
- `"MN"`
- `"MS"`
- `"MO"`
- `"NE"`
- `"NV"`
- `"NJ"`
- `"NM"`
- `"NY"`
- `"NC"`
- `"ND"`
- `"OH"`
- `"OK"`
- `"PA"`
- `"RI"`
- `"SC"`
- `"SD"`
- `"TN"`
- `"TX"`
- `"UT"`
- `"VT"`
- `"VA"`
- `"WA"`
- `"WV"`
- `"WI"`
- `"WY"`

