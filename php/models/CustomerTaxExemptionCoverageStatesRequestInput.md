[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoverageStatesRequestInput

Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Values: `"US"`. |
| `states` | Required | Array of string | US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: [51 declared values](CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput-states--values). |
| `type` | Required | string | Choose all_states or states explicitly. Values: `"states"`. |

