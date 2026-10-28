[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionDisclosureInput

Ordered seller disclosure rendered with the merchant's effective automatic tax fee.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statements` | Required | Array of [TaxDisclosureStatementInput](../models/TaxDisclosureStatementInput.md#taxdisclosurestatementinput) | Statements in display order. The seller must agree to every statement. |
| `version` | Required | string | Opaque version of the exact rendered statements. Do not parse it. |

