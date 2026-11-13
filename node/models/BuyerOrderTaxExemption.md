[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderTaxExemption

The recorded exemption assessment, without merchant evidence references.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Certificate number recorded at assessment. Omitted when none was recorded. |
| `coverage` | Optional | [CustomerTaxExemptionCoverage](../models/CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage) | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/BuyerOrderTaxExemption.md#buyerordertaxexemptioncoverage). |
| `customer_id` | Optional | string | ID of the customer the exemption was assessed from, when one was linked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_tax_exemption_id` | Optional | string | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. |
| `end_date` | Optional | string | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. Example: `"2026-08-02"`. |
| `reason` | Optional | string | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](#buyerordertaxexemption-reason-values). |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. |
| `start_date` | Optional | string | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. Example: `"2026-08-02"`. |
| `tax_exempt` | Required | boolean | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. |

#### BuyerOrderTaxExemption reason values

- `"federal_government"`
- `"state_or_local_government"`
- `"tribal_government"`
- `"foreign_diplomat"`
- `"charitable_organization"`
- `"religious_organization"`
- `"educational_organization"`
- `"resale"`
- `"agricultural_production"`
- `"industrial_production"`
- `"direct_pay_permit"`
- `"direct_mail"`
- `"other"`

### BuyerOrderTaxExemption.coverage

Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `states` | Conditional | Array of string | US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: [51 declared values](#buyerordertaxexemptioncoverage-states--values). |
| `type` | Required | string | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. |

#### BuyerOrderTaxExemption.coverage states [] values

- `"AL"`
- `"AK"`
- `"AZ"`
- `"AR"`
- `"CA"`
- `"CO"`
- `"CT"`
- `"DE"`
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
- `"MT"`
- `"NE"`
- `"NV"`
- `"NH"`
- `"NJ"`
- `"NM"`
- `"NY"`
- `"NC"`
- `"ND"`
- `"OH"`
- `"OK"`
- `"OR"`
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

### BuyerOrderTaxExemption.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### BuyerOrderTaxExemption.coverage variant 2: `country` = `"US"`, `type` = `"states"`

oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

