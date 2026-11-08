[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionCoverageRequestInput

Request input. Response: [CustomerTaxExemptionCoverage](../models/CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage).

Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.





Field definitions: [shared fields](CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage).

### CustomerTaxExemptionCoverageRequestInput variant 1: `country` = `"US"`, `type` = `"all_states"`

oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### CustomerTaxExemptionCoverageRequestInput variant 2: `country` = `"US"`, `type` = `"states"`

oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

