[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceAchDebitSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_type` | Optional | string or null | The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`. `account_type`: [declared alternatives](../models/PaymentSourceAchDebitSummaryPreviousAttributesInput.md#paymentsourceachdebitsummarypreviousattributesinputaccount_type). |
| `bank_name` | Optional | string or null | Name of the bank that holds the account. `bank_name`: [declared alternatives](../models/PaymentSourceAchDebitSummaryPreviousAttributesInput.md#paymentsourceachdebitsummarypreviousattributesinputbank_name). |
| `last4` | Optional | string or null | Last four digits of the bank account number. `last4`: [declared alternatives](../models/PaymentSourceAchDebitSummaryPreviousAttributesInput.md#paymentsourceachdebitsummarypreviousattributesinputlast4). |

### PaymentSourceAchDebitSummaryPreviousAttributesInput.account_type

### PaymentSourceAchDebitSummaryPreviousAttributesInput.account_type variant 1

anyOf variant 1: The kind of bank account..

- Value shape: string. The kind of bank account. Values: `"checking"`, `"savings"`, `"other"`.

### PaymentSourceAchDebitSummaryPreviousAttributesInput.account_type variant 2

anyOf variant 2.

- Value shape: null. The kind of bank account. 

### PaymentSourceAchDebitSummaryPreviousAttributesInput.bank_name

### PaymentSourceAchDebitSummaryPreviousAttributesInput.bank_name variant 1

anyOf variant 1: Name of the bank that holds the account..

- Value shape: string. Name of the bank that holds the account. 

### PaymentSourceAchDebitSummaryPreviousAttributesInput.bank_name variant 2

anyOf variant 2.

- Value shape: null. Name of the bank that holds the account. 

### PaymentSourceAchDebitSummaryPreviousAttributesInput.last4

### PaymentSourceAchDebitSummaryPreviousAttributesInput.last4 variant 1

anyOf variant 1: Last four digits of the bank account number..

- Value shape: string. Last four digits of the bank account number. 

### PaymentSourceAchDebitSummaryPreviousAttributesInput.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the bank account number. 

