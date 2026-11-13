[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemptionInputCustomer

Replaced as a whole: send every field you want to keep. Choose customer assessment, no exemption, or a one-off order declaration. Write-only: responses return the exemption that applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns 409 ACTION_NOT_ALLOWED with reason payment_collected.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string | Values: `"customer"`. |

