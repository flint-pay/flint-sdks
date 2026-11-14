[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionRequest

Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Merchant's exemption certificate number. Optional for type order. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverage](../models/CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage) | Replaced as a whole: send every field you want to keep. Required for type order. Covers all US states or an explicit list of states and DC. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/OrderTaxExemptionRequest.md#ordertaxexemptionrequestcoverage). |
| `description` | Optional | string | Explanation of the exemption. Required when reason is other; optional for every other reason. Up to 500 characters. minLength: `1`. maxLength: `500`. |
| `evidence_reference` | Optional | string | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. minLength: `1`. maxLength: `1024`. |
| `reason` | Optional | string | Required for type order. other requires description; description is optional for every other reason. Values: [13 declared values](BuyerOrderTaxExemption.md#buyerordertaxexemption-reason-values). |
| `type` | Optional | string |  |

### OrderTaxExemptionRequest variant 1: `type` = `"customer"`

oneOf with type: "customer": Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected..

- Condition: not (at least one(present(`reason`); present(`coverage`); present(`certificate_number`); present(`description`); present(`evidence_reference`))).
- Constraints for `type`: Values: `"customer"`.

### OrderTaxExemptionRequest variant 2: `type` = `"none"`

oneOf with type: "none": Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected..

- Condition: not (at least one(present(`reason`); present(`coverage`); present(`certificate_number`); present(`description`); present(`evidence_reference`))).
- Constraints for `type`: Values: `"none"`.

### OrderTaxExemptionRequest variant 3: `type` = `"order"`

oneOf with type: "order": Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected..

- Constraints for `type`: Values: `"order"`.

### OrderTaxExemptionRequest.coverage

Replaced as a whole: send every field you want to keep. Required for type order. Covers all US states or an explicit list of states and DC. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.

Field definitions: [shared fields](CustomerTaxExemptionCoverage.md#customertaxexemptioncoverage).

### OrderTaxExemptionRequest.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### OrderTaxExemptionRequest.coverage variant 2: `country` = `"US"`, `type` = `"states"`

oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

