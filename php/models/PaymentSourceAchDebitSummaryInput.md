[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceAchDebitSummaryInput

Display details for a bank account payment source: account type, bank name, and last four digits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_type` | Optional | string | Values: `"checking"`, `"savings"`, `"other"`. |
| `bank_name` | Optional | string |  |
| `last4` | Optional | string |  |

