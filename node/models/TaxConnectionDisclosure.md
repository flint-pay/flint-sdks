[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionDisclosure

Ordered seller disclosure rendered with the merchant's effective automatic tax fee.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statements` | Required | Array of [TaxDisclosureStatement](../models/TaxDisclosureStatement.md#taxdisclosurestatement) | Statements in display order. The seller must agree to every statement. |
| `version` | Required | string | Opaque version of the exact rendered statements. Do not parse it. |

