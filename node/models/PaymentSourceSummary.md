[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceSummary

A summary of the payment source used for a payment, by funding-method family, with card or bank account display details.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ach_debit` | Optional | [PaymentSourceAchDebitSummary](../models/PaymentSourceAchDebitSummary.md#paymentsourceachdebitsummary) | Display details for a bank account payment source: account type, bank name, and last four digits. |
| `card` | Optional | [PaymentSourceCardSummary](../models/PaymentSourceCardSummary.md#paymentsourcecardsummary) | Display details for a card payment source: brand, last four digits, and payment method ID. |
| `type` | Required | string | Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`. |

