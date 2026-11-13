[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionRequestInput

Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Merchant's exemption certificate number. Optional for type order. minLength: `1`. maxLength: `255`. |
| `coverage` | Conditional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Required for type order. Covers all US states or an explicit list of states and DC. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string | Explanation of the exemption. Required when reason is other; optional for every other reason. Up to 500 characters. minLength: `1`. maxLength: `500`. |
| `evidence_reference` | Optional | string | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. minLength: `1`. maxLength: `1024`. |
| `reason` | Conditional | string | Required for type order. other requires description; description is optional for every other reason. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `type` | Required | string | Required selector. customer uses the linked customer; none ignores customer exemptions; order supplies a declaration. Values: `"customer"`, `"none"`, `"order"`. Input only. |

### OrderTaxExemptionRequestInput variant 1: `type` = `"customer"`

oneOf with type: "customer": Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected..

- Condition: not (at least one(present(`reason`); present(`coverage`); present(`certificate_number`); present(`description`); present(`evidence_reference`))).
- Optional: `coverage`, `reason`.
- Constraints for `type`: Values: `"customer"`.

### OrderTaxExemptionRequestInput variant 2: `type` = `"none"`

oneOf with type: "none": Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected..

- Condition: not (at least one(present(`reason`); present(`coverage`); present(`certificate_number`); present(`description`); present(`evidence_reference`))).
- Optional: `coverage`, `reason`.
- Constraints for `type`: Values: `"none"`.

### OrderTaxExemptionRequestInput variant 3: `type` = `"order"`

oneOf with type: "order": Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected..

- Required: `coverage`, `reason`.
- Constraints for `reason`: Values: `"federal_government"`, `"state_or_local_government"`, `"tribal_government"`, `"foreign_diplomat"`, `"charitable_organization"`, `"religious_organization"`, `"educational_organization"`, `"resale"`, `"agricultural_production"`, `"industrial_production"`, `"direct_pay_permit"`, `"direct_mail"`, `"other"`.
- Constraints for `type`: Values: `"order"`.

