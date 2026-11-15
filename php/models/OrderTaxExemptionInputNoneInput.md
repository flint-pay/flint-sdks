[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionInputNoneInput

Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | string | Required selector. customer uses the linked customer; none ignores customer exemptions; order supplies a declaration. Values: `"none"`. Input only. |

