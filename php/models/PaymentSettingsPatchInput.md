[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSettingsPatchInput

Changes to the statement text for new payments.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statement_descriptor` | Optional | string or null | Static text for new payments: 5 to 22 Latin characters, including at least one letter, without &lt; > \ ' " * or control characters. Omit to leave unchanged. Send null to restore the provider default. minLength: `5`. maxLength: `22`. |

