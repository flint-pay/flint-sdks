[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceAchDebitSummaryInput

Display details for a bank account payment source: account type, bank name, and last four digits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_type` | Optional | string | The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`. |
| `bank_name` | Optional | string | Name of the bank that holds the account. |
| `last4` | Optional | string | Last four digits of the bank account number. |

