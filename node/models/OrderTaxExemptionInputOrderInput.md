[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionInputOrderInput

Request input. Response: [OrderTaxExemptionInputOrder](../models/OrderTaxExemptionInputOrder.md#ordertaxexemptioninputorder).

Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Merchant's exemption certificate number. Optional for type order. minLength: `1`. maxLength: `255`. Input only. |
| `coverage` | Required | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Required for type order. Covers all US states or an explicit list of states and DC. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. Input only. |
| `description` | Optional | string | Explanation of the exemption. Required when reason is other; optional for every other reason. Up to 500 characters. minLength: `1`. maxLength: `500`. Input only. |
| `evidence_reference` | Optional | string | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. minLength: `1`. maxLength: `1024`. Input only. |
| `reason` | Required | string | Required for type order. other requires description; description is optional for every other reason. Values: [13 declared values](BuyerOrderTaxExemption.md#buyerordertaxexemption-reason-values). Input only. |
| `type` | Required | string | Required selector. customer uses the linked customer; none ignores customer exemptions; order supplies a declaration. Values: `"order"`. Input only. |

