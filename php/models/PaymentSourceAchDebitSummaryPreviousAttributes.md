[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceAchDebitSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_type` | Optional | string or null | The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`. `account_type`: [declared alternatives](../models/PaymentSourceAchDebitSummaryPreviousAttributes.md#paymentsourceachdebitsummarypreviousattributesaccount_type). |
| `bank_name` | Optional | string or null | Name of the bank that holds the account. `bank_name`: [declared alternatives](../models/PaymentSourceAchDebitSummaryPreviousAttributes.md#paymentsourceachdebitsummarypreviousattributesbank_name). |
| `last4` | Optional | string or null | Last four digits of the bank account number. `last4`: [declared alternatives](../models/PaymentSourceAchDebitSummaryPreviousAttributes.md#paymentsourceachdebitsummarypreviousattributeslast4). |

### PaymentSourceAchDebitSummaryPreviousAttributes.account_type

### PaymentSourceAchDebitSummaryPreviousAttributes.account_type variant 1

anyOf variant 1: The kind of bank account..

- Value shape: string. The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`.

### PaymentSourceAchDebitSummaryPreviousAttributes.account_type variant 2

anyOf variant 2.

- Value shape: null. The kind of bank account. 

### PaymentSourceAchDebitSummaryPreviousAttributes.bank_name

### PaymentSourceAchDebitSummaryPreviousAttributes.bank_name variant 1

anyOf variant 1: Name of the bank that holds the account..

- Value shape: string. Name of the bank that holds the account. 

### PaymentSourceAchDebitSummaryPreviousAttributes.bank_name variant 2

anyOf variant 2.

- Value shape: null. Name of the bank that holds the account. 

### PaymentSourceAchDebitSummaryPreviousAttributes.last4

### PaymentSourceAchDebitSummaryPreviousAttributes.last4 variant 1

anyOf variant 1: Last four digits of the bank account number..

- Value shape: string. Last four digits of the bank account number. 

### PaymentSourceAchDebitSummaryPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the bank account number. 

