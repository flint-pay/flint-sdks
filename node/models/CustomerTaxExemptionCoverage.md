[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoverage







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `states` | Conditional | Array of string | US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: [51 declared values](CreateCustomerTaxExemptionRequest.md#createcustomertaxexemptionrequestcoverage-states--values). |
| `type` | Required | string | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. |

### CustomerTaxExemptionCoverage variant 1: `country` = `"US"`, `type` = `"all_states"`

anyOf variant 1: Declared schema CustomerTaxExemptionCoverage. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.; oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### CustomerTaxExemptionCoverage variant 2: `country` = `"US"`, `type` = `"states"`

anyOf variant 1: Declared schema CustomerTaxExemptionCoverage. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.; oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

### CustomerTaxExemptionCoverage variant 3: `country` = `"US"`, `type` = `"all_states"`

anyOf variant 2: Declared schema CustomerTaxExemptionCoverageRequest. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.; oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### CustomerTaxExemptionCoverage variant 4: `country` = `"US"`, `type` = `"states"`

anyOf variant 2: Declared schema CustomerTaxExemptionCoverageRequest. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.; oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

